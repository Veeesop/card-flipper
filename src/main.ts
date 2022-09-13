import express, {Request, Response} from 'express';
import cors from 'cors';
import { Card } from './model/card'
import { shuffleDeck, NextCard, drawCard, unflipCard } from './controller/deckController';

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
});

app.get('/api/next-card', 
    (_req: Request, 
    res: Response<CardResponseObject>): 
    Response<CardResponseObject> => {
        try{
            const nextCard: NextCard = drawCard();
            if(nextCard.errorMsg) {
                return res.send({
                    msg: nextCard.errorMsg,
                    error: false,
                    cardData: {cardsRemaining: nextCard.cardsRemaining},
                })
            }
            return res.status(200).send({
                msg: `Your next card is....`,
                error: false,
                cardData: nextCard
            })
        } catch (error){
            console.log(`an error occurred drawing the next card ${error}`)
            return res.status(500).send({
                msg: `an error occurred drawing the next card ${error}`,
                error: true,
            })
        }
})

app.put('/api/unflip-card', 
    (_req: Request, 
        res: Response<CardResponseObject >):
        Response<CardResponseObject> => {
            try {
                const unflippedCard: NextCard = unflipCard();
                if(unflippedCard.errorMsg){
                    return res.send({
                        msg: unflippedCard.errorMsg,
                        error: false,
                        cardData: {cardsRemaining: unflippedCard.cardsRemaining}
                    })
                }
                return res.status(200).send({
                    msg: 'you put a card back on the pile',
                    error: false,
                    cardData: unflippedCard,
                })
            } catch (error){
                console.log(`an error occurred unflipping the next card ${error}`)
                return res.status(500).send({
                    msg: `an error occurred unflipping the next card ${error}`,
                    error: true,
                })
        }
        
})


app.listen(PORT, () => {
    console.log(`Flipping cards on ${PORT}`);
});