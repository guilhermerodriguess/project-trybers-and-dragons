import Archetype from './Archetype';

export default class Mage extends Archetype {
  static numberOfArchetype = 0;
  private _energy = 'mana';
  constructor(name: string) {
    super(name);
    Mage.numberOfArchetype += 1;
  }

  get energyType(): string {
    return this._energy;
  }

  static createdArchetypeInstances(): number {
    return Mage.numberOfArchetype;
  }
}