/*alphabet_position("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" as a string.
*/

function alphabetPosition(text) {
    return text.split('').filter(v=>/[a-zA-Z]/.test(v)).map(v=>v.toLowerCase().charCodeAt(0)-96).join(' ');
  }

  console.log(alphabetPosition("hello i am a painter"))