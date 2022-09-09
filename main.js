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



var startbutton = document.querySelector('#startButton')
startbutton.innerText = "Start Game"

let messageBox = document.getElementById('cardMessage').style.visibility = 'hidden';
messageBox.innerText = "Game Progression Box"
document.getElementsByClassName('cards')[0].style.visibility = 'hidden';

let player = "Dude"


document.addEventListener("click", startGame)

function startGame(){
    startbutton.style.visibility = 'hidden';
    let cards = document.getElementsByClassName('cards')
    let messageBox = document.getElementById('cardMessage')
  if (cards[0].style.visibility === "hidden" && messageBox.style.visibility === "hidden") {
   cards[0].style.visibility = "visible";
   messageBox.innerText = `Welcome to the game ${player}. Choose your wagon partner!`;
   messageBox.style.visibility = "visible";
  } else {
    cards[0].style.visibility = "hidden";
  }
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
    complain(traveler){
        if(this.food < 2){
            let messageBox = document.getElementById('cardMessage')
            messageBox.innerText = `${traveler.name} you are sick! take your meds`
            console.log(messageBox)
        }else{
            this.food = 1;
        }
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
            let messageBox = document.getElementById('cardMessage')
            messageBox.innerText = `unfortunalty, ${traveler.name}, this wagons full partner!`;
            console.log(messageBox);
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
