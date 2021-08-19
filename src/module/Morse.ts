export class Morse {
  private word: string;

  constructor(wordinput: string) {
    this.word = wordinput;
  }

  public wordCharToMorse(){
    const word: string = this.word
    let n: number = word.length;
    let morse: string = ''
    for (let i: number = 0; i < n; i++){
      if (i == n) {
        morse = morse + this.wordToMorse(word[i]) 
      }else{
        morse = morse + this.wordToMorse(word[i]) + ' '
      }
    }
    return morse
  }

  public morseCharToMorse(){
    const word: string[] = this.word.split(" ")
    let n: number = word.length;
    let morse: string = ''
    for (let i: number = 0; i < n; i++){
      morse = morse + this.morseToWord(word[i]) 
    }
    return morse
  }

  private wordToMorse(word: string) {
    const wordChar: string = word.toUpperCase();
    switch (wordChar) {
      case "A":
        return ".-";
        break;
      case "B":
        return "-...";
        break;
      case "C":
        return "-.-.";
        break;
      case "D":
        return "-..";
        break;
      case "E":
        return ".";
        break;
      case "F":
        return "..-.";
        break;
      case "G":
        return "--.";
        break;
      case "H":
        return "....";
        break;
      case "I":
        return "..";
        break;
      case "J":
        return ".---";
        break;
      case "K":
        return "-.-";
        break;
      case "L":
        return ".-..";
        break;
      case "M":
        return "--";
        break;
      case "N":
        return "-.";
        break;
      case "O":
        return "---";
        break;
      case "P":
        return ".--.";
        break;
      case "Q":
        return "--.-";
        break;
      case "R":
        return ".-.";
        break;
      case "S":
        return "...";
        break;
      case "T":
        return "-";
        break;
      case "U":
        return "..-";
        break;
      case "V":
        return "...-";
        break;
      case "W":
        return ".--";
        break;
      case "X":
        return "-..-";
        break;
      case "Y":
        return "-.--";
        break;
      case "Z":
        return "--..";
        break;
      case " ":
        return " ";
        break;
      default:
        return "";
        break;
    }
  }

  private morseToWord(morse: string) {
    const morseChar: string = morse.toUpperCase();
    switch (morseChar) {
      case ".-":
        return "A";
        break;
      case "-...":
        return "B";
        break;
      case "-.-.":
        return "C";
        break;
      default:
        return "";
        break;
    }
  }
}

