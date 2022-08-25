// You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
// Now convert this array into an even array (array with even
//     numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
//     method. Hints: add one to any odd number and it will become an even
//   number.

const oddNumber = [1 , 3, 5, 7, 9];

function getEven(numbers){
    const evenNumber = []
    for(let number of numbers){
        const result = number + 1 ;
        evenNumber.push(result);

    }
    return evenNumber ;
}
const evenValue = getEven(oddNumber);
console.log('use for loop: ',evenValue) ;

const evenNumbers = oddNumber.map((number)=> number + 1);
console.log('use map function: ' , evenNumbers)