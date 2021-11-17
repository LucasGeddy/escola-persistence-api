import dotenv from 'dotenv';
import express from 'express';
import { resolve } from 'path';
import alunoRoutes from './routes/alunoRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import photoRoutes from './routes/photoRoutes';
import './database';

dotenv.config();

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
        this.app.use(express.static(resolve(__dirname, 'uploads')));
    }

    routes() {
        this.app.use('/alunos/', alunoRoutes);
        this.app.use('/users/', userRoutes);
        this.app.use('/tokens/', tokenRoutes);
        this.app.use('/photos/', photoRoutes);
    }
}

export default new App().app;
