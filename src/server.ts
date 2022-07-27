import express, { Application } from 'express';

import routes from './routes/favcity';
import cors from 'cors';


const app: Application = express();

const PORT = 5000;

app.use(express.json({ limit: '50mb' }));
app.use(cors());

app.use('/favcity', routes);
app.get('/', (req, res) => {
  res.send('dziala');
});

app.listen(PORT, () => {
  console.log(`działa na portcie ${PORT}`);
});


