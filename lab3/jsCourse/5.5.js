//t4
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert( arr );

//t5

// function copySorted(arr) {
//     return arr.slice().sort();
//   }
  
//   let arr = ["HTML", "JavaScript", "CSS"];
  
//   let sorted = copySorted(arr);
  
//   alert( sorted );
//   alert( arr );

//t6

function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    };
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }

//t7

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

alert( names ); // John, Pete, Mary

//t8

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map(user => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id
// }));

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

alert( usersMapped[0].id ); // 1
alert( usersMapped[0].fullName ); // John Smith

// let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id
//   }));


//t9

// function sortByAge(arr) {
//     arr.sort((a, b) => a.age - b.age);
//   }
  
//   let john = { name: "John", age: 25 };
//   let pete = { name: "Pete", age: 30 };
//   let mary = { name: "Mary", age: 28 };
  
//   let arr = [ pete, john, mary ];
  
//   sortByAge(arr);
  
//   // now sorted is: [john, mary, pete]
//   alert(arr[0].name); // John
//   alert(arr[1].name); // Mary
//   alert(arr[2].name); // Pete


//t10

// function shuffle(array) {
//     array.sort(() => Math.random() - 0.5);
//   }
  
//   let arr = [1, 2, 3];
//   shuffle(arr);
//   alert(arr);


// function shuffle(array) {
//     array.sort(() => Math.random() - 0.5);
// }
  
//   // counts of appearances for all possible permutations
//   let count = {
//     '123': 0,
//     '132': 0,
//     '213': 0,
//     '231': 0,
//     '321': 0,
//     '312': 0
//   };
  
//   for (let i = 0; i < 1000000; i++) {
//     let array = [1, 2, 3];
//     shuffle(array);
//     count[array.join('')]++;
//   }
  
  // show counts of all possible permutations
//   for (let key in count) {
//     alert(`${key}: ${count[key]}`);
//   }


//t11

// function getAverageAge(users) {
//     return users.reduce((prev, user) => prev + user.age, 0) / users.length;
//   }
  
//   let john = { name: "John", age: 25 };
//   let pete = { name: "Pete", age: 30 };
//   let mary = { name: "Mary", age: 29 };
  
//   let arr = [ john, pete, mary ];
  
//   alert( getAverageAge(arr) ); // 28

//t12

function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( unique(strings) ); // Hare, Krishna, :-O


//t13

function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
}