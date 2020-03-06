'use strict'


let obi_wan = {
  health_points: "120",
  attack_power: "",
  counter_attack_power: "",
};

let luke_skywalker = {
  health_points: "100",
  attack_power: "",
  counter_attack_power: "",
};

let darth_sidious = {
  health_points: "150",
  attack_power: "",
  counter_attack_power: "",
};

let darth_maul = {
  health_points: "100",
  attack_power: "",
  counter_attack_power: "",
};


var my_character = "";


function SelectEnemy() {
  //moves enemy to defender section/ set color to black

}

function Attack() {
  //ensure there is a selected enemy first
  //display the damage inflicted on both from this strike
  //update the remaining HP in the game pieces
  //attack power increases?
  //if I dip below zero on counter, I lose
  //if enemy defeated, hide their game piece
}


function ResetGame() {
  //move all pieces, scores back to the start, reset colors to white
}




$(document).ready(function () {
  console.log("beginJS");

  //Select Character Action

  $(".available_character").click(function () {
   
    if(my_character) {
      console.log("already selected");
      return;
    }
    
    my_character = $(this).attr("id");
    console.log($(this).attr("class"));
    $(this).removeClass();
    $(this).addClass("selected_character");
    $(".selected_character").appendTo(".my_character");
    
    $(".available_character").addClass("available_enemy");
    $(".available_enemy").appendTo("#enemies");
    $(".available_enemy").removeClass("available_character");
   

  });

  $(".enemy").click(function () {
    var my_enemy = $(this).attr("id");
    console.log(my_enemy);
    //$(this).removeClass('available_character');
   // $(this).addClass('selected_character');
   // $(".selected_character").appendTo("#my_character");
   // $(".available_character").addClass("available_enemies");
   // $(".available_character").removeClass("available_character");
   // $(".available_enemies").appendTo("#enemies");

  });



  //Attack button action
  $('#attack_button').click(function () {



    $('#reset_button').css('visibility', 'visible');
  });
});