console.log('hello this is working you can start coding');



// Syntax to create or declare a set 

let numbers =new Set();
// method to add an element in set 
numbers.add(2342);
numbers.add(2341);
numbers.add(2346);
numbers.add(2344)
console.log(numbers);

// check whether the element is present in the set or not 
console.log( numbers.has(232225)) 
// deteting an element from a set 
numbers.delete(2342)
console.log('revised set now :', numbers);

// Iterating elemetns from a set 
// using for of loop 

// for(let item of numbers){
//     console.log(item);
// }

// using forEach loop 

numbers.forEach(element => {
    console.log(element);
});

//converting a set into an array 
let numArr=Array.from(numbers);
console.log(numArr);

/// SYMBOLS IN JAVA SCRIPT 

// syntax to create or declare a symbol in javascript
const a=Symbol('hello this is identitfier ')
const b=Symbol('hello this is second  identitfier ')
console.log(a);

// symbols are used to generate a unique value 
obj={}
obj[a]="abdul"
obj[b]="Rohan"
obj['name']="Sachin"
console.log(obj);
// symbols are ignored in for-in loop 
for(let item in obj )
{
    console.log(item,obj[item]);
}



let aa,bb;
[aa,bb]=[1123,45]
console.log(aa);
console.log(bb);
let colors=["blue ","pink","yellow","purple ", "green ","neavy blue "]
let [r,t,e,...d]=colors
console.log(r);
console.log(t);
console.log(e);
console.log(d);
// Object Destructring 
let obj2={
    name:"rahul",
    age:46,
    description:"idiot",
    size:5,
    status:"married"
}
let {name,age,...description}=obj2
console.log(name);
console.log(age);
console.log(description);





