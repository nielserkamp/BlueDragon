PlayerState = require('./playerState.js');
Player = require('./player.js');
Combat = require('./combat.js');
GameData = require('./gameData.js');

var local = module.exports;
var lastTimestamp = new Date().getTime() / 1000;
var dTimestamp = 0;

local.countdown = 60;
local.state = 'start'; /* running, done */

local.players = { };
local.playerStates = { };

/* Current running monsters per zone */
local.liveMonsters = { }

local.newPlayer = function (playerID) {
	local.players[playerID] = Player.default();
	local.players[playerID].playerID = playerID;

	local.playerStates[playerID] = PlayerState.default();
	local.playerStates[playerID].player = local.players[playerID];
}

local.startGame = function() {
	spawnMonsters();
	setInterval(spawnMonsters, 60000);
}

local.update = function(playerID) {
	/* Fill players array */
	var state = local.playerStates[playerID];
	state.players = [];
	for(key in local.playerStates) {
		state.players.push({
			name: local.playerStates[key].player.name,
			playerID: local.playerStates[key].player.playerID,
			avatarID: local.playerStates[key].player.avatarID,
			position: local.playerStates[key].position,
			status: local.playerStates[key].status,
		});
	}

	/* Get timestamp */
	timestamp = new Date().getTime() / 1000;
	dTimestamp = timestamp - lastTimestamp;
	if(local.countdown > 0) {
		local.countdown -= dTimestamp;
		lastTimestamp = timestamp;
	}
	state.countdown = local.countdown;

	/* Change state from start => running when countdown is done */
	if(local.countdown <= 0 && local.state == 'start') {
		local.state = 'running';
		local.startGame();
	}

	if(state.countdown <= 0 && state.state == 'setup') {
		state.state = 'map';
		state.events.push({
			name: "startGame"
		});
	}

	/* What to do when running */
	if(local.state == 'running') {
		console.log("Check COMBAT");
		local.checkCombat(playerID);
	}
}

function spawnMonsters() {
	for(var i = 0; i < GameData.zones.length; i++) {
		if(!GameData.zones[i].monsters) {
			console.log("Skipped spawning in zone " + i);
			continue;
		}

		monster = GameData.monsters[GameData.zones[i].monsters[0]];
		if(!local.liveMonsters[i]) {
			local.liveMonsters[i] = {
				monsterID: GameData.zones[i].monsters[0],
				health: monster.health,
				damage: monster.damage,
				level: monster.level,
				inCombat: false,
				dead: false,
			}
			console.log("SPAWNED MONSTER IN ZONE: " + i);
		}
	}
}

/* Start combat at a 30% chance */
local.checkCombat = function(playerID) {
	var monster = local.liveMonsters[local.playerStates[playerID].zone];
	var randN = Math.random();
	if(monster && !monster.inCombat && randN < 0.1 && local.playerStates[playerID].status == 'alive') {
		local.startCombatPlayerVSMonster(local.playerStates[playerID].player.playerID, monster);
		local.playerStates[playerID].zoneInCombat = local.playerStates[playerID].zone;
	}
}

local.startCombatPlayerVSMonster = function(playerID, monster) {
	console.log(JSON.stringify(monster));

	eventStartCombat = {
		name: "startCombat",
		enemy: {
			monster: monster.monsterID,
			health: monster.health,
			level: monster.level,
			damage: monster.damage,
		}
	}

	Global.playerStates[playerID].events[0] = eventStartCombat;
	Global.playerStates[playerID].status = 'combat';

	monster.inCombat = true;
}