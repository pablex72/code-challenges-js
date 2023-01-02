function disemvowel(str) {

const str = 'coding beauty';
const noVowels = str.replace(/[aeiou]/gi, '');
console.log(noVowels);
return noVowels
}

console.log(disemvowel("This website is for losers LOL!"));