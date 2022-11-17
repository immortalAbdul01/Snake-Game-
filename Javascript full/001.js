console.log("hello world")
console.log("hello this is javascript tutorial ");
const employee={
    "Name":true,
    "roll no ":345,
    "salary ": undefined

}
console.log(employee["Name"]);
console.log("doing this is very easy ");
let a = "abdul"
let b = 7
console.log(a+b);
console.log(typeof (b));
employee['section']="computer department "
console.log(employee);
console.log(new Date());
date=new Date();
console.log(date.toString());
for (let i = 0; i <=100;i++) {
    console.log(i);
}
i=0
while (i<10) {
   console.log("Hii I am abdul");
   i++; 
}
// do {
//     console.log("Hello");
//     i=+1;
// } while (i<10);

let obj={
    name:"Abdul",
    rollno:359,
    section:"Co",
    Year:"TY"
}
for (let key in obj) {
    console.log(key+":"+obj[key]);
    
}
        let arr=[12,3123,14,525,346,47,56,87,68,67,2,35,24,1]
        arr.forEach(function (elements,index) {
            console.log(elements+index);
            
        })