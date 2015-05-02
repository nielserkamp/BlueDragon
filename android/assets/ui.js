// UI methods

// Resources map
var avatars = [
	"resources/beethoven.jpg",
	"resources/odin.jpg",
	"resources/zeus.jpg",
	"resources/ra.jpg",
	"resources/jupiter.jpg"
];

var stateImages = {
	dead: "resources/dead.jpg",
	combat: "resources/combat.jpg"
}

// Players on the map
var players = [
	{
		name: "Beethoven",
		avatar: 0,
		status: "combat",
		position: [520, 630]
	},
	{
		name: "Odin",
		avatar: 1,
		status: "alive",
		position: [520, 530]
	},
	{
		name: "Zeus",
		avatar: 2,
		status: "dead",
		position: [700, 630]
	},
	{
		name: "Ra",
		avatar: 3,
		status: "alive",
		position: [890, 250]
	},
	{
		name: "Jupiter",
		avatar: 4,
		status: "alive",
		position: [590, 220]
	}
];

// Initialize
function showSetupPlayerScreen() {
	var container = $("<div>");
	container.attr("class", "setupPlayer");

	// Name
	var nameInput = $("<input>");
	nameInput.attr("type", "text");
	container.append(nameInput);

	// Submit
	var submit = $("<button>");
	submit.on("click", function() {

	});
	submit.append("Register!");
	container.append(submit);

	$("#ui-container").append(container);
}


// Avatars on the map functions
function drawAvatars() {
	// Clear avatars
	$(".avatar").remove();

	// Add players
	for(var i = 0; i < players.length;i++) {
		console.log("adding player");
		$("body").append(createAvatar(players[i]));
	}
}

function createAvatar(player) {
	// Container
	var container = $("<div>");
	container.attr("class", "avatar");
	container[0].style.left = player.position[0] - 32;
	container[0].style.top = player.position[1] - 64;
	
	// Avatar logo
	var img = $("<img>");
	img.attr("src", avatars[player.avatar]);
	img.attr("class", "avatarImage");
	container.append(img);

	// Avatar Name
	var nameContainer = $("<div>");
	nameContainer.append(player.name);
	container.append(nameContainer);

	// Avatar state (only for dead or combat)
	if(player.status != "alive") {
		var stateImage = $("<img>");
		stateImage.attr("src", stateImages[player.status]);
		stateImage.attr("class", "avatarState " + player.status);
		container.append(stateImage);
	}
	return container;
}