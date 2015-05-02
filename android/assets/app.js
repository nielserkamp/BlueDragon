var started = false;
var currentBeacon = 418;
var state = 'setup'; // 'combat', 'map', 'finish'

// My player
var player = {
	health: 100,
    mana: 100,
    skills: [0, 1, 2],
    experience: 0,
    level: 1,
    playerID: 0
}

// Countdown for start (in setup)
var countdown = NaN;

// Highest level available while playing
var highestLevel = 1;

// Other players
var players = [];

function onPageLoaded() {
	// Initially draw avatars
	drawAvatars();

	// Register player
	showSetupPlayerScreen();
}

function onBeaconId(minorId) {
	currentBeacon = minorId;

	if(started == true) {
		sendAction(player.playerID, currentBeacon, []);
	}
}

// States
var started = false;

// Current beacon
var currentBeacon = 418;

// Current state
var state = 'setup'; // 'combat', 'map', 'finish'

// My own player ID
var playerID = undefined;

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
		avatarID: 0,
		status: "combat",
		position: [520, 630],
		playerID: 0
	},
	{
		name: "Odin",
		avatarID: 1,
		status: "alive",
		position: [520, 530],
		playerID: 1
	},
	{
		name: "Zeus",
		avatarID: 2,
		status: "dead",
		position: [700, 630],
		playerID: 2
	},
	{
		name: "Ra",
		avatarID: 3,
		status: "alive",
		position: [890, 250],
		playerID: 3
	},
	{
		name: "Jupiter",
		avatarID: 4,
		status: "alive",
		position: [590, 220],
		playerID: 4
	}
];

// Events
var events = [
        { name: 'startGame' },
        { name: 'startCombat', enemy: {
        	health: 100,
        	mana: 100,
        	monsterID: 0
        }}];