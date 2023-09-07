import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { IMaskedUser, UserService } from '../services/user.service';
import { GetUserDTO } from './dto/get-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { CancelationInterceptor } from 'src/libs/cancelation/interceptors/cancelation.interceptor';

@Controller('users')
export class UserController {
  public constructor(private readonly userService: UserService) {}

  @UseInterceptors(FileInterceptor('file'), CancelationInterceptor)
  @Post('list')
  public async getUsers(@Body() dto: GetUserDTO): Promise<IMaskedUser[]> {
    return await this.userService.getUsers(dto);
  }
}
