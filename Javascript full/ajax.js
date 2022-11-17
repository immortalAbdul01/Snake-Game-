console.log('this is ajax ');

let fru=document.getElementById('fru')
let veg=document.getElementById('veg')
fru.addEventListener('click' ,show )

function show() {
    // console.log('this button is working');
    
    const x=new XMLHttpRequest();
    x.open('GET','https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8',true)

    x.onload=function () {
        if (this.status===200){
            let obj=JSON.parse(this.responseText);
            console.log(obj);
            let list=document.getElementById('list');
            str=""
            for (key in obj){
                // console.log(obj[key].name);
                str+=`<li>${obj[key].name}</li>`
            }
            list.innerHTML=str
        }
        
    }
    x.send();
}