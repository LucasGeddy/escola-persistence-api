import Aluno from '../models/Aluno';

class HomeController {
    async create(req, res) {
        const novoAluno = await Aluno.create({
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            email: req.body.email,
            idade: req.body.idade,
            peso: req.body.peso,
            altura: req.body.altura,
        });
        res.json(novoAluno);
    }
}

export default new HomeController();
