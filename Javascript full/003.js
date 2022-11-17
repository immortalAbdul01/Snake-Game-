let cont =document.querySelector('.container');
// let nodeName=cont.childNodes[0].nodeName
// console.log(nodeName);

// // console.log(cont.children[0].children[1].children[1]);
// console.log(cont.firstChild.parentNode);
// window.print()
let ele=document.createElement("li");
let img=document.createElement("img");
let txt=document.createTextNode('https://www.facebook.com/');
// ele.appendChild(txt);
// ele.appendChild(img);
let ul =document.querySelector('#myul');
// ul.appendChild(ele);
// console.log(ul);
// img.src='vg.jpg';
// img.id='img'

let ele2=document.createElement('a');
ul.replaceWith(ele2);
// let tag=ele2.href='https://www.facebook.com/'
ele2.appendChild(txt);

