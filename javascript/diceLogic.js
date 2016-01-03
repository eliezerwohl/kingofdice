var rollOptions = ["hand", "heart", "lightning", "building", "skull", "heart"];


$(".btn").on("click", function(){
$(".target").empty();
  for (i = 0; i < 6; i++) { 
   diceRolling();
}

function diceRolling(){
var diceRoll = Math.floor(Math.random() * rollOptions.length)
console.log(rollOptions[diceRoll])
var rolled =  rollOptions[diceRoll]

var div =$("<button>").append(rolled)

$(".target").append(div);
}
});

