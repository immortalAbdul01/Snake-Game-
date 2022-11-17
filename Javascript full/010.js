console.log('yes it is working you can start coding ');
class libray{
    constructor (booklist){
        this.booklist=booklist;


    }
    issueBook(name,user){
        this.name=name;
        this.user=user;
        return `the ${this.name} is issued to ${this.user}`


    }
    removeBook(name,user){
        this.name=name;
        this.user=user;
        return `the ${this.name} is removed by the  ${this.user}`


    }

}
lib1=new libray("rich dad poor dad , power of your subconsis mind ");
console.log(lib1.issueBook('the intelligent investor ','rohan'));
console.log(lib1.removBook('the intelligent investor ','rohan'));