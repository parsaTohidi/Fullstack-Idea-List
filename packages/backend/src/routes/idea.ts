import express from 'express'
import { createIdea, readIdeas } from '../services/ideas';

const router = express.Router()

router.get('/', (req, res) => {
    try {
        const ideas = readIdeas()
        res.status(200).json(ideas);
    } catch (e) {
        res.status(500).send({
            error: e
        })
    }
});

router.post('/', (req, res) => {
    try {
        createIdea({
            submittedBy: req.body.submittedBy.trim(),
            content: req.body.content.trim()
        })
        res.status(201).send(readIdeas());
    } catch (e: any) {
        if (e.code) {
            res.status(e.code).send({
                error: e.text
            })
        }
        else {
            res.status(500).send({
                error: e
            })
        }
    }
});


export default router
