import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { CancelationService } from '../services/cancelation.service';
import { tap } from 'rxjs/operators';
import { Request, Response } from 'express';

@Injectable()
export class CancelationInterceptor implements NestInterceptor {
  constructor(private readonly cancelationService: CancelationService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest<Request>();
    const userId = request.cookies['userId'];
    const response = context.switchToHttp().getResponse<Response>();
    this.cancelationService.register(userId, response);
    return next
      .handle()
      .pipe(tap(() => this.cancelationService.delete(userId)));
  }
}
