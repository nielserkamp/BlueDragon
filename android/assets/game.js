

// Methods for sending data and interpreting data, server communicating, also for initiating UI changes (in ui.js)
function setupPlayer(name, avatarId) {
	playerID = Math.round(Math.random() * 100000);

	sendAction(playerID, currentBeacon, [
		{
			name: "setupPlayer",
			playerName: name,
			avatarID: avatarId
		}
	]);
}

function sendAction(userID, beaconID, actions) {
	var message = {
		'playerID' : userID,
		'beaconID' : beaconID,
		'actions': actions
	};

			console.log("HI");
	$.ajax({
		type: "POST",
		url: "http://192.168.1.119:1337",
		data: JSON.stringify(message),
		dataType: "text",
		success: function(data) {
			handleState(JSON.parse(data));
		},
		failure: function(errMsg) {
			alert(errMsg);
		},
		complete: function() {
			// Nothing atm
		}
	});
}

function handleState(data) {
	started = true;

	// Set state
	state = data.state;

	// Set player
	player = data.player;

	// Set players
	players = data.players;

	// Set countdown
	countdown = data.countdown;

	// Draw avatars
	drawAvatars();
	// Parse events
	// TODO



}