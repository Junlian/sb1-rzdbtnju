import { Router } from 'express';
import { AIController } from '../controllers/aiController';

const router = Router();
const aiController = new AIController();

router.post('/completion', aiController.getCodeCompletion);
router.post('/analyze', aiController.analyzeCode);
router.post('/suggest', aiController.suggestImprovements);

export const aiRouter = router;