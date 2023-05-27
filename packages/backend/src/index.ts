import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { createIdea, readIdeas } from './ideas';
import { readStats } from './stats';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/ideas', (req, res) => {
  res.json(readIdeas());
});

app.post('/ideas', (req, res) => {
  try {
    createIdea(req.body)
    res.status(200).send(readIdeas());
  } catch (e: any) {
    console.log(e);
    
    res.status(e.code).send({
      text: e.text
    })
  }
});

app.get('/stats', (req, res) => {
  res.json(readStats());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
