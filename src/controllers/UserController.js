import User from '../models/User';

class UserController {
    async create(req, res) {
        const novoUser = await User.create({
            nome: req.body.nome,
            email: req.body.email,
            password: req.body.password,
        });
        res.json(novoUser);
    }
}

export default new UserController();
