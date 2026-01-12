// 1 way to creat a Object 

const student ={
    name:"xyz",
    marks:10,
    printMarks: function (){
        console.log(`marks = ${this.marks}`) // this means this Obj
    }
}

let arr =["apple","mango","banana"];
 // you can use prototype functions and and variables


//  can also creat your own prototypes


    const employee = {
        calcTax () {
            console.log(`tax rate is 10%`);
        }
    }


    const human = {
        salary :"50000"
    }

    human.__proto__ = employee;


    //  classes in JS 

    // class classname {
    //     constructor() { ... }

    //     function name(params) {

    //     }
        
        
    // }


    /// classes in js 
/*
    class Myclass {
        constructor () { ... }
        
        Mymethod () { ... }
    }

    let myObj = new Myclass();
*/

// eg:
class car {
    start (){
        console.log("Stand");
    }
    stop () {
        console.log("Stop");
    }
}


let Fortuner = new car ();
// eg:
class car {
    setBrand (Brand) {
        this.Brand = Brand;
    } 

    start (){
        console.log(`Starting your Car`)
    }
}


/// constructor in classes

// constructor () method is :
//     * automatically invoked by new 
//     * initialize Objects

// eg:

class ToyotaCar {
    constructor (brand){
        console.log("creating new Oject")
        this.brand = brand;
    }
}

let Ford = new ToyotaCar("Ford");


// Inheritance in js 

// --> passing down properties and method from  parent class to child class

// class Parent {

// }

// class child extends Prarent {

// }

// note  : if child and parent have some method , childs methods will be used . [ Mehod Overriding ]

// eg : 

class Parent {
    hello(){
        console.log("hello");
    }
}

class child extends Parent {

}

let Obj = new child();
// we can use child.hello();



// Super Keyword 
