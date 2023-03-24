export default interface Energy {
  type_: EnergyType,
  amount: number
}

const typeLife: string = 'mana' || 'stamina';
type EnergyType = typeof typeLife;

export { EnergyType };