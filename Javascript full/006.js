console.log('yes this javascript is working');
let ta=document.getElementById('ta');
ta.addEventListener('click', edit);
function edit(){
    let taV=ta.value;
    ta.innerHTML=`<textarea id="ta2">${taV}</textarea>`;
    ta2=document.getElementById('ta2');
  
    ta2.addEventListener('blur', function () {
        ta2.innerHTML=`<h1  id="ta" >${ta2.value} </h1>`;
        localStorage.setItem('text',ta2.value);
        
    })
}   