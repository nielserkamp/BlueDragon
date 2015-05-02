Global = require('./global.js');
Player = require('./player.js');

module.exports.default = function() {
	return {
		state: 'setup',
		player: Player.default,
		players: [ ],
		countdown: Global.countdown,
		position: [0, 0],
		events: [],
		zone: 7,
		status: 'alive',
		zoneInCombat: 0
	};
}