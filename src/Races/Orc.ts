import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  static numberOfOrcs = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.numberOfOrcs += 1;
  }

  static createdRacesInstances():number {
    return Orc.numberOfOrcs;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}