
export interface Player {
  id: string;
  username: string;
  hp: number;
  combo: number;
  wins: number;
  isAdmin: boolean;
  isAlive: boolean;
  deathIn: number;
}

export enum RoomStatus {
  WAITING = "WAITING",
  STARTING = "STARTING",
  INGAME = "INGAME",
  FINISH = "FINISH",
}

export interface Room {
  id: string;
  players: { [key: string]: Player };
  alivePlayers: { [key: string]: Player };
  status: RoomStatus;
  startedIn: number;
}

export interface Message {
  date: Date;
  player: Player;
  message: string;
  isMe: boolean;
}