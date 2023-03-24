import Archetype from './Archetype';

export default class Ranger extends Archetype {
  static numberOfArchetype = 0;
  private _energy = 'stamina';
  constructor(name: string) {
    super(name);
    Ranger.numberOfArchetype += 1;
  }

  get energyType(): string {
    return this._energy;
  }

  static createdArchetypeInstances(): number {
    return Ranger.numberOfArchetype;
  }
}