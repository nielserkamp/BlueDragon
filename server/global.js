PlayerState = require('./playerState.js');
Player = require('./player.js');
Combat = require('./combat.js');

var local = module.exports;
var lastTimestamp = new Date().getTime() / 1000;
var dTimestamp = 0;

local.countdown = 0.000001;
local.state = 'start'; /* running, done */

local.players = { };
local.playerStates = { };

/* Current running monsters per zone */
local.liveMonsters = {
	"0" : {id:5, inCombat:false}
}

local.newPlayer = function (playerID) {
	local.players[playerID] = Player.default();
	local.players[playerID].id = playerID;

	local.playerStates[playerID] = PlayerState.default();
	local.playerStates[playerID].player = local.players[playerID];
}

local.startGame = function() {
	spawnMonsters();
	setInterval(spawnMonsters, 60000);
}

local.update = function() {
	/* Get timestamp */
	timestamp = new Date().getTime() / 1000;
	dTimestamp = timestamp - lastTimestamp;
	if(local.countdown > 0) {
		local.countdown -= dTimestamp;
		lastTimestamp = timestamp;
	}

	/* Change state from start => running when countdown is done */
	if(local.countdown <= 0 && local.state == 'start') {
		local.state = 'running';
		local.startGame();
	}

	/* What to do when running */
	if(local.state == 'running') {
		console.log("Check COMBAT");
		local.checkCombat();
	}
}

function spawnMonsters() {
	console.log("SPAWN MONSTERS");
}

/* Start combat at a 30% chance */
local.checkCombat = function() {
	for(key in local.playerStates) {
		var monster = local.liveMonsters[playerState.zone];
		var randN = Math.random();
		console.log(randN + " " + playerState + " " + monster);
		if(monster && !monster.inCombat && randN < 1) {
			local.startCombatPlayerVSMonster(playerState.player.id, monster);
		}
	}
}

local.startCombatPlayerVSMonster = function(playerID, monster) {
	console.log("START COMBAT " + playerID + " " + monster);
}