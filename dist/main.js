"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var card_1 = require("./model/card");
var PORT = 3001;
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
var card = new card_1.Card(card_1.Suit.DIAMONDS, 12);
card.generateName();
console.log(card);
app.listen(PORT, function () {
    console.log("Flipping cards on ".concat(PORT));
});
