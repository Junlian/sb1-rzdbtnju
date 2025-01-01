import { Router } from 'express';
import { UploadController } from '../controllers/uploadController';
import { upload } from '../middleware/upload';

const router = Router();
const uploadController = new UploadController();

router.post('/:projectId/upload', 
  upload.single('file'),
  uploadController.uploadFile
);

export const uploadRouter = router;