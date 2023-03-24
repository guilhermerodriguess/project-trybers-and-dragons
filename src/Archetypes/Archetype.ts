import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private readonly _special = 0;
  private readonly _cost = 0;
  constructor(private readonly _name: string) {

  }

  get special() {
    return this._special;
  }

  get cost() {
    return this._cost;
  }
  
  get name() {
    return this._name;
  }

  static createdArchetypeInstances():number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}