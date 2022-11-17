console.log('yes this script is working you can stat coding ');

const students=[
    {name:"Abdul",sub: "javascript"},
    {name:"Sushant",sub: "Python"},
    {name:"Rohit",sub: "java"},
]
 function enrollst(student,callback){
    setTimeout(() => {
        
        students.push(student);
    callback();
    }, 7000);

}
function gets() {
    let str= ""
    students.forEach(function (elem) {
console.log(elem.name);        
// str+=`<li>${elem.name} and ${elem.sub} </li>`
document.getElementById('students').innerHTML+=`<li>${elem.name} and ${elem.sub} </li>`;
})
    
}


let stu={name:"rahul",sub:"python"};
// gets();
enrollst(stu,gets);
// gets()