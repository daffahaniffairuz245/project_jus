import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';


import { ConfigModule } from '@nestjs/config';
import { typeOrm } from './config/typeOrm.config';
import { TypeOrmModule } from '@nestjs/typeorm';


import { AuthModule } from './app/auth/auth.module';


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal : true
  }), 
  TypeOrmModule.forRootAsync({
    useFactory: async () => {
      const { typeOrm } = await import('./config/typeorm.config');
      return typeOrm;
    },
  }),
 AuthModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
