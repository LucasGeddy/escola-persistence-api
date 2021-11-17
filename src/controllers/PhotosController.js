import multer from 'multer';
import multerConfig from '../config/multer';
import Photo from '../models/Photo';
import Aluno from '../models/Aluno';

const upload = multer(multerConfig).single('file');

class PhotosController {
    async store(req, res) {
        try {
            return upload(req, res, async (error) => {
                if (error) {
                    return res.status(400).json({
                        errors: [error.code],
                    });
                }

                const { originalname, filename, alunoId } = {
                    ...req.file,
                    alunoId: req.body.student_id,
                };

                const aluno = await Aluno.findByPk(alunoId);
                if (!aluno) {
                    return res.status(400).json({
                        errors: ['Invalid student'],
                    });
                }

                const photo = await Photo.create({ originalname, filename, aluno_id: alunoId });

                return res.json(photo);
            });
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }
}

export default new PhotosController();
