import express from 'express';
import { Owl } from '../../db/models';

const router = express.Router();

router.post('/', (req, res) => {
  console.log('Hello!');
  res.sendStatus(200);
});

router.post('/owls/delete/:id', async (req, res) => {
  const { id } = req.params;
  await Owl.destroy({ where: { id } });
  res.end();
});

router.post('/owls/add', async (req, res) => {
  const newOwl = await Owl.create(req.body);
  res.json(newOwl);
});

router.post('/word', (req, res) => {
  console.log(req.body);
  res.end();
});

export default router;
