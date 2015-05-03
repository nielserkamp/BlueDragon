

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

function sendEasyAction(actions) {
	sendAction(playerID, currentBeacon, actions);
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
		url: "http://192.168.0.109:1337",
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

// Victory status: 'victory', 'flee', 'defeated'
// health: health left
// mana: mana left
function finishCombat(victoryStatus, health, mana, experienceGained) {
	isCombat = false;
	sendEasyAction([
			{
				name: "finishCombat",
				victoryStatus: victoryStatus,
				health: health,
				mana: mana,
				experienceGained: experienceGained
			}
		]);
}

function handleState(data) {
	started = true;

	// Set state
	state = data.state;

	// Set player
	if(isCombat == false)
		player = data.player;

	// Set players
	players = data.players;

	// Set countdown
	countdown = data.countdown;

	// Draw avatars
	drawAvatars();
	for(var i = 0; i < data.events.length; i++) {
		var evt = data.events[i];
		if(evt.name == "startCombat") {
			isCombat = true;
			enemyID = randomDamage(0, avatars.length - 1);
			startCombat(evt);
		}
	}
}