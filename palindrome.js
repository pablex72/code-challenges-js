function checkPalindrome(str) {
  
    let strReverse = str.split('').reverse().join('');
  
    if(strReverse === str){
      return `${str} is a palindrome `+ true;    
    }
    else {
        return `${str} is NOT a palindrome `+ false;
    }
  }
  //console.log(checkPalindrome("ana"))
  console.log(checkPalindrome("anitalavalatin"))