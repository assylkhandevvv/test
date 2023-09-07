import { Module } from '@nestjs/common';
import { UserModule } from './domain/user/user.module';
import { CancelationModule } from './libs/cancelation/cancelation.module';

@Module({
  imports: [UserModule, CancelationModule],
})
export class AppModule {}
