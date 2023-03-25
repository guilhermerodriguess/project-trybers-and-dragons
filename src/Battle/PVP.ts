import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    private _player1: Fighter,
    private _player2: Fighter,
  ) {
    super(_player1);
  }

  fight(): number {
    for (let index = 0; index < 100; index += 1) {
      this.player.attack(this._player2);
      if (this._player2.lifePoints <= 0) {
        return 1;
      }
      this._player2.attack(this._player1);
      if (this.player.lifePoints <= 0) {
        return -1;
      }
    }
    return 0;
  }
}