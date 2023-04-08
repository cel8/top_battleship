import Ship from 'Modules/ship';
import AttackTrackerSet from 'Modules/attack-tracker-set';

const BOARD_SIZE = 10;

export default class GameboardController {
  constructor(userGameboard = false) {
    this.boardSize = BOARD_SIZE;
    this.gameboard = new Array(BOARD_SIZE);
    for (let i = 0; i < BOARD_SIZE; i += 1) this.gameboard[i] = new Array(BOARD_SIZE);
    this.userGameboard = userGameboard || false;
    this.trackAttacks = new AttackTrackerSet();
    this.shipMap = new Map();
  }

  static #isValidCoord(x, y) {
    if (Number.isNaN(+x) || Number.isNaN(+y)) return false;
    if ((+x < 0) || (+x >= BOARD_SIZE) || 
        (+y < 0) || (+y >= BOARD_SIZE)) return false;
    return true;
  }

  #checkAdjacent(x, y, shipLength, vertical) {
    let isAdjacent = false;
    this.shipMap.forEach(coords => {
      if (vertical) {
        for (let i = x; i < (x + shipLength) && !isAdjacent; i += 1) {
          if (!isAdjacent) isAdjacent = coords.some((e) => (Math.abs(e.x - i) <= 1) && ((Math.abs(e.y - y) <= 1)));
        }
      } else {
        for (let i = y; i < (y + shipLength) && !isAdjacent; i += 1) {
          if (!isAdjacent) isAdjacent = coords.some((e) => (Math.abs(e.x - x) <= 1) && ((Math.abs(e.y - i) <= 1)));
        }
      }
    });
    return isAdjacent;
  }

  isUserGameboard() { return this.userGameboard; }

  get BoardSize() { return this.boardSize }

  checkPlace(shipLength, x, y, vertical = false) {
    if (!GameboardController.#isValidCoord(x, y) ||
       (vertical  && (+x + shipLength > BOARD_SIZE)) ||
       (!vertical && (+y + shipLength > BOARD_SIZE))) return false;
    if (this.#checkAdjacent(x, y, shipLength, vertical)) return false;
    return true;
  }

  place(ship, x, y, vertical = false) {
    const coordinates = [];
    if (!(ship instanceof Ship)) return false;
    if (!this.checkPlace(ship.length, +x, +y, vertical)) return false;

    if (vertical) {
      for (let i = +x; i < (+x + ship.length); i += 1) { 
        coordinates.push({ x: i, y: +y });
        this.gameboard[i][+y] = ship;
      }
    } else {
      for (let i = +y; i < (+y + ship.length); i += 1) {
        coordinates.push({ x: +x, y: i })
        this.gameboard[+x][i] = ship;
      }
    }
    
    // Add ship into ship container
    this.shipMap.set(ship, coordinates);

    return true;
  }

  receiveAttack(x, y) {
    if (!GameboardController.#isValidCoord(x, y)) return { exit: false };
    if (this.trackAttacks.has({x: +x, y: +y})) return { exit: false };
    this.trackAttacks.add({x: +x, y: +y});
    if (this.gameboard[+x][+y] instanceof Ship) {
      this.gameboard[+x][+y].hit();
      if (this.gameboard[+x][+y].isSunk()) {
        return {
          exit: true,
          water: false,
          sunk: true,
          coordinates: this.shipMap.get(this.gameboard[+x][+y])
        }; 
      }
      return {
        exit: true,
        water: false,
        sunk: false
      };
    }
    return {
      exit: true,
      water: true
    };
  }
};
