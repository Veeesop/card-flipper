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
    flipped = new Deck(true);
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
            cardsRemaining: deck.cardsRemaining(),
            card: cardDrawn
        }
}

export const unflipCard = ():NextCard => {
 if(flipped.cardsRemaining() === 0) {
    return {
        errorMsg: "Nothing to back flip, flip away",
        cardsRemaining: deck.cardsRemaining()
    }
 }

    const cardToUnflip: Card = flipped.drawOffTop();
    deck.putOnTop(cardToUnflip);

    return {
        cardsRemaining: deck.cardsRemaining(),
        card: flipped.showTopDiscardPile() as Card,
    }
}