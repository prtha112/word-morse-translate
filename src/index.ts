import { Morse } from './module/Morse';

let morse = new Morse('.- -... -.-.')
let morseToWord: string = morse.morseCharToMorse();

let word = new Morse('Hello world.')
let wordToMorse: string = word.wordCharToMorse();

console.log(morseToWord)
console.log(wordToMorse)