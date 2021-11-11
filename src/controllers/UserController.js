import User from '../models/User';

class UserController {
    async create(req, res) {
        try {
            const novoUser = await User.create(req.body);
            return res.json(novoUser);
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }

    // index
    async index(req, res) {
        try {
            const users = await User.findAll();
            return res.json(users);
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }

    // show
    async show(req, res) {
        try {
            const users = await User.findByPk(req.params.id);
            return res.json(users);
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }

    // update
    async update(req, res) {
        try {
            if (!req.params.id) {
                return res.status(400).json({
                    errors: ['ID não recebido'],
                });
            }

            const user = await User.findByPk(req.params.id);

            if (!user) {
                return res.status(400).json({
                    errors: ['Usuário não existe'],
                });
            }

            const updatedUser = await user.update(req.body);

            return res.json(updatedUser);
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }

    // delete
    async delete(req, res) {
        try {
            if (!req.params.id) {
                return res.status(400).json({
                    errors: ['ID não recebido'],
                });
            }

            const user = await User.findByPk(req.params.id);

            if (!user) {
                return res.status(400).json({
                    errors: ['Usuário não existe'],
                });
            }

            const deletedUser = await user.destroy();

            return res.json(deletedUser);
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }
}

export default new UserController();
