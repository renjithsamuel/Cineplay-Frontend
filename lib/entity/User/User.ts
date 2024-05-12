import { Role } from "@/cineplay/lib/constants/Role";

export interface IUser {
  userID: string;
  profileImageUrl: string;
  name: string;
  role: Role;
  email: string;
  dateOfBirth: Date;
  phoneNumber: number;
  address: string;
  joinedDate: Date;
  country: string;
  views: number;
  password?: string;
  createdAt: Date;
  updatedAt: Date;
}

export class User implements IUser {
  readonly userID: string;
  name: string;
  role: Role;
  profileImageUrl: string;
  email: string;
  dateOfBirth: Date;
  phoneNumber: number;
  address: string;
  joinedDate: Date;
  country: string;
  views: number;
  password?: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(user: IUser) {
    this.userID = user.userID;
    this.profileImageUrl = user.profileImageUrl;
    this.name = user.name;
    this.role = user.role;
    this.email = user.email;
    this.dateOfBirth = user.dateOfBirth;
    this.phoneNumber = user.phoneNumber;
    this.address = user.address;
    this.joinedDate = user.joinedDate;
    this.country = user.country;
    this.views = user.views;
    this.password = user.password;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
  }
}
