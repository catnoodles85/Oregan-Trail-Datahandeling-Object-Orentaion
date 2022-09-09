/**
 inheritance: used more significantly. oojs. multiple levels of prototypes. a use of delegation. 
 * Oregon Trail-----------------------------------------------------------
 * Test Code is in tests.js
 */
// stats of a character===> Traveler;
// 
// Create your Objects here.
// Traveler adds a passanger
// Wagon creates a Wagon


/*
function Traveler(name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
}
Traveler.prototype.hunt = function(){
    return (this.food += 2);
    
}
Traveler.prototype.eat = function(){
    if(this.food < 1){
        this.isHealthy = false;
    }else{
        this.food -= 1;
    }
}
function Wagon(capacity) {
     this.capacity = capacity;
     this.passangers = [];
}
Wagon.prototype.getAvailableSeatCount = function(){
    // reporting function. 
    return this.capacity - this.passangers.length;
}
Wagon.prototype.join = function (traveler){
    if(this.passangers.length < this.capacity){
        this.passangers.push(traveler);
    }else{
        console.log(`unfortunalty, ${traveler.name}, this wagons full partner!`);
    }
}
//! represents false
Wagon.prototype.shouldQuarantine = function(){
  return this.passangers.some((passanger) => !passanger.isHealthy);
}

// acc = bucket currentTravler = 
Wagon.prototype.totalFood = function() {
return this.passangers.reduce((acc, currentTraveler) => acc+currentTraveler.food, 0);
}*/
let startbutton = document.querySelector('#startButton')
startbutton.innerText = "Start game"

const parentDOM = document.querySelector('#centered');
const cards = parentDOM.getElementsByClassName('cards');




console.log(cards)



document.addEventListener("click", startGame)

function startGame(){
    startbutton.style.display = 'none';
}

//creates the traveler:
class Traveler{
    constructor(name){
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
}

hunt(){
    return (this.food += 2);
    
}
eat(){
    if(this.food < 1){
        this.isHealthy = false;
    }else{
        this.food -= 1;
    }
}
}
//inheritance:extends creates a child node from the parent class

//creates new traveler classes: 
class Doctor extends Traveler{
    constructor(name){
        super(name);// default info from the traveler constructor and creates a new traveler. adds special abillities
        this.food = 2;
    }
    complain(){
        let results = document.getElementById("response")
            results.innerHTML = `unfortunalty, ${traveler.name}, this wagons full partner!`
        console.log("you are sick! take your meds")
    }
    eat(){
        if(this.food < 2){
            this.isHealthy = false;
        }else{
            this.food -= 2;
        }
    }

}

//creates wagons:
class Wagon{
constructor(capacity) {
        this.capacity = capacity;
        this.passangers = [];
   }
getAvailableSeatCount() {
       // reporting function. 
       return this.capacity - this.passangers.length;
   }
join(traveler){
       if(this.passangers.length < this.capacity){
           this.passangers.push(traveler);
       }else{
            let results = document.getElementById("response")
            results.innerHTML = `unfortunalty, ${traveler.name}, this wagons full partner!`
            console.log(`unfortunalty, ${traveler.name}, this wagons full partner!`);
       }
   }
   //! represents false
shouldQuarantine() {
     return this.passangers.some((passanger) => !passanger.isHealthy);
   }
   
   // acc = bucket currentTravler = 
totalFood() {{
   return this.passangers.reduce((acc, currentTraveler) => acc+currentTraveler.food, 0);
   }
}
}

//creates special wagons:
class deluxeWagon extends Wagon{
    constructor(capacity){
        super(capacity)
        this.passangers = [];
    }
}
