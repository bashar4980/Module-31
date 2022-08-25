const numbers = [ 1, 9, 17, 22 ];


const addNum=(numbers)=>{
    let sum = 0 ;
    for(let number of numbers){
        sum += number
        
    }
    console.log(sum)
}
addNum(numbers)


const addValue = numbers.reduce((total , value)=>{
    let sum = total + value ;
    return sum;
    
}, 0)

console.log(addValue)