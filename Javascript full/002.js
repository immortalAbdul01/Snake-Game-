console.log("Document object module ");
// let a = window.innerHeight;
//  a = window.innerWidth;
//  a = window.outerWidth;
//  a = scrollY;
//  a=alert("I will kill you")
//  a=prompt("I will kill you")
//  b=confirm("I will kill you")
//  a=location
//  a=history
// a=document.images[0]
// a=document.body

// a=document.getElementsByClassName('container');
// let b=document.getElementById('child');
let b=document.querySelectorAll('.child');
for (let index = 0; index < b.length; index++) {
    const element = b[index];
    
    element.style.color='red';
    // element.innerHTML='<b> fuck you'
}



// console.log(a);

console.log(b);