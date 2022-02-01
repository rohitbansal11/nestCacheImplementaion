import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module, CacheModule, CacheInterceptor } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [CacheModule.register({
    store:redisStore,
    host: 'localhost',
    port: 5000,
    ttl:300
  })],
  controllers: [AppController],
  providers: [{provide: APP_INTERCEPTOR,
  useClass:CacheInterceptor},
  AppService],
})
export class AppModule {}
