import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExerciseController } from './exercise.controller';
import { ExerciseService } from './exercise.service';
import { Exercise } from 'src/data/entities/exercise.entity';
import { Workout } from 'src/data/entities/workout.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Exercise, Workout])],
  controllers: [ExerciseController],
  providers: [ExerciseService],
})
export class ExerciseModule {}