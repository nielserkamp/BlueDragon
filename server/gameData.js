var local = module.exports;

local.monsters = {
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
    }

local.zones = [
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
];

local.beacons = {
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
    };