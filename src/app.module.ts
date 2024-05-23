import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SQLConnection } from './database/db-config';

@Module({
  imports: [TypeOrmModule.forRoot(SQLConnection),UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
