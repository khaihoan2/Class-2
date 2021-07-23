class FlashLamp{
    status;
    battery;
    constructor(status, battery) {
        this.status = status;
        this.battery = battery;
    }
    getBattery(){
        return this.battery
    }
    getBatteryInfo(){
        return this.battery.energy;
    }
    getLight(){
         if(this.status){
            alert("Lighting")
        }else ("Not lighting")
    }
    turnOff(){
        this.status= false
    }
    turnOn(){
        this.status= true
    }
}
let battery = new Battery(10);
let flashLamp1 = new FlashLamp(true, battery);
// let battery = flashLamp1.getBattery();
document.write("Battery info;" + flashLamp1.getBatteryInfo()+"<br>");
flashLamp1.getLight();
document.write("Turn on<br/>");
flashLamp1.turnOn();
flashLamp1.turnOff();
document.write("Battery info;"+flashLamp1.getBatteryInfo()+"<br>");
document.write("Turn off<br/>")
flashLamp1.turnOff();
flashLamp1.getLight();