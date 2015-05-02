
// Current state
var state = 'setup'; // 'combat', 'map', 'finish'

// My player
var player = {
	health: 12,
    mana: 44,
    skills: [0, 1, 2, 3, 4],
    experience: 12,
    level: 11
}

// Countdown for start (in setup)
var countdown = 35; //seconds

/* play */
var highestLevel = 12;

/* finish */ //stats
var highScore = [{ playerID: 12, level: 20}, {playerID: 1, level: 17}];

// Players in the game
var players = [
	{
		name: "Beethoven",
		avatar: 0,
		status: "combat",
		position: [520, 630],
		playerID: 0
	},
	{
		name: "Odin",
		avatar: 1,
		status: "alive",
		position: [520, 530],
		playerID: 1
	},
	{
		name: "Zeus",
		avatar: 2,
		status: "dead",
		position: [700, 630],
		playerID: 2
	},
	{
		name: "Ra",
		avatar: 3,
		status: "alive",
		position: [890, 250],
		playerID: 3
	},
	{
		name: "Jupiter",
		avatar: 4,
		status: "alive",
		position: [590, 220],
		playerID: 4
	}
];


function onPageLoaded() {
	// TODO start server communicating
	drawAvatars();

	showSetupPlayerScreen();
}

function onBeaconId(minorId) {

}