import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  // 넘기는 인자는 관련된 로거들을 그룹지어줌
  private logger = new Logger('HTTP');

  use(request: Request, response: Response, next: NextFunction): void {
    const { method, originalUrl } = request;
    // 라우터 전에 첫번째로 진입

    response.on('finish', () => {
      // 세번째로 전입
      const { statusCode } = response;
      this.logger.log(`${method} [${statusCode}] ${originalUrl}`);
    });
    // 두번째로 진입
    next();
  }
}
