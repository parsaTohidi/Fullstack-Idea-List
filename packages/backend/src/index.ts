import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import ideaRoutes from './routes/idea'
import statsRoutes from './routes/stats'
import tooBusy from 'toobusy-js'

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use(function (req, res, next) {
  if (tooBusy()) {
    res.status(503).send("The server is busy right now, Try again later.")
  } else {
    next()
  }
})

app.use('/ideas', ideaRoutes)
app.use('/stats', statsRoutes)

app.get('/healthcheck', (req, res) => {
  res.send({ status: 'OK' })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
