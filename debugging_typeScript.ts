// 1) Setting Types

var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? the 9 was a number type. changing to a string 9 will correct the issue
myString = "9";

// 2) Setting the types for function parameters

function sayHello(name: string){
    return `Hello, ${name}!`;
}
 // This is working great:
console.log(sayHello("Kermit"));
 // Why isn't this working? I want it to return "Hello, 9!"
 // need to change the parameter to a string type. Currently it is set as a number.
console.log(sayHello("9"));

// 3) Optional parameters

function fullName(firstName: string, lastName: string, middleName?: string){
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
}
 // This works:
console.log(fullName("Mary", "Moore", "Tyler"));
 // What do I do if someone doesn't have a middle name?
 // Make middlename optional with a <?> after the key middleName in the function.
console.log(fullName("Jimbo", "Jones"));


// 4) Interfaces and function parameters

interface Student {
    firstName: string;
    lastName: string;
    belts: number;
 }
 function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
 }
 const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
 }
 const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4
 }
 // This seems to work fine:
 console.log(graduate(christine));
 // This one has problems:
 // const jay key of belt is supposed to be belts. Update to belts to correct
 console.log(graduate(jay));
 
// 5) Classes and function parameters

class Ninja {
    fullName: string;
    constructor(
       public firstName: string,
       public lastName: string){
          this.fullName = `${firstName} ${lastName}`;
       }
    debug(){
       console.log("Console.log() is my friend.")
    }
 }
 // This is not making an instance of Ninja, for some reason:
 // ninja required to string parameters when none were given. Also needed to add new to the class call.
 const shane = new Ninja("shane","lame");
 // Since I'm having trouble making an instance of Ninja, I decided to do this:
 // updated turing so it was a proper ninja instance. It will now work with the study function below
 const turing = new Ninja ("Alan", "Turing")
 // Now I'll make a study function, which is a lot like our graduate function from above:
 function study(programmer: Ninja){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
 }
 // Now this has problems:
 console.log(study(turing));


//  6) Arrow functions

var increment = (x: number) => x + 1;
// This works great:
// needed to add () around x and make it defined as a number
console.log(increment(3));
var square = (x: number) => x * x;
// This is not showing me what I want:
// needed to add () around x and make it defined as a number. removed {} after =>
console.log(square(4));
// This is not working:
// declared numbers to x and y. Included ()
var multiply = (x: number, y: number) => x * y;
console.log(2 * 2)
// this is not working:
// declared numbers to x and y including (). added {} around the sum and return vars. added in a console.log calling in numbers for x and y.
var math = (x: number, y: number) => {
   let sum = x + y;
   let product = x * y;
   let difference = Math.abs(x - y);
   return [sum, product, difference];
}
   console.log(math(5,2))


// 7) Arrow functions and 'this'

class Elephant {
    constructor(public age: number){}
    birthday = ()=>{
       this.age++;
    }
 }
 const babar = new Elephant(8);
 setTimeout(babar.birthday, 1000)
 setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
    }, 2000)
 // Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.
 
 