import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../data/entities/user.entity';
import { WorkoutController } from './workout.controller';
import { WorkoutService } from './workout.service';
import { Workout } from 'src/data/entities/workout.entity';
import { WorkoutExercise } from 'src/data/entities/workout-exercise.entity';
import { UserWorkout } from 'src/data/entities/user-workout.entity';
import { Exercise } from 'src/data/entities/exercise.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Exercise, Workout, WorkoutExercise, User, UserWorkout])],
  controllers: [WorkoutController],
  providers: [WorkoutService],
})
export class WorkoutModule {}