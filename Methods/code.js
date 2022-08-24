



const coin = {
  state: 0,
  flip: function() {
    this.state = Math.floor(Math.random() * (1 - 0 + 1) + 0);
    
    // 1. Randomly set your coin object's "state" property to be either
    //    0 or 1: use "this.state" to access the "state" property on this object.
  },
  
  toString: function  () {
  
   
    if(this.state === 1){
      return document.write("Tails")
    }else {
      return document.write("Heads")
    }
    // 2. Return the string "Heads" or "Tails", depending on whether
    //    "this.state" is 0 or 1.
  },
  
toHTML: function () {
    let body = document.querySelector("body")
    const image = document.createElement("img");
     body.append(image)
      if(this.state === 1){
        return image.src = "./images/tails.png"
      }else {
        return image.src = "./images/heads.png"
      }
    
    // 3. Set the properties of this image element to show either face-up
    //    or face-down, depending on whether this.state is 0 or 1.
    //    You can use the heads and tails images inside of the "images" folder
  
  
  },
  

  display20Flips:function display20Flips() {

  const results = [];
  for (let index = 0; index <= 19; index += 5) {
    const element = this.flip();
    results.push(element)
    results.forEach((element) => {this.toString()},0);
  }
  console.log(results)
  
  // 4. Use a loop to flip the coin 20 times, each time displaying the result of the flip as a string on the page.  After your loop completes, return an array with the result of each flip.
  },
  display20Images:function display20Images() {
  
    
  const results = [];
  for (let index = 0; index <= 19; index += 5) {
    const element = this.flip()
    results.push(element)
    results.forEach(element => this.toHTML(), 0)
  }
 
  
  // 5. Use a loop to flip the coin 20 times, and display the results of each flip as an image on the page.  After your loop completes, return an array with result of each flip.
 
},
}

coin.display20Images()
coin.display20Images()

coin.display20Flips()
coin.display20Flips()