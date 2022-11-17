console.log('this is eventlistenrs ');
let btn=document.getElementById('btn').addEventListener('click', na

);
function na() {
console.log('yes it is working ');

b=prompt('Enter your name ?')
document.getElementById("hh").innerHTML=`Hello <b>${b}</b> how are you?`;
}
let arr=['sachin ','rohit','rahul']


localStorage.setItem('Name','Abudl');
localStorage.setItem('Name2','Rohan');
localStorage.setItem('Name3',JSON.stringify(arr));



let bbb=JSON.parse(localStorage.getItem('Name3'))
localStorage.removeItem(bbb[1])


// localStorage.clear();
// localStorage.removeItem('Name');
let headinng=document.getElementById('heading2').addEventListener('dblclick',edit);
function edit(){
   inp= prompt('Edit the heading')
      document.getElementById('heading2').innerHTML=`${inp}`
      localStorage.setItem('heading',inp);

};