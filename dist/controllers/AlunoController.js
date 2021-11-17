"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _Photo = require('../models/Photo'); var _Photo2 = _interopRequireDefault(_Photo);

class AlunoController {
    async create(req, res) {
        try {
            const novoAluno = await _Aluno2.default.create(req.body);
            return res.json(novoAluno);
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }

    async listAll(req, res) {
        try {
            const alunos = await _Aluno2.default.findAll({
                attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
                order: [['id', 'DESC'], [_Photo2.default, 'id', 'DESC']],
                include: {
                    model: _Photo2.default,
                    attributes: ['filename', 'url'],
                },
            });
            return res.json(alunos);
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }

    async show(req, res) {
        try {
            if (!req.params.id) return res.status(401).json({ errors: 'Invalid Aluno.id' });

            const aluno = await _Aluno2.default.findByPk(req.params.id,
                {
                    attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
                    order: [['id', 'DESC'], [_Photo2.default, 'id', 'DESC']],
                    include: {
                        model: _Photo2.default,
                        attributes: ['filename', 'url'],
                    },
                });

            if (!aluno) return res.status(404).json({ errors: 'Aluno not found' });

            return res.json(aluno);
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }

    async update(req, res) {
        try {
            if (!req.params.id) return res.status(401).json({ errors: 'Invalid Aluno.id' });

            const aluno = await _Aluno2.default.findByPk(req.params.id);

            if (!aluno) return res.status(404).json({ errors: 'Aluno not found' });

            const alunoAtualizado = await aluno.update(req.body);

            return res.json(alunoAtualizado);
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }

    async delete(req, res) {
        try {
            if (!req.params.id) return res.status(401).json({ errors: 'Invalid Aluno.id' });

            const aluno = await _Aluno2.default.findByPk(req.params.id);

            if (!aluno) return res.status(404).json({ errors: 'Aluno not found' });

            await aluno.destroy();

            return res.json(aluno);
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }
}

exports. default = new AlunoController();
