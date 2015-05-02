// Methods for sending data and interpreting data, server communicating, also for initiating UI changes (in ui.js)
function setupPlayer(name, avatarId) {
	var playerId = Math.round(Math.random() * 100000);
}

function sendAction(userID, beaconID, actions) {
	var message = {
		'userID' : userID,
		'beaconID' : beaconID,
		'actions': actions
	};

	$.ajax({
		type: "POST",
		url: "http://127.0.0.1:1337",
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
	// Do something
}

function legacy() {
	var markers = {'A' : 'b', 'B' : 'c'};

	$.ajax({
	    type: "POST",
	    url: "http://127.0.0.1:1337",
	    data: JSON.stringify(markers),
	    dataType: "text",
	    success: function(data){
	    	handleState(JSON.parse(data));
	    },
	    failure: function(errMsg) {
	        alert(errMsg);
	    },
	    complete: function() {
	    	alert('COMPLETE');
	    }
	});
}