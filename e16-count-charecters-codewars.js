function count (string) {  
    // The function code should be here
    const count = {};
    string.split('').forEach(letter => {
        count[letter] = count[letter] ? (count[letter] + 1) : 1; 
    });
     return count;
  }

  console.log(count("aadde"))