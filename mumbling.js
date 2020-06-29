

function accum(input) {
    // place that stores
    let result = '';
    // 	split the string for each letter
    // iterate the letters
    for (let i = 0; i < input.length; i++) {
      const currentLetter = input[i];
      //add lower case i+1 i-1 times to string
      const totalCount = i + 1;
      for (let counter =0; counter < totalCount; counter++) {
      //capitalize beginning letter
      if(counter==0) {
        result += currentLetter.toUpperCase();
        }else {
        result += currentLetter.toLowerCase();
      }
    }
    // add dash if not last letter
    if (i != input.length - 1) {
    result += '-';
      }
    }
    return result;
    }
    

    console.log(accum('abcd'));
    console.log(accum('RqaEzty'));
    console.log(accum('cwAt'));
    // accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"