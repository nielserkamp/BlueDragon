Global = require('./global.js');
Player = require('./player.js');

module.exports.default = function() {
	return {
		state: 'setup',
		player: Player.default,
		players: [ ],
		zone: "0",
		countdown: Global.countdown
	};
}