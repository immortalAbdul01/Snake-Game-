console.log('yes this is working you can start coding ');

function check(pass) {
    let p='abdul'
    return new Promise((resolve, reject) => {
        if (pass==p){
            resolve(p);
        }
        else{
            reject(p);
        }
    })
    
}
check("abdul").then(function (pu) {
    console.log("you have entered correct password yes it was "+pu);
}).catch(function (wr) {
    console.log("this is wrong actually it was "+wr);
    
})
