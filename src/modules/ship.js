export default class Ship {
  constructor(length) {
    if (Number.isNaN(+length)) throw new 'Invalid input';
    if (+length < 1 || +length > 5) throw new 'Invalid out-of-range';

    this.length = +length;
    this.hits = 0;
  }

  hit() {
    this.hits += 1;
  }

  isSunk() {
    return this.hits === this.length;
  }
};
