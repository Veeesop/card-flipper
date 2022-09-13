"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deck = void 0;
var lodash_1 = __importDefault(require("lodash"));
var card_1 = require("./card");
var Deck = /** @class */ (function () {
    function Deck(isDiscard) {
        if (isDiscard === void 0) { isDiscard = false; }
        var _this = this;
        this.newDeck = function () {
            lodash_1.default.forIn(card_1.Suit, function (suit, _key) {
                for (var i = 2; i <= 14; i++) {
                    var newCard = new card_1.Card(suit, i);
                    newCard.generateName();
                    _this.cards.push(newCard);
                }
            });
            return _this.cards;
        };
        this.shuffleDeck = function (counter, deck) {
            if (counter === void 0) { counter = 3; }
            if (deck === void 0) { deck = _this.newDeck(); }
            if (counter === 0)
                return deck;
            for (var i = 51; i >= 0; i--) {
                var randomIndex = Math.floor(Math.random() * i);
                var tempDeck = deck[i];
                deck[i] = deck[randomIndex];
                deck[randomIndex] = tempDeck;
            }
            return _this.shuffleDeck(counter - 1, deck);
        };
        this.cardsRemaining = function () {
            return _this.cards.length;
        };
        this.drawOffTop = function () {
            var topCard = JSON.parse(JSON.stringify(_this.cards[0]));
            _this.cards.shift();
            return topCard;
        };
        this.putOnTop = function (card) {
            _this.cards.unshift(card);
        };
        this.showTopDiscardPile = function () {
            if (_this.isDiscard)
                return _this.cards[0];
        };
        this.cards = [];
        this.isDiscard = isDiscard;
    }
    return Deck;
}());
exports.Deck = Deck;
