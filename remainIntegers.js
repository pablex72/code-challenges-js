// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
  // Return a new array with the strings filtered out

  var numbers = []
  for (var i = 0; i < l.length; i++) {
    if (Number.isInteger(l[i])) {
      numbers.push(l[i])
    }
  }
  return numbers
}

filter_list([1, 2, 'a', 'b'])
