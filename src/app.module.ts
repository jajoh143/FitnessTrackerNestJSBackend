import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { join } from 'path';
import { WorkoutModule } from './workout/workout.module';
import { ExerciseModule } from './exercise/exercise.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'fitness-tracker-test',
      synchronize: true,
      logging: true,
      entities: [join(__dirname, '**', './data/entities/*.entity.{ts,js}')]
    }),
    ExerciseModule,
    UserModule,
    WorkoutModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
