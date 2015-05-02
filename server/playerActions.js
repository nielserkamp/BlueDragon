Global = require('./global.js');

module.exports.useSkill = function (player, action) {
	if(Global.state != 'running') {
		return false;
	}

	console.log("useSkill");
}

module.exports.challengePlayer = function (player, action) {
	if(Global.state != 'running') {
		return false;
	}

	Global.startCombatPlayersVSPlayer(player.playerID, action.playerID);

	console.log("challengePlayer");
}

module.exports.setupPlayer = function (player, action) {
	if(Global.state != 'start') {
		return false;
	}

	if(Global.countdown <= 0) {
		return false;
	} 

	player.name = action.playerName;
	player.avatarID = action.avatarID;

	return true;
}

module.exports.unlockSkill = function (player, action) {
	if(Global.state != 'running') {
		return false;
	}

	console.log("unlockSkill");

	return true;
}

module.exports.finishCombat = function(player, action) {
	if(Global.state != 'running') {
		return false;
	}

	var state = Global.playerStates[player.playerID];

	if(action.victoryStatus == 'victory') {
		state.player.health = action.health;
		state.player.mana = action.mana;
		state.player.experience += action.experienceGained;
		state.status = 'alive';

		if(state.player.experience > (10 + state.player.level * state.player.level)) {
			state.player.experience -= (10 + state.player.level * state.player.level);
			state.player.level += 1;
		}
	}else if(action.victoryStatus == 'flee') {
		state.player.health = action.health;
		state.player.mana = action.mana;
		state.status = 'alive';
	} else if(action.victoryStatus == 'defeated') {
		state.player.health = 0;
		state.player.mana = 0;
		state.status = 'dead';
	}
	state.player.state = 'map';
	delete Global.liveMonsters[state.zoneInCombat];
	JSON.stringify(Global.liveMonsters);

	return true;
}
