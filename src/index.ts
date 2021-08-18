const wordToMorse = (word: string) => {
  switch(word){
    case('A'):
      return '.-'
      break
    case('B'):
      return '-...'
      break
    case('C'):
      return '-.-.'
      break
    case('D'):
      return '-..'
      break
  }
}

const word: string = "ABC"

let i: number = word.length;
var morse: string = ''
while (i--) {
  morse = morse + wordToMorse(word[i]) + ' '
}

console.log(morse)