import express from 'express'
import { readStats } from '../services/stats';

const router = express.Router()

router.get('/', (req, res) => {
  try {
    const stats = readStats()
    res.status(200).json(stats);
  } catch(e) {
    res.status(500).send({
      error: e
    })
  }
});

export default router
