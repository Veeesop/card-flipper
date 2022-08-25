import express from 'express';
import cors from 'cors';
import { Card } from './model/card'

const PORT = 3001;
const app = express();

app.use(cors());



app.listen(PORT, () => {
    console.log(`Flipping cards on ${PORT}`);
});