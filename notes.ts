//
const stringVar: string = 'sweet';

const Logger = (num: number, str: string): void => {
    console.log(num, str);
}

Logger(345, "true");

//Enums
enum SuitWithString {
    DIAMONDS = 'diamonds',
    SPADES = 'spades',
    CLUBS = 'clubs',
    HEARTS = 'hearts'
}
