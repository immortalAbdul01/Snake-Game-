console.log('yes this is working you can start coding');

let name1= 'abdul'
let str=""
for(let i = name1.length-1 ; i>=0;i--){
str+= name1[i];
    }
    
// console.log(str);

// // for in loop iterating string
// for(key in name1){
//     // console.log(name1[key]);
// }

// // for off loop iterating an string 
// for(na of name1){
//     console.log(na);
// }

obj=[

    {
        name:"abdul",
        degree:"btech"
    },
    {
        name:"Rahul Gandhi",
        degree:"7th"
    },
    {
        name:"Modi",
        degree:"mtech"
    },
    
]


// for(key in obj ){
//     console.log(obj.name);
// }

// for(key of obj){
//     console.log(key.degree+" "+ key.name);
// }

// Maps in JavaScript 


let myMap=new Map();

const key1 =""
const key2 ={}
const key3 =function () {
}
myMap.set(key1,"My name is anthony gonsalvis")
myMap.set(key2,"This is object so dont worry")
myMap.set(key3,"And this is a function dont worry")
// console.log(myMap);


// // here we are getting the values from my map

// let value1=myMap.get(key1)
// console.log(value1);
// let value2=myMap.get(key2)
// console.log(value2);
// let value3=myMap.get(key3)
// console.log(value3);


// for of loop for getting key and values 
for(let [key,value ]of myMap){
    console.log(key,value)
}

// for of loop used to get only keys this time 
console.log("*********only keys are getting printed here***********")
for(let key of myMap.keys()){
    console.log(key);
}

// for of loop is used to print here only values this time 
for(let value of myMap.values()){
    console.log(value);
}

// using for each loop for gettin values and keys from an map
console.log("for each loop starts from here ****");
myMap.forEach((keys,values) => {
   console.log(values); 
});

// now we are going to convert an map into array 
let arr = Array.from(myMap);
console.log(arr);
// now lets get some keys from our new array 
let arrKey=Array.from(myMap.keys());
console.log(arrKey);

let arrValue=Array.from(myMap.values());
console.log(arrValue);