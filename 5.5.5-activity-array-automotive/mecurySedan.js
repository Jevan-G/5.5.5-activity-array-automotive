//this includes the vehicle class as a module
const VehicleModule = require('./vehicle').Vehicle

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
    loadPassenger(num){
        if (this.passenger < this.maxPassengers) {
            this.passenger = num;
                return this.passenger;               
        } else {
            console.log(`${this.model} ${this.make} cant fit all the passengers.`)
        }
    }
    start(){
        if (this.fuel > 0) {
            console.log(`start engine`);
            return this.started = true
        } else {
            console.log(`nothing happens tank is empty`);
            return this.started = false;
        }
    }
    checkService(){
        if (this.mileage > 30000) {
            console.log(`time for maintenance`);
            this.scheduleService = true
            return this.scheduleService; 
        }else {
            console.log(`no need for maintenance probably`);
            return this.scheduleService = false;
        }
    }
}

//this shows how to call from this module...
let v = new Car("Mecury", "Sedan", "1965", "black", 10000)

v.start()
v.loadPassenger(5)
v.stop()
v.checkService()

console.log(v)