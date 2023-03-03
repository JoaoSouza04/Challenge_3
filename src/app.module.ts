import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { EventsModule } from './events/events.module';
import { User } from './users/user.entity';
import { Event } from './events/event.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db.sqlite',
    entities: [User, Event],
    synchronize: true
  }), UsersModule, EventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
