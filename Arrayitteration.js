var requests = [
  {
    App: "Adobe",
    Count: 10,
  },
  {
    App: "Apple",
    Count: 12,
  },
  {
    App: "Amazon",
    Count: 5,
  },
  {
    App: "Microsoft",
    Count: 2,
  },
];

// const result =  requests.reduce((total , app)=>{
//     console.log(app)
// },0)

const student = {
  name: "Bashar Ahmed",
  age: 24,
};

// const {name , age} = student ;
// console.log(age)
let data = {
  location: [
    {
      latitude: "34.5 , 37.8",
      longitude: "98.77 , 58.7",
      city: "Hyderabad",
      country: "India",
    },
    {
      latitude: "34.5 , 37.8",
      longitude: "98.77 , 58.7",
      city: "Kolkata",
      country: "India",
    },
    {
      latitude: "34.5 , 37.8",
      longitude: "98.77 , 58.7",
      city: "Rajistan",
      country: "India",
    },
  ],
};

const users = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

console.log("email:", users.email )
console.log("Address :", users.address.city );
console.log("geo: ", users.address.geo.lat);
console.log('Company : ',users.company.name)