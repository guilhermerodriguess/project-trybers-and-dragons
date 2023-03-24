import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  static numberOfElfs = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.numberOfElfs += 1;
  }

  static createdRacesInstances():number {
    return Elf.numberOfElfs;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}