import multer from 'multer';
import { validateFileExtension } from '../utils/fileUtils';
import { Request } from 'express';

const storage = multer.memoryStorage();

const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  if (!validateFileExtension(file.originalname)) {
    cb(new Error('Invalid file type. Allowed types: .java, .go, .cpp, .py, .swift'));
    return;
  }
  cb(null, true);
};

export const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});