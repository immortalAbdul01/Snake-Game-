console.log('Yes it is working you can start coding ');
class Parent{
    constructor(job,kids,age ){
        this.job=job;
        this.age=age;
        this.kids=kids;
    }
    scolding(){
        return `parents  are scolding  thier ${this.kids} kids  `
    }
    working(){
        return 'parents are working in office so i am alone in my home '
    }
    static calculate(a,b){
return a+b;
    }
}
class child extends Parent{
    constructor(job,kids,age,height,best){
    super(job,kids,age);
this.height=height;
this.best=best;
    }
    play(){
        console.log("kids are playing in the garden ");
    }
}


// father = new Parent("programmer ",5,45);
// console.log(father.scolding());
// console.log(Parent.calculate(5,67));

son=new child('no',4,17,45,"mom");
console.log( child.calculate(56,78));
// console.log(son.play());
son.play();
