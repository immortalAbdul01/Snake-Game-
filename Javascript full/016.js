console.log('yes this is working you can start coding ');

let add =x=>x+" this is huge number ";

console.log(add(5));


// function get() {
//     fetch('package.json').then(function (params) {
//         return params.text();
//     }).then(function (data) {
//         console.log(data);
        
//     })
// }

// get();


// get= ()=>{

//     fetch('https://dummyjson.com/products/1')
//     .then(res => res.json())
//     .then(json => console.log(json.images))


                
// }
// get();

function post() {
    fetch('package.json').then(function (params) {
        return params.json();
        
    }).then(function (data){
        console.log(data);
          })

}
post()