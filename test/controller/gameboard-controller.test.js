import Ship from 'Modules/ship'; 
import GameboardController from 'Controller/gameboard-controller';

let gameboardController;
let patrolBoat;

beforeEach(() => {
  gameboardController = new GameboardController();
  patrolBoat = new Ship(2);
  // set a ship in [0,0] vertical
  gameboardController.gameboard[0][0] = patrolBoat;
  gameboardController.gameboard[0][1] = patrolBoat;
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
});

it('place a 2 length (vertical) ship in valid coordinate', () => {
  expect(gameboardController.place(patrolBoat, 3, 5, true)).toBeTruthy();
  expect(gameboardController.gameboard[3][5]).toBe(patrolBoat);
  expect(gameboardController.gameboard[4][5]).toBe(patrolBoat);
});

it('place a 2 length (horizontal) ship in invalid coordinate', () => {
  expect(gameboardController.place(patrolBoat, 3, 9)).toBeFalsy();
  expect(gameboardController.gameboard[3][9]).toBeUndefined();
});

it('place a 2 length (vertical) ship in invalid coordinate', () => {
  expect(gameboardController.place(patrolBoat, 9, 5, true)).toBeFalsy();
  expect(gameboardController.gameboard[9][5]).toBeUndefined();
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

it('receive an attack', () => {
  expect(gameboardController.trackAttacks.has({x: 3, y: 3})).toBeFalsy();
  expect(gameboardController.receiveAttack(3,3)).toBeFalsy();
  expect(gameboardController.trackAttacks.has({x: 3, y: 3})).toBeTruthy();
});

it('receive an attack and hit', () => {
  expect(gameboardController.trackAttacks.has({x: 0, y: 0})).toBeFalsy();
  expect(gameboardController.receiveAttack(0,0)).toBeTruthy();
  expect(gameboardController.trackAttacks.has({x: 0, y: 0})).toBeTruthy();
});

it('invalid receive attack location #1', () => {
  expect(gameboardController.receiveAttack(-1, 0)).toBeFalsy();
});

it('invalid receive attack location #2', () => {
  expect(gameboardController.receiveAttack(-1, 0)).toBeFalsy();
});

it('invalid receive attack location #3', () => {
  expect(gameboardController.receiveAttack('ciao', 4)).toBeFalsy();
});

it('invalid receive attack location #4', () => {
  expect(gameboardController.receiveAttack(0, 15)).toBeFalsy();
});
