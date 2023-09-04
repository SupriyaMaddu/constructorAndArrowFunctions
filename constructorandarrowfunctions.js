// Defining constructor function

function BusticketForm(busname, vehiclenum) {
    this.busname = busname;
    this.vehiclenum = vehiclenum;

    this.booked = function() {
        let confirmationStatus = "Your ticket has been succesfully booked for " + this.busname + " - " + this.vehiclenum;
        return confirmationStatus;
    }

    this.cancelled = function() {
        let confirmationStatus = "Your ticket has been cancelled for " + this.busname + " - " + this.vehiclenum;
        return confirmationStatus;
    }     
}

// Creating objects using new keyword with constructor function
let obj1 = new BusticketForm("APSRTC", "AP16Z0653");
let obj2 = new BusticketForm("TSRTC", "TS25Z3311");

// Accessing properties using dot notation

console.log(obj1.busname + " , " + obj1.vehiclenum + " , " + obj1.booked() + " , " + obj1.cancelled());
console.log(obj2.busname  + " , " +  obj2.vehiclenum  + " , " + obj2.booked()  + " , " +  obj2.cancelled());

// Adding new property to the created object

obj1.servicenum = 4832;
console.log("Service num is " + obj1.servicenum);



// Arrow function 

let sum = (a,b) => a+b;
console.log(sum(15,64));

let isPositive = num => num > 0;
console.log(isPositive(23));

let array = [1,5,4,9,8]

let squared_array = array.map(item => item ** 2);
console.log(squared_array);

let odd_nums = array.filter(item => item % 2 !== 0);
console.log(odd_nums)
  