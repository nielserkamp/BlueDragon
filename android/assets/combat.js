var testEventData = { name: "startCombat", enemy: {
					id: 5,
					health: 100,
					mana: 100,
					xp: 100,
					damage: 50
					}
				};

//var playerData = {"name":"Niels","id":300,"avatar":1,"health":100,"mana":100,"experience":100,"skills":[]};


$( document ).ready(function() {
	//startCombat( testEventData );
});


var enemy = null;
var enemyID = 0;

function startCombat( data ) {
	enemy = data.enemy;
	startCombatWithoutData(false);
}
function startCombatWithoutData(flee) {
	
	var hp 		= player.health;
	var mana 	= player.mana;
	var xp 		= player.experience;

	console.log( 'hp:'+hp );
	$('#ui-battle-popup').show( 'fade' );

	$('#ui-battle-name').html( randomName());

	$("#ui-battle-avatar").attr('src',avatars[enemyID]);
	$("#ui-battle-status").html('<div style="padding:20px;height:56px;background-color:#06790C;width:'+enemy.health+'%">MONSTER HP:'+enemy.health+'%</div><div style="height:56px;padding:20px;background-color:#3F3F7A;width:'+mana+'%">YOUR MANA:'+mana+'%</div><div style="height:56px;padding:20px;background-color:#77E283;width:'+hp+'%">YOUR HP:'+hp+'%</div>');
	$("#ui-battle-options").html('<button id="hit">hit</button><button id="dodge">dodge</button><button id="flee">flee</button>');

		if(hp<1){
			finishCombat( 'defeated',hp, mana, xp );
			$('#ui-battle-popup').hide( 2500 );
			
$( "#ui-battle-lose" ).show( 2500 ).hide( 2500 );

		}else if(flee){
			finishCombat( 'flee',hp, mana, xp );
			$('#ui-battle-popup').hide( 2500 );
		}else if(enemy.health<1){
			finishCombat( 'victory',hp, mana, xp + parseInt(player.level) * 3 );
			$('#ui-battle-popup').hide( 2500 );
			
$( "#ui-battle-win" ).show( 2500 ).hide( 2500 );

		}
}

$( document ).on( "click", "#hit", function() {

	var damage = randomDamage(player.level,parseInt(player.level)+10);
	console.log("1");
	console.log(damage);
	console.log(player.health);
	if(player.mana<1) damage = 1;

	console.log(player.health);
	enemy.health  = enemy.health -damage;
	console.log(enemy.damage);
	player.health = player.health - randomDamage(enemy.damage, enemy.damage + 10);
	console.log(player.health);
	player.mana   = player.mana  - 5;
	console.log(player.health);
	
	startCombatWithoutData();
});

$( document ).on( "click", "#dodge", function() {

	var damage = randomDamage(0,3);

	player.health = player.health - damage;
	player.mana   = player.mana  -10;

	startCombatWithoutData();
});

$( document ).on( "click", "#flee", function() {

	player.health = player.health/2;
	player.mana   = player.mana/2;

	startCombatWithoutData(true);
});

function randomDamage(min,max){
	return Math.floor((Math.random() * (max - min)) + min);
}

// function finishCombat(status,hp, mana, xp){
// 	console.log(status);
// }

