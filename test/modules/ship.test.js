import Ship from 'Modules/ship'; 

it('expect invalid ship length #undefined', () => {
  expect(() => new Ship()).toThrow('Invalid input');
});

it('expect invalid ship length #string', () => {
  expect(() => new Ship('ciao')).toThrow('Invalid input');
});

it('expect invalid ship length #out-of-range', () => {
  expect(() => new Ship('6')).toThrow('Invalid out-of-range');
  expect(() => new Ship('0')).toThrow('Invalid out-of-range');
});

it('valid object #ship length 2', () => {
  expect(() => expect(new Ship(2)).toBeDefined()).not.toThrow('Invalid input');
});

it('valid ship object', () => {
  const ship = new Ship(3);
  expect(ship.length).toBeDefined();
  expect(ship.hits).toBeDefined();
});

it('hit a ship', () => {
  const ship = new Ship(3);
  expect(ship.hits).toBe(0);
  ship.hit();
  expect(ship.hits).toBe(1);
});

it('Ship is not sunk', () => {
  const ship = new Ship(3);
  expect(ship.isSunk()).toBeFalsy();
  ship.hit();
  expect(ship.isSunk()).toBeFalsy();
});

it('Ship is now sunk', () => {
  const ship = new Ship(3);
  expect(ship.isSunk()).toBeFalsy();
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBeTruthy();
});
