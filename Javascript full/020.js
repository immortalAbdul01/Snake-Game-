console.log('This is 020 javascript file and you can start coding');

function vegetable(params) {
    let index=0;
    return{
        next:function () {
            if(index<params.length){
                return{
                    value:params[index++],
                    done:false
                }

            }
            else{
                return{
                    done:true
                }
            }
            
        }
    }
    
}

function fruits(values){
    let ind=0;
    return{
        next:function () {
            if(ind<values.length)
            return{
                value:values[ind++],
                done:false
            }
            else{
                return{

                    done:true
                }
            }
            
        }
    }
}


function names (params) {
    let index=0;
    return{
        next:function () {
            if(index<params.length){
                
                return{
                    value:params[index++],
                    done:false
                }
            }
            else{
                return{
                    
                    done:true
                }
            }
        }
    }
    
}
function* namegenrator() {
    let i =0;
   while(i<=10){
    yield "Rahul";
   }

    
}
// arr=['lauki','bhindi','karela','potatoes']
// const veg=vegetable(arr);
// console.log(veg.next());
// console.log(veg.next());
// console.log(veg.next());
// console.log(veg.next());
// console.log(veg.next());

// frr=['Apple','Pineaple','carrot','tomato ']
// const fruit=fruits(frr);
// console.log(fruit.next());
// console.log(fruit.next());
// console.log(fruit.next());
// console.log(fruit.next());
// console.log(fruit.next());

// abdul=['rakesh','rohit','jhunjhunwala','ambani']

// let ab=names(abdul);
// console.log(ab.next());
// console.log(ab.next());
// console.log(ab.next());
// console.log(ab.next());
// console.log(ab.next());


b=namegenrator()
console.log(b.next().value);
console.log(b.next().value);
console.log(b.next().value);
console.log(b.next().value);
console.log(b.next().value);
console.log(b.next().value);
console.log(b.next().value);
console.log(b.next().value);
console.log(b.next().value);
console.log(b.next().value);
console.log(b.next().value);
console.log(b.next().value);


