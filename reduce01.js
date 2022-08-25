const peoples = [
    {name: "Menna" , age : 20},
    {name: "Rina" , age : 15},
    {name: "Tina" , age : 22}
]

const add = peoples.reduce((total, people)=>{
     const result = total + people.age;
     return result ;
},0) ;
console.log(add)

// const Age = []
// people.map((item)=> {
//     const result = item.age;
//     Age.push(result);
// })

// const Add = Age.reduce((a , b)=>{
//     const result = a + b ;
//    return result ;
// })

// console.log(Add)