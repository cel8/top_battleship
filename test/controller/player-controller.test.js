/* eslint-disable no-unused-vars */
import Player from 'Controller/player-controller';
import PlayerType from 'Modules/player-type';
import BotDifficulty from 'Modules/bot-difficulty';
import GameboardController from 'Controller/gameboard-controller';
import Ship from 'Modules/ship';
import MockedGameboardController from './mocked-gamboard-controller';

jest.mock('./mocked-gamboard-controller');

let mockedGameboardController;
let mockedGameboardControllerWater;
let mockedGameboardControllerHit;
let gameboardController;

function mockGameBoard() {
  gameboardController = new GameboardController();
  const patrolBoatV2 = new Ship(2);
  const patrolBoatH2 = new Ship(2);
  const patrolBoatH3 = new Ship(3);
  const patrolBoatV3 = new Ship(3);
  // set a ship in [4,4] horizontal
  gameboardController.gameboard[4][4] = patrolBoatH2;
  gameboardController.gameboard[4][5] = patrolBoatH2;
  gameboardController.receiveAttack(4,4);
  gameboardController.shipMap.set(patrolBoatH2, [ {x: 4, y: 4 } ]);
  // set a ship in [4,4] vertical
  gameboardController.gameboard[7][7] = patrolBoatV2;
  gameboardController.gameboard[8][7] = patrolBoatV2;
  gameboardController.receiveAttack(7,7);
  gameboardController.shipMap.set(patrolBoatV2, [ {x: 7, y: 7 } ]);
  // set a ship in [1,4] horizontal
  gameboardController.gameboard[1][4] = patrolBoatH3;
  gameboardController.gameboard[1][5] = patrolBoatH3;
  gameboardController.gameboard[1][6] = patrolBoatH3;
  gameboardController.receiveAttack(1,5);
  gameboardController.shipMap.set(patrolBoatH3, [ {x: 1, y: 4 } ]);
  // set a ship in [0,2] vertical
  gameboardController.gameboard[0][2] = patrolBoatV3;
  gameboardController.gameboard[1][2] = patrolBoatV3;
  gameboardController.gameboard[2][2] = patrolBoatV3;
  gameboardController.receiveAttack(0,2);
  gameboardController.shipMap.set(patrolBoatV3, [ {x: 0, y: 2 } ]);
}

beforeEach(() => {
  mockedGameboardController = new MockedGameboardController();
  mockedGameboardController.receiveAttack.mockImplementation(() => ({
    exit: false
  }));

  mockedGameboardControllerWater = new MockedGameboardController();
  mockedGameboardControllerWater.receiveAttack.mockImplementation(() => ({
    exit: true,
    water: true
  }));
  
  mockedGameboardControllerHit = new MockedGameboardController();
  mockedGameboardControllerHit.receiveAttack.mockImplementation(() => ({
    exit: true,
    water: false,
    sunk: false
  }));

  mockGameBoard();
});

it('Create valid object #1', () => {
  expect(() => {
    const p1 = new Player('PlayerName1', mockedGameboardController);
  }).not.toThrow('Invalid input');
});

it('Create valid object #2', () => {
  expect(() => {
    const p1 = new Player('PlayerName1', mockedGameboardController, PlayerType.human);
  }).not.toThrow('Invalid input');
});

it('Create valid object #3', () => {
  expect(() => {
    const p1 = new Player('PlayerBot1', mockedGameboardController, PlayerType.ai);
  }).not.toThrow('Invalid input');
});

it('Create invalid object #1', () => {
  expect(() => {
    const p1 = new Player('PlayerName1', mockedGameboardController, 1);
  }).toThrow('Invalid input');
});

it('Create invalid object #2', () => {
  expect(() => {
    const p1 = new Player(null);
  }).toThrow('Invalid input');
});

it('Play human round (invalid) #1', () => {
  const p1 = new Player('PlayerName1', mockedGameboardController);
  expect(() => p1.playRound(mockedGameboardController)).toThrow('Invalid input');
})

it('Play human round (water) #1', () => {
  const p1 = new Player('PlayerName1', mockedGameboardControllerWater);
  expect(p1.playRound(mockedGameboardControllerWater, 0,0)).toMatchObject({
    exit: true,
    water: true
  });
});

it('Play human round (hit) #1', () => {
  const p1 = new Player('PlayerName1', mockedGameboardControllerHit);
  expect(p1.playRound(mockedGameboardControllerHit, 0,0)).toMatchObject({
    exit: true,
    water: false,
    sunk: false
  });
});

it('Play easy AI round', () => {
  const ai = new Player('PlayerBot1', mockedGameboardControllerWater, PlayerType.ai, BotDifficulty.easy);
  const reply = ai.playRound(mockedGameboardControllerWater);
  expect(reply.exit).toBeTruthy();
});

it('Play medium AI round (random) #1', () => {
  const ai = new Player('PlayerBot1', mockedGameboardControllerWater, PlayerType.ai, BotDifficulty.medium);
  const reply = ai.playRound(mockedGameboardControllerWater);
  expect(reply.exit).toBeTruthy();
});

it('Play medium AI round (last position) hit and sunk (horizontal) #2', () => {
  const ai = new Player('PlayerBot1', gameboardController, PlayerType.ai, BotDifficulty.medium);
  ai.stateAI.lastPosition = {x: 4, y: 4};
  ai.stateAI.trackAttacks.add({x: 4, y: 4});
  let reply = ai.playRound(gameboardController);
  expect(reply.exit).toBeTruthy();
  expect(reply.water).toBeTruthy();
  expect(ai.stateAI.lastPosition).toMatchObject({x: 4, y: 4});
  expect(ai.stateAI.isHorizontal).toBeUndefined();
  expect(ai.stateAI.trackPositions.length).toBe(0);
  expect(ai.stateAI.trackAttacks.has({x: 3, y: 4})).toBeTruthy();
  reply = ai.playRound(gameboardController);
  expect(reply.exit).toBeTruthy();
  expect(reply.water).toBeTruthy();
  expect(ai.stateAI.lastPosition).toMatchObject({x: 4, y: 4});
  expect(ai.stateAI.isHorizontal).toBeUndefined();
  expect(ai.stateAI.trackPositions.length).toBe(0);
  expect(ai.stateAI.trackAttacks.has({x: 5, y: 4})).toBeTruthy();
  reply = ai.playRound(gameboardController);
  expect(reply.exit).toBeTruthy();
  expect(reply.water).toBeTruthy();
  expect(ai.stateAI.lastPosition).toMatchObject({x: 4, y: 4});
  expect(ai.stateAI.isHorizontal).toBeUndefined();
  expect(ai.stateAI.trackPositions.length).toBe(0);
  expect(ai.stateAI.trackAttacks.has({x: 4, y: 3})).toBeTruthy();
  reply = ai.playRound(gameboardController);
  expect(reply.exit).toBeTruthy();
  expect(reply.water).toBeFalsy();
  expect(reply.sunk).toBeTruthy();
  expect(ai.stateAI.lastPosition).toBeUndefined();
  expect(ai.stateAI.isHorizontal).toBeUndefined();
  expect(ai.stateAI.trackPositions.length).toBe(0);
  expect(ai.stateAI.trackAttacks.has({x: 4, y: 5})).toBeTruthy();
});

it('Play medium AI round (last position) hit and sunk (vertical) #2', () => {
  const ai = new Player('PlayerBot1', gameboardController, PlayerType.ai, BotDifficulty.medium);
  ai.stateAI.lastPosition = {x: 7, y: 7};
  ai.stateAI.trackAttacks.add({x: 7, y: 7});
  let reply = ai.playRound(gameboardController);
  expect(reply.exit).toBeTruthy();
  expect(reply.water).toBeTruthy();
  expect(ai.stateAI.lastPosition).toMatchObject({x: 7, y: 7});
  expect(ai.stateAI.isHorizontal).toBeUndefined();
  expect(ai.stateAI.trackPositions.length).toBe(0);
  expect(ai.stateAI.trackAttacks.has({x: 6, y: 7})).toBeTruthy();
  reply = ai.playRound(gameboardController);
  expect(reply.exit).toBeTruthy();
  expect(reply.water).toBeFalsy();
  expect(reply.sunk).toBeTruthy();
  expect(ai.stateAI.lastPosition).toBeUndefined();
  expect(ai.stateAI.isHorizontal).toBeUndefined();
  expect(ai.stateAI.trackPositions.length).toBe(0);
  expect(ai.stateAI.trackAttacks.has({x: 8, y: 7})).toBeTruthy();
});

it('Play medium AI round (last position) hit and sunk (vertical ship-length 3) best case #3', () => {
  const ai = new Player('PlayerBot1', gameboardController, PlayerType.ai, BotDifficulty.medium);
  ai.stateAI.lastPosition = {x: 0, y: 2};
  ai.stateAI.trackAttacks.add({x: 0, y: 2});
  let reply = ai.playRound(gameboardController);
  expect(reply.exit).toBeTruthy();
  expect(reply.water).toBeFalsy();
  expect(reply.sunk).toBeFalsy();
  expect(ai.stateAI.lastPosition).toMatchObject({x: 1, y: 2});
  expect(ai.stateAI.isHorizontal).toBeFalsy();
  expect(ai.stateAI.trackPositions.length).toBe(0);
  expect(ai.stateAI.trackAttacks.has({x: -1, y: 2})).toBeTruthy();
  expect(ai.stateAI.trackAttacks.has({x: 1, y: 2})).toBeTruthy();
  reply = ai.playRound(gameboardController);
  expect(reply.exit).toBeTruthy();
  expect(reply.water).toBeFalsy();
  expect(reply.sunk).toBeTruthy();
  expect(ai.stateAI.lastPosition).toBeUndefined();
  expect(ai.stateAI.isHorizontal).toBeUndefined();
  expect(ai.stateAI.trackPositions.length).toBe(0);
  expect(ai.stateAI.trackAttacks.has({x: 2, y: 2})).toBeTruthy();
});

it('Play medium AI round (last position) hit and sunk (horizontal ship-length 3) worst case #4', () => {
  const ai = new Player('PlayerBot1', gameboardController, PlayerType.ai, BotDifficulty.medium);
  ai.stateAI.lastPosition = {x: 1, y: 5};
  ai.stateAI.trackAttacks.add({x: 1, y: 5});
  let reply = ai.playRound(gameboardController);
  expect(reply.exit).toBeTruthy();
  expect(reply.water).toBeTruthy();
  expect(ai.stateAI.lastPosition).toMatchObject({x: 1, y: 5});
  expect(ai.stateAI.isHorizontal).toBeUndefined();
  expect(ai.stateAI.trackPositions.length).toBe(0);
  expect(ai.stateAI.trackAttacks.has({x: 0, y: 5})).toBeTruthy();
  reply = ai.playRound(gameboardController);
  expect(reply.exit).toBeTruthy();
  expect(reply.water).toBeTruthy();
  expect(ai.stateAI.lastPosition).toMatchObject({x: 1, y: 5});
  expect(ai.stateAI.isHorizontal).toBeUndefined();
  expect(ai.stateAI.trackPositions.length).toBe(0);
  expect(ai.stateAI.trackAttacks.has({x: 2, y: 5})).toBeTruthy();
  reply = ai.playRound(gameboardController);
  expect(reply.exit).toBeTruthy();
  expect(reply.water).toBeFalsy();
  expect(ai.stateAI.lastPosition).toMatchObject({x: 1, y: 4});
  expect(ai.stateAI.isHorizontal).toBeTruthy();
  expect(ai.stateAI.trackPositions.length).toBe(1);
  expect(ai.stateAI.trackPositions).toEqual(expect.arrayContaining([ {x: 1, y: 6 }]));
  expect(ai.stateAI.trackAttacks.has({x: 1, y: 4})).toBeTruthy();
  reply = ai.playRound(gameboardController);
  expect(reply.exit).toBeTruthy();
  expect(reply.water).toBeTruthy();
  expect(ai.stateAI.lastPosition).toMatchObject({x: 1, y: 6});
  expect(ai.stateAI.isHorizontal).toBeTruthy();
  expect(ai.stateAI.trackPositions.length).toBe(0);
  reply = ai.playRound(gameboardController);
  expect(reply.exit).toBeTruthy();
  expect(reply.water).toBeFalsy();
  expect(reply.sunk).toBeTruthy();
  expect(ai.stateAI.lastPosition).toBeUndefined();
  expect(ai.stateAI.isHorizontal).toBeUndefined();
  expect(ai.stateAI.trackPositions.length).toBe(0);
  expect(ai.stateAI.trackAttacks.has({x: 1, y: 6})).toBeTruthy();
});
