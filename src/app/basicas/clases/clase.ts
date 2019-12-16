export class Jugador {
  hp: number;
  constructor() {
    this.hp = 100;
  }
  recibeDanio(danio: number) {
    if (danio >= this.hp) {
      // sin vida
      this.hp = 0;
    } else {
      this.hp = this.hp - danio;
    }
    return this.hp;
  }
}