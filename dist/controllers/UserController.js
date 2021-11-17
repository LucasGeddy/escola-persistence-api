"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
    async create(req, res) {
        try {
            const novoUser = await _User2.default.create(req.body);
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
            const { id, nome, email } = await _User2.default.findByPk(req.userId);
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
            const user = await _User2.default.findByPk(req.userId);

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
            const user = await _User2.default.findByPk(req.userId);

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

exports. default = new UserController();
