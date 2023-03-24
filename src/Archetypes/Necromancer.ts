import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  static numberOfArchetype = 0;
  private _energy = 'mana';
  constructor(name: string) {
    super(name);
    Necromancer.numberOfArchetype += 1;
  }

  get energyType(): string {
    return this._energy;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.numberOfArchetype;
  }
}