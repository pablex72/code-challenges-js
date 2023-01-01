// For example, the string "This website is for losers LOL!" 
// would become "Ths wbst s fr lsrs LL!".
const vowels = 'aeiou';

function disemvowel(str) {
  return str
    .split('')
    .filter(letter => !vowels.includes(letter.toLowerCase()))
    .join('');
}

console.log(disemvowel("This website is for losers LOL!"));