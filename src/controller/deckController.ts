import { Deck } from '../model/deck';
import { Card } from '../model/card';

let deck: Card[];
let flipped: Card[] = [];

export  const shuffleDeck = () => {
    deck = new Deck().shuffleDeck()
    flipped = [];
}