import Ship from 'Modules/ship'; 
import GameboardController from 'Controller/gameboard-controller';

let gameboardController;
let patrolBoat;
let patrolBoatB;

const invalidAttack = {
  exit: false
};

const validAttackWater = {
  exit: true,
  water: true
};

const validAttackHit = {
  exit: true,
  water: false,
  sunk: false
};

const validAttackSunk = {
  exit: true,
  water: false,
  sunk: true,
  coordinates: [ {x: 0, y: 0 },  {x: 0, y: 1 } ]
};

beforeEach(() => {
  gameboardController = new GameboardController();
  patrolBoat = new Ship(2);
  patrolBoatB = new Ship(2);
  // set a ship in [0,0] vertical
  gameboardController.gameboard[0][0] = patrolBoat;
  gameboardController.gameboard[0][1] = patrolBoat;
  gameboardController.shipMap.set(patrolBoat, [ {x: 0, y: 0 }, { x: 0, y: 1 }]);
});

it('create gameboard', () => {
  expect(gameboardController.gameboard).toBeDefined();
  expect(gameboardController.gameboard.length).toBe(10);
  for (let i = 0; i < 10; i+=1) expect(gameboardController.gameboard[i].length).toBe(10);
  expect(gameboardController.isUserGameboard()).toBeFalsy();
});

it('create user gameboard', () => {
  const userGameboardController = new GameboardController(true);
  expect(userGameboardController.isUserGameboard()).toBeTruthy();
});

it('place a 2 length (horizontal) ship in valid coordinate', () => {
  expect(gameboardController.place(patrolBoat, 3, 5)).toBeTruthy();
  expect(gameboardController.gameboard[3][5]).toBe(patrolBoat);
  expect(gameboardController.gameboard[3][6]).toBe(patrolBoat);
  expect(gameboardController.shipMap.get(patrolBoat)).toEqual([ {x:3,y:5}, {x:3,y:6} ]);
});

it('place a 2 length (vertical) ship in valid coordinate', () => {
  expect(gameboardController.place(patrolBoat, 3, 5, true)).toBeTruthy();
  expect(gameboardController.gameboard[3][5]).toBe(patrolBoat);
  expect(gameboardController.gameboard[4][5]).toBe(patrolBoat);
  expect(gameboardController.shipMap.get(patrolBoat)).toEqual([ {x:3,y:5}, {x:4,y:5} ]);
});

it('place a 2 length (horizontal) ship in invalid coordinate', () => {
  expect(gameboardController.place(patrolBoat, 3, 9)).toBeFalsy();
  expect(gameboardController.gameboard[3][9]).toBeUndefined();
  expect(gameboardController.shipMap.get(patrolBoat)).not.toEqual([ {x:3,y:9} ]);
});

it('place a 2 length (vertical) ship in invalid coordinate', () => {
  expect(gameboardController.place(patrolBoat, 9, 5, true)).toBeFalsy();
  expect(gameboardController.gameboard[9][5]).toBeUndefined();
  expect(gameboardController.shipMap.get(patrolBoat)).not.toEqual([ {x:9,y:5} ]);
});

it('invalid place location #1', () => {
  expect(gameboardController.place(patrolBoat, -1, 0)).toBeFalsy();
});

it('invalid place location #2', () => {
  expect(gameboardController.place(null, -1, 0)).toBeFalsy();
});

it('invalid place location #3', () => {
  expect(gameboardController.place(patrolBoat, 'ciao', 4)).toBeFalsy();
});

it('invalid place location #4', () => {
  expect(gameboardController.place(patrolBoat, 0, 15)).toBeFalsy();
});

it('invalid place location (adjacent) #5', () => {
  expect(gameboardController.place(patrolBoat, 3, 5)).toBeTruthy();
  expect(gameboardController.place(patrolBoatB, 3, 6)).toBeFalsy();
});

it('valid place location (not adjacent)', () => {
  expect(gameboardController.place(patrolBoat, 3, 5)).toBeTruthy();
  expect(gameboardController.place(patrolBoatB, 5, 5)).toBeTruthy();
});

it('receive an attack', () => {
  expect(gameboardController.trackAttacks.has({x: 3, y: 3})).toBeFalsy();
  expect(gameboardController.receiveAttack(3,3)).toMatchObject(validAttackWater);
  expect(gameboardController.trackAttacks.has({x: 3, y: 3})).toBeTruthy();
});

it('receive an attack and hit', () => {
  expect(gameboardController.trackAttacks.has({x: 0, y: 0})).toBeFalsy();
  expect(gameboardController.receiveAttack(0,0)).toMatchObject(validAttackHit);
  expect(gameboardController.trackAttacks.has({x: 0, y: 0})).toBeTruthy();
});

it('receive attacks and sunk', () => {
  expect(gameboardController.trackAttacks.has({x: 0, y: 0})).toBeFalsy();
  expect(gameboardController.trackAttacks.has({x: 0, y: 1})).toBeFalsy();
  expect(gameboardController.receiveAttack(0,0)).toMatchObject(validAttackHit);
  expect(gameboardController.receiveAttack(0,1)).toMatchObject(validAttackSunk);
  expect(gameboardController.trackAttacks.has({x: 0, y: 0})).toBeTruthy();
  expect(gameboardController.trackAttacks.has({x: 0, y: 1})).toBeTruthy();
});

it('receive attacks and sunk #strings', () => {
  expect(gameboardController.trackAttacks.has({x: 0, y: 0})).toBeFalsy();
  expect(gameboardController.trackAttacks.has({x: 0, y: 1})).toBeFalsy();
  expect(gameboardController.receiveAttack('0','0')).toMatchObject(validAttackHit);
  expect(gameboardController.receiveAttack('0','1')).toMatchObject(validAttackSunk);
  expect(gameboardController.trackAttacks.has({x: 0, y: 0})).toBeTruthy();
  expect(gameboardController.trackAttacks.has({x: 0, y: 1})).toBeTruthy();
});

it('invalid receive attack location #1', () => {
  expect(gameboardController.receiveAttack(-1, 0)).toMatchObject(invalidAttack);
});

it('invalid receive attack location #2', () => {
  expect(gameboardController.receiveAttack(-1, 0)).toMatchObject(invalidAttack);
});

it('invalid receive attack location #3', () => {
  expect(gameboardController.receiveAttack('ciao', 4)).toMatchObject(invalidAttack);
});

it('invalid receive attack location #4', () => {
  expect(gameboardController.receiveAttack(0, 15)).toMatchObject(invalidAttack);
});

