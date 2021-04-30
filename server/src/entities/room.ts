import Player from "./player";

export enum RoomStatus {
  WAITING = "WAITING",
  STARTING = "STARTING",
  INGAME = "INGAME",
  FINISH = "FINISH"
}

export default class Room {
  id: string;
  players: { [key: string]: Player };
  alivePlayers: { [key: string]: Player };
  status: RoomStatus;
  startedIn: number;

  constructor(id: string) {
    this.id = id;
    this.players = {}
    this.alivePlayers = {}
    this.status = RoomStatus.WAITING
    this.startedIn = new Date().getTime();
  }

  addPlayer(player: Player) {
    this.players[player.id] = player;
    this.alivePlayers[player.id] = player;
  }

  removePlayer(id: string) {
    console.log(id)
    console.log(this.players)
    if (this.players[id].isAdmin) {
      const first = Object.values(this.players)[1];

      if (first) {
        this.players[first.id].isAdmin = true;
      }
    }

    delete this.players[id]
    delete this.alivePlayers[id]
  }

  resetAlivePlayersList() {
    this.alivePlayers = { ...this.players };
  }

  resetPlayersAttributes() {
    Object.values(this.players).map(player => {
      player.resetAttributes()
    })
  }

  removeFromAlive(id: string) {
    const old = { ...this.alivePlayers }
    delete old[id]

    this.alivePlayers = { ...old }
  }

  setDate() {
    this.startedIn = new Date().getTime();
  }

  setStatus(status: RoomStatus) {
    this.status = status;
  }
}