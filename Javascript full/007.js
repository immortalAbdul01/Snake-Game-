console.log('yes the javascript is working');

let name={
    name1:'abdul',
    rollno:456,
    read:function(){
console.log(`${name1 } is reading something`);

    }
}
// console.log(name);

function car(n,a,g) 
{
this.name=n;    
this.age=a;    
this.gender=g;
this.laugh=function () {
    console.log(`${this.name} is laughing `);
}    
this.ye=function(){
    console.log(`${this.name} is ${this.age} years old `);
}
    
}

person1=new car('neha',18,'female');
person2=new car('shursti',18,'female');
person1=new car('neha',18,'female');
person2.laugh();
person1.ye();

car.prototype.getName=function(){
    return this.name;
}

person1=new car('juliie',23,'female');
console.log(person1);
