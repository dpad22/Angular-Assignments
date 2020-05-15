
class Bike {
    price: number;
    max_speed: string;
    miles: number = 0;
 
 
    constructor(p: number, ms: string) {
       this.price = p;
       this.max_speed = ms;
       this.miles = 0
       // this.info = `${this.price} ${this.max_speed} ${this.miles}`;
    }
    displayInfo() {
       console.log(this.price, this.max_speed, this.miles);
       return self
    }
    ride(r:number=10) {
       console.log("Riding");
       this.miles +=r
       console.log(this.miles)
    }
    reverse(rev: number = 5) {
       console.log ("Reversing")
       this.miles -= rev
       if (this.miles < 0) {
          this.miles = 0;
       }
      console.log(this.miles)
    return self
    }
 }
 let firstBike = new Bike(200, "25mph");
 let secondBike = new Bike(300, "22mph");
 let thirdBike = new Bike(125, "30mph");
 
 firstBike.ride()
 firstBike.ride()
 firstBike.ride()
 firstBike.reverse()
 firstBike.displayInfo()
 secondBike.ride()
 secondBike.ride()
 secondBike.reverse()
 secondBike.reverse()
 secondBike.displayInfo()
 thirdBike.reverse()
 thirdBike.reverse()
 thirdBike.reverse()
 thirdBike.displayInfo()
 