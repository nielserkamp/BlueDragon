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
