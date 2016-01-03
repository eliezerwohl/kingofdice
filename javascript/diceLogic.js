var rollOptions = ["hand", "heart", "lightning", "building", "skull", "heart"];

$( ".count" ).click(function() {
      var n = $( ".stayRoll" ).length;
      var j = $(".newRoll").length;
   console.log(n)
   console.log(j)
  // $( this ).toggleClass( stayRoll, rollButton );
});

$("body").on("click", ".rollButton", function(){
 $( this ).toggleClass("stayRoll");
});

$(".btn").on("click", function(){
  var n = $( ".stayRoll" ).length;

var manyRolls = 6 - n;
// console.log(manyRolls)
$( ".rollButton" ).not( ".stayRoll" ).remove();
  for (i = 0; i < manyRolls; i++) { 
   diceRolling();
}

function diceRolling(){
var diceRoll = Math.floor(Math.random() * rollOptions.length)
var rolled =  rollOptions[diceRoll]

var div =$("<button>").addClass("rollButton").append(rolled);

$(".target").append(div);
}
});

