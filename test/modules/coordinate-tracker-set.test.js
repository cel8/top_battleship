import CoordinateTrackerSet from "Modules/coordinate-tracker-set";


let coordinateTrackerSet;

beforeEach(() => {
  coordinateTrackerSet = new CoordinateTrackerSet();
  coordinateTrackerSet.add({x: 2, y: 2});
});

it('add valid object', () => {
  expect(() => coordinateTrackerSet.add({x: 3, y: 3})).not.toThrow('Invalid input');
  expect(coordinateTrackerSet.has({x: 3, y: 3})).toBeTruthy();
});

it('add invalid input #1', () => {
  expect(() => coordinateTrackerSet.add(3)).toThrow('Invalid input');
});

it('add invalid input #2', () => {
  expect(() => coordinateTrackerSet.add({x: 3, z: 2})).toThrow('Invalid input');
});

it('has/not has object', () => {
  expect(coordinateTrackerSet.has({x: 2, y: 2})).toBeTruthy();
  expect(coordinateTrackerSet.has({x: 3, y: 3})).toBeFalsy();
});

it('delete object #1', () => {
  expect(() => coordinateTrackerSet.delete({x: 2, y: 2})).not.toThrow('Invalid input');
  expect(coordinateTrackerSet.has({x: 2, y: 2})).toBeFalsy();
});

it('delete object #2', () => {
  coordinateTrackerSet.add({x: 3, y: 3});
  coordinateTrackerSet.add({x: 5, y: 6});
  expect(() => coordinateTrackerSet.delete({x: 2, y: 2})).not.toThrow('Invalid input');
  expect(coordinateTrackerSet.has({x: 2, y: 2})).toBeFalsy();
});