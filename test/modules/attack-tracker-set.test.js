import AttackTrackerSet from "Modules/attack-tracker-set";


let attackTrackerSet;

beforeEach(() => {
  attackTrackerSet = new AttackTrackerSet();
  attackTrackerSet.add({x: 2, y: 2});
});

it('add valid object', () => {
  expect(() => attackTrackerSet.add({x: 3, y: 3})).not.toThrow('Invalid input');
  expect(attackTrackerSet.has({x: 3, y: 3})).toBeTruthy();
});

it('add invalid input #1', () => {
  expect(() => attackTrackerSet.add(3)).toThrow('Invalid input');
});

it('add invalid input #2', () => {
  expect(() => attackTrackerSet.add({x: 3, z: 2})).toThrow('Invalid input');
});

it('has/not has object', () => {
  expect(attackTrackerSet.has({x: 2, y: 2})).toBeTruthy();
  expect(attackTrackerSet.has({x: 3, y: 3})).toBeFalsy();
});

it('delete object #1', () => {
  expect(() => attackTrackerSet.delete({x: 2, y: 2})).not.toThrow('Invalid input');
  expect(attackTrackerSet.has({x: 2, y: 2})).toBeFalsy();
});

it('delete object #2', () => {
  attackTrackerSet.add({x: 3, y: 3});
  attackTrackerSet.add({x: 5, y: 6});
  expect(() => attackTrackerSet.delete({x: 2, y: 2})).not.toThrow('Invalid input');
  expect(attackTrackerSet.has({x: 2, y: 2})).toBeFalsy();
});