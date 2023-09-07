import { Inject, Injectable } from '@nestjs/common';

export interface IUser {
  email: string;
  number: number;
}

@Injectable()
export class UserRepository {
  public constructor(@Inject('USERS') private readonly users: IUser[]) {}

  public findUsersByFilter(filter: Partial<IUser>): IUser[] {
    const { email, number } = filter;
    const foundUsers = [];
    for (let index = 0; index < this.users.length; index++) {
      if (this.users[index].email === email) {
        if (!number) {
          foundUsers.push(this.users[index]);
        } else if (this.users[index].number === number) {
          foundUsers.push(this.users[index]);
        }
      }
    }
    return foundUsers;
  }
}
