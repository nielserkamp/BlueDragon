// UI methods

// Resources map
var avatars = [
	"resources/beethoven.jpg",
	"resources/odin.jpg",
	"resources/zeus.jpg",
	"resources/ra.jpg",
	"resources/jupiter.jpg",
	"resources/1.jpg",
	"resources/2.jpg",
	"resources/3.jpg",
	"resources/4.jpg",
	"resources/5.jpg",
	"resources/6.jpg"
];

var stateImages = {
	dead: "resources/dead.jpg",
	combat: "resources/combat.jpg"
}

// TODO
var local = true;


// Initialize
function showSetupPlayerScreen() {

	var container = $("<div>");
	container.attr("class", "setupPlayer");

	// Name
	container.append("<br /><br /><h1 style='text-decoration: underline; font-size: 24px;color: navy; font-weight: bold;'>Blue Dragon</h2><br /><br /><span style='color: white; font-weight: normal;'>Name:<br /></span>")
	var nameInput = $("<input>");
	nameInput.attr("type", "text");
	nameInput.attr("value", "android sux " + Math.round(Math.random() * 100));
	nameInput.attr("value", randomStartName());
	container.append(nameInput);

	// Submit
	var submit = $("<button>");
	submit.on("click", function() {
		var avatar = Math.min(Math.floor(Math.random() * 5), 4);
		setupPlayer(nameInput[0].value, avatar);
		container.remove();

		if(local) {
			doLocalStuff();
		}
	});
	submit.append("Register!");
	container.append(submit);

	$("body").append(container);
}

function doLocalStuff() {
	setInterval(function() {
		sendEasyAction([]);
	}, 500);
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
	img.attr("src", avatars[player.avatarID]);
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


// Random name generator
function randomStartName() {
		var firstParts = [
		"Lord gaylord",
		"Mister Bean",
		"Ares",
		"Aprhodites",
		"Vampire Lord",
		"Jenkins",
		"McLovin",
		"Ronald McDonald",
		"Spongebob",
		"Samus",
		"Peach",
		"Murdoc",
		"Tim",
		"Osama",
		"Pieter",
		"Bush"
	];

	return firstParts[Math.floor(Math.random() * firstParts.length)];
}
function randomName() {

	var firstParts = [
		"Lord gaylord",
		"Mister Bean",
		"Ares",
		"Aprhodites",
		"Vampire Lord",
		"Jenkins",
		"McLovin",
		"Ronald McDonald",
		"Spongebob",
		"Samus",
		"Peach",
		"Murdoc",
		"Tim",
		"Osama",
		"Pieter",
		"Bush"
	];

	var middleParts = [
		" the puny ",
		" the cruel ",
		" the great ",
		" the massive ",
		" the weird ",
		" the mediocre ",
		" the stupid ",
		" the lame ",
		" the genious ",
		" the little ",
		" the giant ",
		" the terrorist ",
		" the vindictous ",
		" the worthless ",
		" the creeper ",
		" the sumpetous ",
		" the weak "
	];


	var lastParts1 = [
		"consumer",
		"thriver",
		"god",
		"assistant",
		"philantropist",
		"feeder",
		"man",
		"coder"
	];

	var lastParts2 = [
		" of cocks",
		" of poo",
		" of bugs",
		" of obama",
		" of fur",
		" of 666",
		" of code"
	];

	return firstParts[Math.floor(Math.random() * firstParts.length)] +
	middleParts[Math.floor(Math.random() * middleParts.length)] + "<br />" +
	lastParts1[Math.floor(Math.random() * lastParts1.length)] +
	lastParts2[Math.floor(Math.random() * lastParts2.length)]

}