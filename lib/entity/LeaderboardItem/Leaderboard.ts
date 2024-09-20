import { Role } from "@/cineplay/lib/constants/Role";

export interface ILeaderboardItem {
  userID: string;
  name: string;
  rank: number;
  points: number;
  createdAt: Date;
  updatedAt: Date;
}

export class LeaderboardItem implements ILeaderboardItem {
  readonly userID: string;
  name: string;
  rank: number;
  points: number;
  createdAt: Date;
  updatedAt: Date;

  constructor(leaderboardItem: ILeaderboardItem) {
    this.userID = leaderboardItem.userID;
    this.name = leaderboardItem.name;
    this.rank = leaderboardItem.rank;
    this.points = leaderboardItem.points;
    this.createdAt = leaderboardItem.createdAt;
    this.updatedAt = leaderboardItem.updatedAt;
  }
}
