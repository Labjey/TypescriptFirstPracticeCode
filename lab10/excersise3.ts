class Person{
    private _firstName: string="";
    get firstName(){
        return this._firstName;
    }
    set firstName(value: string){
        this._firstName=value;
    }
}

let person:Person=new Person();
person.firstName="Temesgen";
console.log(person.firstName);