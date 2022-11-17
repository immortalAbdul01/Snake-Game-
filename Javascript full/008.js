console.log('this is working you can start coding ');
milkBusiness.prototype.slogan=function (){
    return 'this is the best milk'
}
function milkBusiness(price,litter,quality) {
    this.price=price;
    this.litter=litter;
    this.quality=quality;
    
}

function chai(price,litter,quality,helathy,quantity) {
    milkBusiness.call(this,price,litter,quality);
    this.helathy=helathy;
    this.quantity=quantity;
    

}
amul=new milkBusiness(455505,354,"good");
console.log(amul);

console.log(amul.litter);
chai.prototype=Object.create(milkBusiness.prototype);
let redlalbe=new chai(3443,45,"good",false,56);
console.log(redlalbe.slogan);

