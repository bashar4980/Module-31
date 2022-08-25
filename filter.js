// You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
// return/get all the elements which are divisible by 10 using
// array.filter() method.

const numbers = [33, 50, 79, 78, 90, 101, 30];

function getValue(numbers){
    const getDesireValue = [];
    for(let number of numbers){
        if(number %10 == 0){
            getDesireValue.push(number)
        }
    }
    return getDesireValue
}
const result = getValue(numbers);
console.log('use for loop',result);

const getDesireNum = numbers.filter((item)=> item %10 === 0) ;
console.log('Use Filter' , getDesireNum);




