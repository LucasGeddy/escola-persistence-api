import User from '../models/User';

class UserController {
    async create(req, res) {
        try {
            const novoUser = await User.create(req.body);
            const { id, nome, email } = novoUser;
            return res.json({ id, nome, email });
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }

    // show
    async show(req, res) {
        try {
            const { id, nome, email } = await User.findByPk(req.userId);
            return res.json({ id, nome, email });
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }

    // update
    async update(req, res) {
        try {
            const user = await User.findByPk(req.userId);

            if (!user) {
                return res.status(400).json({
                    errors: ['Usuário não existe'],
                });
            }

            const updatedUser = await user.update(req.body);
            const { id, nome, email } = updatedUser;

            return res.json({ id, nome, email });
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }

    // delete
    async delete(req, res) {
        try {
            const user = await User.findByPk(req.userId);

            if (!user) {
                return res.status(400).json({
                    errors: ['Invalid user'],
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
