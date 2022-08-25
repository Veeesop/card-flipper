import _ from 'lodash';
import { Card, Suit} from './card';

export class Deck {
    private cards: Card[];

    constructor() {
        this.cards = [];
    }

    private newDeck = (): Card[] => {
        _.forIn(Suit, (suit, _key) => {
            for( let i = 2; i <= 14; i++) {
                const newCard = new Card(suit, i);
                newCard.generateName()
                this.cards.push(newCard)
            }
        })
        return this.cards;
    }

    public shuffleDeck = (counter: number = 3, deck:  Card[] = this.newDeck()): Card[] => {
        if (counter === 0) return deck;

        for( let i = 51; i >= 0; i --){
            const randomIndex = Math.floor(Math.random() * i);
            let tempDeck: Card = deck[i];
            deck[i] = deck[randomIndex];
            deck[randomIndex] = tempDeck;
        }
        return this.shuffleDeck(counter - 1, deck);
    }
} 