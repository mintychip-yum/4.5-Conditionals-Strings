// Create a concatenated string variable.
//The variable should be a single string variable that includes other embedded 
//variables concatenated together. Output to the page or console.
const name= "Priscilla"
const nickname= "Quinn"
console.log(`Hello its me and my name is ${name} but if
you want, you can just call me by my nickname ${nickname}`)



//"If" Conditional statement
const score= 100;
if (score <= 100) {
  console.log ("Your'e a winner!")
} else{
  console.log(" Your'e a loser!")
}


//Switch Statement
let text;
switch (new Date().getDay()) {
  case 4:
  case 5:
    text = " PARTY TIME! It'll soon be the Weekend";
    break;
  case 0:
  case 6:
    text = "It is the Weekend";
    break;
  default:
    text = "Looking forward to the Weekend";
}
document.getElementById("demo").innerHTML = text;



//String Method
function string() {
    let text = document.getElementById("person").innerHTML;
    document.getElementById("person").innerHTML = 
    text.replace("Do ya wanna know who's the coolest person in town?",
    "Your'e the coolest person in town!");
  }
console.log(document.getElementById("person"));


//Number method
let x = " BE HAPPY !";
document.getElementById("demo").innerHTML =
  x.toString();

 
