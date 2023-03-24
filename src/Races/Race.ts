export default abstract class Race {
  constructor(
    private readonly _name: string, 
    private readonly _dexterity: number,
  ) {
    this._name = _name;
    this._dexterity = _dexterity;
  }

  static createdRacesInstances():number {
    throw new Error('Not implemented');
  }

  get name() {
    return this._name;
  }

  get dexterity() {
    return this._dexterity;
  }

  abstract get maxLifePoints():number;
}