import { Request, Response } from 'express';
import { getLanguageFromExtension } from '../utils/fileUtils';
import { Project } from '../models/Project';

export class UploadController {
  async uploadFile(req: Request, res: Response) {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const { originalname, buffer } = req.file;
      const { projectId } = req.params;

      const language = getLanguageFromExtension(originalname);
      const content = buffer.toString('utf-8');

      const project = await Project.findById(projectId);
      if (!project) {
        return res.status(404).json({ error: 'Project not found' });
      }

      project.files.push({
        name: originalname,
        content,
        language
      });

      await project.save();

      res.json({
        message: 'File uploaded successfully',
        file: {
          name: originalname,
          language
        }
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}