import Ship from 'Modules/ship'; 
import GameboardController from 'Controller/gameboard';

let gameboardController;
let patrolBoat;

beforeEach(() => {
  gameboardController = new GameboardController();
  patrolBoat = new Ship(2);
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
