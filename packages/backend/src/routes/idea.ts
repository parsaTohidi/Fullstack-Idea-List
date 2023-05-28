import express from 'express'
import { createIdea, readIdeas } from '../services/ideas';

const router = express.Router()

router.get('/', (req, res) => {
    res.json(readIdeas());
});

router.post('/', (req, res) => {
    try {
        createIdea({
            submittedBy: req.body.submittedBy.trim(),
            content: req.body.content.trim()
        })
        res.status(200).send(readIdeas());
    } catch (e: any) {
        console.log(e);

        res.status(e.code).send({
            text: e.text
        })
    }
});


export default router
