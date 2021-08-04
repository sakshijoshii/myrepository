import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    private logger = new Logger('Http');
  use(req: Request, res: Response, next: NextFunction) {
      const {ip, method, originalUrl} = req;
      const userAgent = req.get('user_agent') || ' ';

      res.on('finish',() => {
          const {statusCode} = res;
          const contentLength = res.get('content-length');
          this.logger.log(
              `${method} ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip}`
          )
      } )
      console.log('logger is called');
    next();
  }
}
