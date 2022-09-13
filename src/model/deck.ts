import _ from 'lodash';
import { Card, Suit} from './card';

export class Deck {
    private cards: Card[];
    private isDiscard: boolean;


    constructor(isDiscard:boolean = false) {
        this.cards = [];
        this.isDiscard = isDiscard;
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
    };

    public cardsRemaining = () :number => {
        return this.cards.length;
    }

    public drawOffTop = (): Card => {
        const topCard: Card = JSON.parse(JSON.stringify(this.cards[0]));
        this.cards.shift();
        return topCard;
    }

    public putOnTop = (card: Card): void => {
        this.cards.unshift(card);
    }

    public showTopDiscardPile = (): Card | void => {
        if(this.isDiscard) return this.cards[0];
    }
} 