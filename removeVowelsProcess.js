// For example, the string "This website is for losers LOL!" 
// would become "Ths wbst s fr lsrs LL!".

function disemvowel(str) {

    let arr = str.split('');
    //let strLower = str.toLowerCase()
    for(let i = 0; i <arr.length; i++){
        if(arr[i] === 'a' || 'e' || 'i' ||'o' || 'u'){
            
        }
    }
    let str2 = str;

    return arr;
  }

console.log(disemvowel("This website is for losers LOL!"))