import multer from 'multer';
import multerConfig from '../config/multer';

const upload = multer(multerConfig).single('file');

class PhotosController {
    async store(req, res) {
        try {
            return upload(req, res, (error) => {
                if (error) {
                    return res.status(400).json({
                        errors: [error.code],
                    });
                }

                return res.json(req.file);
            });
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }
}

export default new PhotosController();
