import Aluno from '../models/Aluno';

class AlunoController {
    async create(req, res) {
        try {
            const novoAluno = await Aluno.create(req.body);
            return res.json(novoAluno);
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }

    async listAll(req, res) {
        try {
            const alunos = await Aluno.findAll();
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

            const aluno = await Aluno.findByPk(req.params.id);

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

            const aluno = await Aluno.findByPk(req.params.id);

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

            const aluno = await Aluno.findByPk(req.params.id);

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

export default new AlunoController();
