import { Role } from "@/cineplay/lib/constants/Role";

export interface IUser {
  _id: string;
  username: string;
  userId: string;
  email: string;
}

export interface ILeaderboardItem {
  _id: string;
  userId: string;
  score: number;
  user: IUser[];
  id: string;
}

export class LeaderboardItem implements ILeaderboardItem {
  readonly _id: string;
  userId: string;
  score: number;
  user: IUser[];
  id: string;

  constructor(leaderboardItem: ILeaderboardItem) {
    this._id = leaderboardItem._id;
    this.userId = leaderboardItem.userId;
    this.score = leaderboardItem.score;
    this.user = leaderboardItem.user;
    this.id = leaderboardItem.id;
  }
}
