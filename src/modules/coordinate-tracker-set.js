export default class CoordinateTrackerSet extends Set {
  static #checkParameter(obj) {
    if (!(typeof(obj) === 'object')) throw new 'Invalid input'; 
    if (obj.x === undefined || obj.y === undefined) throw new 'Invalid input'; 
  }

  add(obj) {
    CoordinateTrackerSet.#checkParameter(obj);
    if (!this.has(obj)) super.add(obj);
  }

  delete(obj) {
    CoordinateTrackerSet.#checkParameter(obj);

    super.forEach((value) => {
      if ((value.x === obj.x) && (value.y === obj.y)) {
        super.delete(value);
      }
    });
  }

  has(obj) {
    let exit = false;
    CoordinateTrackerSet.#checkParameter(obj);
    if (super.has(obj)) return true;

    super.forEach((value) => {
      if (!exit && ((value.x === obj.x) && (value.y === obj.y))) exit = true;
    });

    return exit;
  }
}