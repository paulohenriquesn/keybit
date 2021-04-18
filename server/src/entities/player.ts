export default class User {
  id: string;
  username: string;
  hp: number;
  combo: number;
  wins: number;
  isAdmin: boolean;
  isAlive: boolean;
  deathIn: number;

  constructor(username: string, id: string, isAdmin: boolean) {
    this.id = id;
    this.username = username;
    this.isAdmin = isAdmin;
    this.wins = 0;
    this.hp = 100;
    this.combo = 0;
    this.isAlive = true;
    this.deathIn = 0;
  }

  setHp(hp: number) {
    this.hp = hp;
  }

  setCombo(combo: number) {
    this.combo = combo;
  }

  setIsAlive(status: boolean) {
    this.isAlive = status;
  }

  resetAttributes() {
    this.hp = 100;
    this.combo = 0;
    this.isAlive = true;
  }

  addWin() {
    this.wins += 1;
  }

  setDeath() {
    this.deathIn = new Date().getTime();
  }
}
