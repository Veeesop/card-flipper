import _ from 'lodash';
import { Card, Suit} from './card';

export class Deck {
    private cards: Card[];

    constructor() {
        this.cards = [];
    }

    private newDeck = (): Card[] => {
        _.forIn(Suit, (value, _key) => {
            for( let i = 2; i <= 14; i++) {
                const newCard = new Card(value, i);
                newCard.generateName()
                this.cards.push(newCard)
            }
        })
        return this.cards;
    }
} 