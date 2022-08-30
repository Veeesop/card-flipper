import { Deck } from '../model/deck';
import { Card } from '../model/card';

export interface NextCard {
    card?: Card;
    cardsRemaining: number;
    errorMsg?: string;
}

let deck: Deck;
let flipped: Deck;

export const shuffleDeck = () => {
    deck = new Deck();
    deck.shuffleDeck();
    flipped = new Deck();

  
}

export const drawCard = (): NextCard => {
        if(flipped.cardsRemaining() === 52){
            return {
                errorMsg: "All Flipped Out! Either flip back or shuffle",
                cardsRemaining: deck.cardsRemaining()
            }
        }
        const cardDrawn: Card = deck.drawOffTop();
        flipped.putOnTop(cardDrawn);

        return {
            cardsRemaining:deck.cardsRemaining(),
            card: cardDrawn
        }
}