import Ship from 'Modules/ship';

const BOARD_SIZE = 10;

export default class GameboardController {
  constructor(userGameboard = false) {
    this.gameboard = new Array(BOARD_SIZE);
    for (let i = 0; i < BOARD_SIZE; i += 1) this.gameboard[i] = new Array(BOARD_SIZE);
    this.userGameboard = userGameboard || false;
  }

  isUserGameboard() { return this.userGameboard; }

  place(ship, x, y, vertical = false) {
    if (!(ship instanceof Ship)) return false;
    if (Number.isNaN(+x) || Number.isNaN(+y)) return false;
    if ((+x < 0) || (+x >= BOARD_SIZE) || 
        (+y < 0) || (+y >= BOARD_SIZE) || 
        (vertical  && (+x + ship.length >= BOARD_SIZE)) ||
        (!vertical && (+y + ship.length >= BOARD_SIZE))) return false;

    if (vertical) {
      for (let i = +x; i < (+x + ship.length); i += 1) this.gameboard[i][y] = ship;
    } else {
      for (let i = +y; i < (+y + ship.length); i += 1) this.gameboard[x][i] = ship;
    }
    
    return true;
  }
};
