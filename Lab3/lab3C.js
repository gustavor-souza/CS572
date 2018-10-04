const EventEmitter = require( 'events' );
class Gym extends EventEmitter {
    constructor() {
        super();   
        setInterval(() => this.emit("go", console.log("go")), 1000);
    }
  }

gym = new Gym();
gym.on("go", () => console.log("Athlete is working out!"));


