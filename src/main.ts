import express, {Request, Response} from 'express';
import cors from 'cors';
import { Card } from './model/card'
import { shuffleDeck } from './controller/deckController';

const PORT = 3001;
const app = express();

app.use(cors());

interface cardData {
    card?: Card;
    cardsRemaining: number;
}

interface CardResponseObject {
    msg: string;
    error: boolean;
    cardData?: cardData;
}

app.post('/api/new-deck', (_req: Request, res: Response<CardResponseObject>) => {
    try {
        shuffleDeck();
        res.status(200).send({
            msg: 'Deck shuffled, ready for a flip',
            error: false
        })
    } catch (error){
        res.status(500).send({
            msg: `An error happened while shuffling the deck ${error}`,
            error: true 
        })
    }
})


app.listen(PORT, () => {
    console.log(`Flipping cards on ${PORT}`);
});