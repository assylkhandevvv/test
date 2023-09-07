import { Injectable } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class CancelationService {
  private readonly responseMap = new Map<string, Response>();

  public register(userId: string, response: Response) {
    this.cancelIfExists(userId);
    return this.responseMap.set(userId, response);
  }

  private cancelIfExists(userId: string) {
    if (this.responseMap.has(userId)) {
      const response = this.responseMap.get(userId);
      response.status(420).end();
    }
  }

  public delete(userId: string) {
    return this.responseMap.delete(userId);
  }
}
