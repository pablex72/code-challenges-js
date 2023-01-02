// 'abc' =>  ['ab', 'c_']
// 'abcdef' => ['ab', 'cd', 'ef'] 

function solution(str){

    var arrInitial = str.split('')
    var result = []

    for(let i = 0; i<arrInitial.length; i+=2){
        if(arrInitial[i+1]) result.push(arrInitial[i]+arrInitial[i+1])
        else result.push(arrInitial[i]+'_')
    }

    console.log(result);
    return result; 
}

solution("hello");

