"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unflipCard = exports.drawCard = exports.shuffleDeck = void 0;
var deck_1 = require("../model/deck");
var deck;
var flipped;
var shuffleDeck = function () {
    deck = new deck_1.Deck();
    deck.shuffleDeck();
    flipped = new deck_1.Deck(true);
};
exports.shuffleDeck = shuffleDeck;
var drawCard = function () {
    if (flipped.cardsRemaining() === 52) {
        return {
            errorMsg: "All Flipped Out! Either flip back or shuffle",
            cardsRemaining: deck.cardsRemaining()
        };
    }
    var cardDrawn = deck.drawOffTop();
    flipped.putOnTop(cardDrawn);
    return {
        cardsRemaining: deck.cardsRemaining(),
        card: cardDrawn
    };
};
exports.drawCard = drawCard;
var unflipCard = function () {
    if (flipped.cardsRemaining() === 0) {
        return {
            errorMsg: "Nothing to back flip, flip away",
            cardsRemaining: deck.cardsRemaining()
        };
    }
    var cardToUnflip = flipped.drawOffTop();
    deck.putOnTop(cardToUnflip);
    return {
        cardsRemaining: deck.cardsRemaining(),
        card: flipped.showTopDiscardPile(),
    };
};
exports.unflipCard = unflipCard;
