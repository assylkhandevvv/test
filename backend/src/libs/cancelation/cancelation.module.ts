import { Global, Module } from '@nestjs/common';
import { CancelationService } from './services/cancelation.service';
import { CancelationInterceptor } from './interceptors/cancelation.interceptor';

@Global()
@Module({
  providers: [CancelationService, CancelationInterceptor],
  exports: [CancelationInterceptor, CancelationService],
})
export class CancelationModule {}
