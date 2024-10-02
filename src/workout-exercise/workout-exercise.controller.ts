import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { WorkoutExerciseService } from './workout-exercise.service';
import { WorkoutExercise } from 'src/data/entities/workout-exercise.entity';

@Controller('workout-exercises')
export class WorkoutExerciseController {
    constructor(private readonly workoutExerciseService: WorkoutExerciseService) {}

    @Get()
    findAll(): Promise<WorkoutExercise[]> {
        return this.workoutExerciseService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<WorkoutExercise> {
        return this.workoutExerciseService.findOne(id);
    }

    @Post()
    create(@Body() workoutExercise: WorkoutExercise): Promise<WorkoutExercise> {
        return this.workoutExerciseService.create(workoutExercise);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.workoutExerciseService.remove(id);
    }
}