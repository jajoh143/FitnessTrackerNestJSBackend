import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../data/entities/user.entity';
import { WorkoutController } from './workout.controller';
import { WorkoutService } from './workout.service';
import { Workout } from 'src/data/entities/workout.entity';
import { WorkoutExercise } from 'src/data/entities/workout-exercise.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Workout, User, WorkoutExercise])],
  controllers: [WorkoutController],
  providers: [WorkoutService],
})
export class WorkoutModule {}