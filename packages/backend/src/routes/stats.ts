import express from 'express'
import { readStats } from '../services/stats';

const router = express.Router()

router.get('/', (req, res) => {
    res.json(readStats());
  });

export default router
