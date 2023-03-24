export default abstract class Race {
  static numberOfRaces: number;

  constructor(
    private readonly _name: string, 
    private readonly _dexterity: number,
  ) {
    this._name = _name;
    this._dexterity = _dexterity;
  }

  static createdRacesInstances():number {
    // const newValue = this.numberOfRaces + 1;
    // this.numberOfRaces = newValue;
    // return newValue;
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