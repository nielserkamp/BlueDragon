
var gamedata = {
    skills: {
        'Escape': {
            description: 'Attempt to escape combat',
            // image: 'IMAGE.png',
            successRate: function(player, enemy) {
                return Math.max(0, 4 + player.level - enemy.level) * 0.2
            },
            escape: true,
        },
        'Punch': {
            description: 'A solid punch that deals 20 damage',
            damage: 20,
        },
        'Throw Rock': {
            description: '60% chance to hit and 40 damage',
            damage: 40,
            cooldown: 1,
            successRate: 0.6,
        },

        'Brutal Strike': {
            description: 'You strike your enemy for 35 damage',
            cooldown: 1,
            damage: 35,
            mana: 15,
        },
        'Stunning Blow': {
            description: 'Deal 20 damage and disable your enemy for one turn',
            cooldown: 3,
            mana: 20,
            damage: 10,
            stun: 1,
        },
        'Second Wind': {
            description: 'Restore 40 health if you are below 50% health',
            cooldown: 6,
            mana: 25,
            heal: 40,
            successRate: function(player, enemy) {
                return Number(player.health / player.maxHealth < 0.5);
            },
        },

        'Precise Shot': {
            description: 'Deal 30 damage with +20% chance to crit',
            cooldown: 1,
            damage: 30,
            mana: 10,
            critModifier: 0.2,
        },
        'Take Aim': {
            description: 'Your next attack will crit',
            cooldown: 3,
            mana: 25,
            followingTurns: [{ critModifier: 1.0 }],
        },
        'Evade': {
            description: 'Dodge the next incoming attack',
            cooldown: 10,
            mana: 20,
            followingTurns: [{ dodgeModifier: 1.0 }],
        },

        'Fireball': {
            description: 'Set your enemy on fire, dealing 45 damage over 3 turns',
            mana: 20,
            damage: 15,
            followingTurns: [{ damage: 15 }, { damage: 15 }],
        },
        'Clarity': {
            description: 'Restore 100 mana over 5 turns',
            healMana: 20,
            followingTurns: [{ healMana: 20 }, { healMana: 20 }, { healMana: 20 }, { healMana: 20 }],
        },
        'Charge Lightning': {
            description: 'Charge a lightning bolt that deals 50 damage on your next attack',
            mana: 50,
            cooldown: 2,
            followingTurns: [{ damage: 50 }],
        },
    },

    startingSkills: ['Escape', 'Punch', 'Throw Rock'],

    skillTrees: [
        {
            name: 'Warrior',
            skills: [
                'Brutal Strike',
                'Stunning Blow',
                'Second Wind',
            ],
        },
        {
            name: 'Ranger',
            skills: [
                'Precise Shot',
                'Take Aim',
                'Evade',
            ],
        },
        {
            name: 'Wizard',
            skills: [
                'Fireball',
                'Clarity',
                'Charge Lightning',
            ],
        },
    ],

    monsters: {
        'Oversized Rat': {
            level: 1,
            health: 50,
            damage: 5,
        },
        'Viscious Snail': {
            level: 2,
            health: 50,
            damage: 12,
        },
        'Zombie': {
            level: 3,
            health: 80,
            damage: 15,
        },
        'Confused Ghost': {
            level: 5,
            health: 50,
            damage: 35,
        },
        'Rock Golem': {
            level: 8,
            health: 180,
            damage: 10,
        },
        'Robot Vampire': {
            level: 10,
            health: 170,
            damage: 25,
        },
        'Ancient Guardian': {
            level: 14,
            health: 400,
            damage: 15,
        },
        'Blue Dragon': {
            level: 20,
            health: 500,
            damage: 35,
        },
    },

    zones: [
        {
            monsters: ['Oversized Rat'],
            position: [883, 240],
        },
        {
            monsters: ['Oversized Rat'],
            position: [690, 227],
        },
        {
            monsters: ['Oversized Rat', 'Viscious Snail'],
            position: [600, 200],
        },
        {
            monsters: ['Oversized Rat', 'Viscious Snail'],
            position: [456, 230],
        },
        {
            monsters: ['Viscious Snail'],
            position: [644, 457],
        },
        {
            monsters: ['Zombie'],
            position: [566, 548],
        },
        {
            monsters: ['Zombie', 'Confused Ghost'],
            position: [600, 620],
        },
        {
            playerSpawn: true,
            position: [474, 635],
        },
        {
            monsters: ['Confused Ghost'],
            position: [385, 592],
        },
        {
            monsters: ['Rock Golem'],
            position: [392, 676],
        },
        {
            monsters: ['Rock Golem', 'Robot Vampire'],
            position: [612, 699],
        },
        {
            monsters: ['Robot Vampire'],
            position: [644, 813],
        },
        {
            monsters: ['Robot Vampire'],
            position: [393, 828],
        },
        {
            monsters: ['Robot Vampire', 'Ancient Guardian'],
            position: [673, 962],
        },
        {
            monsters: ['Ancient Guardian'],
            position: [420, 1040],
        },
        {
            monsters: ['Blue Dragon'],
            position: [670, 1080],
        },


        /* PVP zones: */
        {
            pvp: true,
            position: [531, 926],
        },
        {
            pvp: true,
            position: [525, 793],
        },
        {
            pvp: true,
            position: [522, 635],
        },
        {
            pvp: true,
            position: [520, 383],
        },
        {
            pvp: true,
            position: [393, 430],
        },
        {
            pvp: true,
            position: [720, 357],
        },
    ],

    beacons: {
        '435': 0,
        '606': 0,
        '222': 0,

        '264': 1,
        '262': 1,

        '35': 2,

        '753': 3,
        '916': 3,
        '902': 3,

        '190': 4,
        '530': 4,

        '706': 5,

        '250': 6,

        '418': 7,

        '978': 8,

        '794': 9,

        '189': 10,

        '377': 11,
        '140': 11,

        '550': 12,
        '670': 12,

        '203': 13,

        '388': 14,
        '323': 14,

        '300': 15,
        '993': 15,

        '828': 16,

        '481': 17,

        '744': 18,
        '944': 18,

        '365': 19,
        '318': 19,

        '735': 20,
        '556': 20,

        '431': 21,
    },

}
