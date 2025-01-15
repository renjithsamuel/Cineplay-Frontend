export interface IUser {
  userId: string;
  // profileImageUrl: string;
  username: string;
  email: string;
  emailVerified: boolean;
  type: string;
  password?: string;
  createdAt: Date;
  updatedAt: Date;
}

export class User implements IUser {
  readonly userId: string;
  // profileImageUrl: string;
  username: string;
  email: string;
  emailVerified: boolean;
  type: string;
  password?: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(user: IUser) {
    this.userId = user.userId;
    this.username = user.username;
    this.email = user.email;
    this.emailVerified = user.emailVerified;
    this.type = user.type;
    this.password = user.password;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
  }
}
