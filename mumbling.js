

function accum(input) {
    // place that stores
    let result = '';
    // 	split the string for each letter
    // iterate the letters
    for (let i = 0; i < input.length; i++) {
      //add lower case i+1 i-1 times to string
      for (let j =0; j < i + 1; j++) {
      //capitalize beginning letter
      if(j==0) {
        result += input [i].toUpperCase();
        }else {
        result += input[i].toLowerCase();
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