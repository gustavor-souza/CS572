class Car{
    public acceleration: number;

    constructor(public name: string) {
      this.name = name;
      this.acceleration = 0;
    }

    public honk(): void {
      console.log(`${this.name} is saying tooooooooot!`);
    }

    public accelerate(speed: number): void {
      this.acceleration = this.acceleration + speed;
    }
}


const car: Car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(60);
console.log(car.acceleration);