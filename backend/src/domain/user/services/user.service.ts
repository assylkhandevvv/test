import { Injectable } from '@nestjs/common';
import { IUser, UserRepository } from './user.repository';
import { GetUserDTO } from '../controllers/dto/get-user.dto';
import { Delay } from '../decorators/delay.decorator';

export interface IMaskedUser {
  email: string;
  number: string;
}

@Injectable()
export class UserService {
  public constructor(private readonly userRepository: UserRepository) {}

  @Delay(5000)
  public async getUsers(dto: GetUserDTO): Promise<IMaskedUser[]> {
    const users = this.userRepository.findUsersByFilter(dto);
    if (!users.length) {
      return users as [];
    }
    return this.maskNumbers(users);
  }

  private maskNumbers(users: IUser[]): IMaskedUser[] {
    return users.map(({ email, number }) => {
      const numberStr = number.toString();

      const pairs = [];
      for (let i = 0; i < numberStr.length; i += 2) {
        pairs.push(numberStr.slice(i, i + 2));
      }

      return {
        email,
        number: pairs.join('-'),
      };
    });
  }
}
