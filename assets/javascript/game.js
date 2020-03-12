'use strict'

let obi_wan = {
  health_points: "120",
  attack_power: "10",
  counter_attack_power: "10",
  friendly_name: "Obi Wan"
};

let luke_skywalker = {
  health_points: "100",
  attack_power: "20",
  counter_attack_power: "20",
  friendly_name: "Luke Skywalker"
};

let darth_sidious = {
  health_points: "150",
  attack_power: "30",
  counter_attack_power: "30",
  friendly_name: "Darth Sidious"
};

let darth_maul = {
  health_points: "100",
  attack_power: "40",
  counter_attack_power: "40",
  friendly_name: "Darth Maul"
};

let my_character = "";
let my_opponent = "";
let attack_damage = 0;
let counter_attack_damage = 0;

$(document).ready(function () {
  console.log("beginJS");
  SetupGame();
  $(".available_character").on("click", SelectPlayer);
  $("#attack_button").on("click", Attack);
  $("#enemies").on('click', '.available_enemy', SelectEnemy);
  $("#reset_button").on('click', ResetGame);
  
  //FUNCTIONS
 
  function SetupGame() {
    my_character = "";
    my_opponent = "";
    $("#obi_wan_hp").text(obi_wan.health_points);
    $("#luke_skywalker_hp").text(luke_skywalker.health_points);
    $("#darth_sidious_hp").text(darth_sidious.health_points);
    $("#darth_maul_hp").text(darth_maul.health_points);
  }
  
  function SelectPlayer() {
    $(".available_character").off();
    my_character = $(this).attr("id");
    console.log("my character selected");
    $(this).removeClass();
    $(this).addClass("selected_character");
    $(".selected_character").appendTo(".my_character");
    $(".available_character").addClass("available_enemy");
    $(".available_enemy").appendTo("#enemies");
    $(".available_enemy").removeClass("available_character");
   
  }
  
  function SelectEnemy() {
    $('#enemies').off('click', '.available_enemy');
    my_opponent = $(this).attr("id");
    console.log("opponent selected");
    $(this).removeClass();
    $(this).addClass("opponent");
    $(".opponent").appendTo(".opponent_section");
    $("#attack_button").toggleClass("button_visible");
  }

  function Attack() {
    console.log("attack!");
   let str_attack_message = my_character + " attacks, causing " + attack_damage + " damage. " + my_opponent + " counterattacks, causing " + counter_attack_damage + " damage.";
   $("#attack_result").text(str_attack_message);

  

    //display the damage inflicted on both from this strike
    //update the remaining HP in the game pieces
    //attack power increases?
    //if I dip below zero on counter, I lose
    //if enemy defeated, hide their game piece
  }
    
    


  function ResetGame() {
    location.reload();
  }

});

  /*
  
		
	
	
			§ Whenever the player clicks attack, their character damages the defender. The opponent will lose HP (health points). These points are displayed at the bottom of the defender's picture.
			§ The opponent character will instantly counter the attack. When that happens, the player's character will lose some of their HP. These points are shown at the bottom of the player character's picture.
	3. The player will keep hitting the attack button in an effort to defeat their opponent.
		○ When the defender's HP is reduced to zero or below, remove the enemy from the defender area. The player character can now choose a new opponent.
	4. The player wins the game by defeating all enemy characters. The player loses the game the game if their character's HP falls to zero or below.
	

	• Each time the player attacks, their character's Attack Power increases by its base Attack Power.
		○ For example, if the base Attack Power is 6, each attack will increase the Attack Power by 6 (12, 18, 24, 30 and so on).
	• The enemy character only has Counter Attack Power.
		○ Unlike the player's Attack Points, Counter Attack Power never changes.
	• The Health Points, Attack Power and Counter Attack Power of each character must differ.
	•
		○ A winning player must pick their characters wisely by first fighting an enemy with low Counter Attack Power. This will allow them to grind Attack Power and to take on enemies before they lose all of their Health Points. Healing options would mess with this dynamic.
	• Your players should be able to win and lose the game no matter what character they choose. The challenge should come from picking the right enemies, not choosing the strongest player.

  */