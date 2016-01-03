var rollOptions = ["hand", "heart", "lightning", "building", "skull", "heart"];
var diceCount = 6;

$(".btn-primary").on("click", function(){
diceCount = $(this).attr('data-choice');
console.log(diceCount);
return diceCount
});

$("body").on("click", ".rollButton", function(){
 $( this ).toggleClass("stayRoll");
});

$("#rollIt").on("click", function(){
  console.log(diceCount)
  var n = $( ".stayRoll" ).length;

var manyRolls = diceCount - n;
// console.log(manyRolls)
$( ".rollButton" ).not( ".stayRoll" ).remove();
  for (i = 0; i < manyRolls; i++) { 
   diceRolling();
}

function diceRolling(){
var diceRoll = Math.floor(Math.random() * rollOptions.length)
var rolled =  rollOptions[diceRoll];
var rolledImg = rolled + ".png";
var img = $ ("<img>").attr("src", rolledImg)

var div =$("<button>").addClass("rollButton")
.append(img);

$(".target").append(div);
}
});

