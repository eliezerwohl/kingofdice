var rollOptions = ["hand", "heart", "lightning", "building", "skull", "star"];
var diceCount = 6;
$(document).ready(function(){
  $(".btn-primary").on("click", function(){
  diceCount = $(this).attr('data-choice');
  return diceCount;
  });

  $("body").on("click", ".rollButton", function(){
  $( this ).toggleClass("stayRoll");
  });
  $("#rollIt").on("click", function(){
    $("h2").hide();
    var n = $( ".stayRoll" ).length;
    var manyRolls = diceCount - n;
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
});

