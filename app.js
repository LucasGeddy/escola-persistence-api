import dotenv from 'dotenv';
import express from 'express';
import alunoRoutes from './src/routes/alunoRoutes';
import userRoutes from './src/routes/userRoutes';
import './src/database';

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
    }

    routes() {
        this.app.use('/', alunoRoutes);
        this.app.use('/users/', userRoutes);
    }
}

export default new App().app;
