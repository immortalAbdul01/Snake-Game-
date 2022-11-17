console.log('this is javascript file you can start coding ');
let ff=document.getElementById('fetch')
let btn=document.getElementById('btn')
async function india() {
    let res=await fetch('abdul.txt')
    let lyrics=await res.text();
    return lyrics
}
let a =india();
console.log(a);
btn.addEventListener('click',a.then(function (params) {
    console.log(params);
    ff.innerHTML+=`<p>${params}</p>`
    
}))
    