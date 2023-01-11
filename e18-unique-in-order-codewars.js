/* Implement the function unique_in_order which takes as argument a sequence and returns a list
of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3] */

var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an 
    
    let a1 = iterable.split('').filter((e, i) => {
      console.log(e !== iterable[i-1])
      return e !== iterable[i-1]
    })
    console.log(a1)
    return a1
  }
console.log(uniqueInOrder('aaabbc'))

//let uniqueInOrder = (iterable) => {return [...iterable].filter((a, i) => a !== iterable[i-1])};
