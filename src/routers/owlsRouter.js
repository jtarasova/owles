import express from 'express';
import { Owl } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const owls = await Owl.findAll();
  res.render('Layout', { owls });
});

router.get('/:name', (req, res) => {
  const { name } = req.params;
  res.render('Layout', { name });
});

export default router;
