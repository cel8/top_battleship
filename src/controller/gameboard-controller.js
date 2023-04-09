import Ship from 'Modules/ship';
import CoordinateTrackerSet from 'Modules/coordinate-tracker-set';

const BOARD_SIZE = 10;

export default class GameboardController {
  constructor(userGameboard = false) {
    this.boardSize = BOARD_SIZE;
    this.gameboard = new Array(BOARD_SIZE);
    for (let i = 0; i < BOARD_SIZE; i += 1) this.gameboard[i] = new Array(BOARD_SIZE);
    this.userGameboard = userGameboard || false;
    this.trackAttacks = new CoordinateTrackerSet();
    this.trackAdjacents = new CoordinateTrackerSet();
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
    if (vertical) {
      for (let i = x; i < (x + shipLength) && !isAdjacent; i += 1) {
        if (this.trackAdjacents.has({x: i, y})) isAdjacent = true;
      }
    } else {
      for (let i = y; i < (y + shipLength) && !isAdjacent; i += 1) {
        if (this.trackAdjacents.has({x, y: i})) isAdjacent = true;
      }
    }
    return isAdjacent;
  }

  isUserGameboard() { return this.userGameboard; }

  getShipCoordinates() {
    const shipCoordinates = [];
    this.shipMap.forEach(v => shipCoordinates.push(v));
    return shipCoordinates;
  }

  get BoardSize() { return this.boardSize }

  checkPlace(shipLength, x, y, vertical = false) {
    if (!GameboardController.#isValidCoord(x, y) ||
       (vertical  && (+x + shipLength > BOARD_SIZE)) ||
       (!vertical && (+y + shipLength > BOARD_SIZE))) return false;
    if (this.#checkAdjacent(x, y, shipLength, vertical)) return false;
    return true;
  }

  #addTrackAdjacent(x, y, vertical) {
    if (vertical) {
      this.trackAdjacents.add({x, y});
      this.trackAdjacents.add({x, y: y - 1});
      this.trackAdjacents.add({x, y: y + 1});
    } else {
      this.trackAdjacents.add({x, y});
      this.trackAdjacents.add({x: x - 1, y});
      this.trackAdjacents.add({x: x + 1, y});

    }
  }

  place(ship, x, y, vertical = false) {
    const coordinates = [];
    if (!(ship instanceof Ship)) return false;
    if (!this.checkPlace(ship.length, +x, +y, vertical)) return false;

    if (vertical) {
      this.#addTrackAdjacent(+x - 1, +y, vertical);
      for (let i = +x; i < (+x + ship.length); i += 1) { 
        coordinates.push({ x: i, y: +y });
        this.#addTrackAdjacent(i, +y, vertical);
        this.gameboard[i][+y] = ship;
      }
      this.#addTrackAdjacent(+x + ship.length, +y, vertical);
    } else {
      this.#addTrackAdjacent(+x, +y - 1, vertical);
      for (let i = +y; i < (+y + ship.length); i += 1) {
        coordinates.push({ x: +x, y: i });
        this.#addTrackAdjacent(+x, i, vertical);
        this.gameboard[+x][i] = ship;
      }
      this.#addTrackAdjacent(+x, +y + ship.length, vertical);
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
          coordinates: this.shipMap.get(this.gameboard[+x][+y]),
          attack: {
            x,
            y
          }
        }; 
      }
      return {
        exit: true,
        water: false,
        sunk: false,
        attack: {
          x,
          y
        }
      };
    }
    return {
      exit: true,
      water: true,
      attack: {
        x,
        y
      }
    };
  }
};
