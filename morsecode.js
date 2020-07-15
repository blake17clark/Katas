decodeMorse = function(morseCode){
    // splits words at 3 spaces
    return morseCode.split('   ').map(word => {
    // split word into individual codes
      return word.split(' ').map(code => {
      //conver code to letter/digital/symbol
        return MORSE_CODE[code] || ' ';
      }).join('')   // join letters to single word
      }).join(' ').trim(); //  join all words into a single sentence
  }

  console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));