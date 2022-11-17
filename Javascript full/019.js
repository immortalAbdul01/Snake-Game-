console.log("Hello this is javascript you can start coding from below ");
let regex=/\Sdul/

const str= "8927598kekfjlsdhhdul"

console.log(regex.exec(str));

if(regex.test(str)){

    console.log(`This is str ${str} and this is ${regex.source} `);
}
else{
    console.log('no doest match ');
}