export interface IGame {
  userId: string;
  movieId: string;
  gameId: string;
  cluesUsed: number;
  completed: boolean;
  score: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  imageLinks: string[];
}

export class Game implements IGame {
  readonly userId: string;
  readonly movieId: string;
  gameId: string;
  cluesUsed: number;
  completed: boolean;
  score: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  imageLinks: string[];

  constructor(user: IGame) {
    this.userId = user.userId;
    this.movieId = user.movieId;
    this.gameId = user.gameId;
    this.cluesUsed = user.cluesUsed;
    this.completed = user.completed;
    this.score = user.score;
    this.type = user.type;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
    this.imageLinks = user.imageLinks;
  }
}
