export default class AttackTrackerSet extends Set {
  static #checkParameter(obj) {
    if (!(typeof(obj) === 'object')) throw new 'Invalid input'; 
    if (obj.x === undefined || obj.y === undefined) throw new 'Invalid input'; 
  }

  add(obj) {
    AttackTrackerSet.#checkParameter(obj);
    if (!this.has(obj)) super.add(obj);
  }

  delete(obj) {
    AttackTrackerSet.#checkParameter(obj);

    super.forEach((value) => {
      if ((value.x === obj.x) && (value.y === obj.y)) {
        super.delete(value);
      }
    });
  }

  has(obj) {
    let exit = false;
    AttackTrackerSet.#checkParameter(obj);
    if (super.has(obj)) return true;

    super.forEach((value) => {
      if (!exit && ((value.x === obj.x) && (value.y === obj.y))) exit = true;
    });

    return exit;
  }
}