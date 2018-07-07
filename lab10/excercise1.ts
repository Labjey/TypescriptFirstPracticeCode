class Car{
    acceleration: number=0;
    constructor(public name:String){
        
    }

    honk():void{
        console.log(`${this.name} is saying: Tooooooooooot!`);
    }

    accelerate(speed: number):void{
        this.acceleration+=speed;
    }
}

let car =new Car('BMW');
car.honk();
console.log(car.acceleration);
car.accelerate(60);
console.log(car.acceleration);