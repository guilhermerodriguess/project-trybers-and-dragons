import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  static numberOfHalflings = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.numberOfHalflings += 1;
  }

  static createdRacesInstances():number {
    return Halfling.numberOfHalflings;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}