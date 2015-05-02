var testEventData = { name: "startCombat", enemy: {
					id: 5,
					health: 100,
					mana: 100,
					xp: 100
					}
				};

//var playerData = {"name":"Niels","id":300,"avatar":1,"health":100,"mana":100,"experience":100,"skills":[]};


//$( document ).ready(function() {
  //startCombat( testEventData );
//});


var enemy = null;

function startCombat( data,flee ) {
	
	var hp 		= player.health;
	var mana 	= player.mana;
	var xp 		= player.experience;

	enemy 		= data.enemy;

	console.log( 'hp:'+hp );
	$('#ui-battle-popup').show( 'fade' );

	$('#ui-battle-name').text( randomName(); );

	$("#ui-battle-avatar").attr('src',avatars[data.enemy.id]);
	$("#ui-battle-status").html('<div style="padding:20px;height:56px;background-color:#06790C;width:'+data.enemy.health+'%">MONSTER HP:'+data.enemy.health+'%</div><div style="height:56px;padding:20px;background-color:#3F3F7A;width:'+mana+'%">YOUR MANA:'+mana+'%</div><div style="height:56px;padding:20px;background-color:#77E283;width:'+hp+'%">YOUR HP:'+hp+'%</div>');
	$("#ui-battle-options").html('<button id="hit">hit</button><button id="doge">doge</button><button id="flee">flee</button>');

		if(hp<1){
			finishCombat( 'defeated',hp, mana, xp );
			$('#ui-battle-popup').hide( 2500 );
			alert('You are dead :(');
		}else if(flee){
			finishCombat( 'flee',hp, mana, xp );
			$('#ui-battle-popup').hide( 2500 );
		}else if(data.enemy.health<1){
			finishCombat( 'victory',hp, mana, xp );
			$('#ui-battle-popup').hide( 2500 );
			alert('Wou won!');
		}
}

$( document ).on( "click", "#hit", function() {

	var damage = randomDamage(player.level,player.level+10);
	if(player.health<1) damage = 1;

	enemy.health  = enemy.health -damage;
	player.health = player.health - damage/2;
	player.mana   = player.mana  -5;
	
	startCombat(testEventData);
});

$( document ).on( "click", "#doge", function() {

	var damage = randomDamage(0,3);

	player.health = player.health - damage;
	player.mana   = player.mana  -10;

	startCombat(testEventData);
});

$( document ).on( "click", "#flee", function() {

	player.health = player.health/2;
	player.mana   = player.mana/2;

	startCombat(testEventData, true);
});

function randomDamage(min,max){
	return Math.floor((Math.random() * max) + min);
}

function finishCombat(status,hp, mana, xp){
	console.log(status);
}

