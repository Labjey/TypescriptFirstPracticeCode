class BaseClass{
    width:number;
    length:number; 
    constructor(){
        this.width=0;
        this.length=0;
    };
}

class Rectangle extends BaseClass{
    constructor(){
        super();
    }

    calcSize():number{
        return this.width * this.length;
    }
}

let rectangleObj:Rectangle=new Rectangle();
rectangleObj.width=5;
rectangleObj.length=2;
console.log(rectangleObj.calcSize());