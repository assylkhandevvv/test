import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { UserRepository } from './services/user.repository';

@Module({
  providers: [
    UserService,
    UserRepository,
    {
      provide: 'USERS',
      useValue: [
        {
          email: 'jim@gmail.com',
          number: 221122,
        },
        {
          email: 'jam@gmail.com',
          number: 830347,
        },
        {
          email: 'john@gmail.com',
          number: 221122,
        },
        {
          email: 'jams@gmail.com',
          number: 349425,
        },
        {
          email: 'jams@gmail.com',
          number: 141424,
        },
        {
          email: 'jill@gmail.com',
          number: 822287,
        },
        {
          email: 'jill@gmail.com',
          number: 822286,
        },
      ],
    },
  ],
  controllers: [UserController],
})
export class UserModule {}
