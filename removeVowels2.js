// For example, the string "This website is for losers LOL!" 
// would become "Ths wbst s fr lsrs LL!".
function disemvowel(str) {

    //const str = 'coding beauty';
    const noVowels = str.replace(/[aeiou]/gi, '');
    console.log(noVowels);
    return noVowels
    }
    
    console.log(disemvowel("This website is for losers LOL!"));