import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { WorkoutExerciseHistory } from 'src/data/entities/workout-exercise-history.entity';
import { WorkoutExerciseHistoryService } from './workout-exercise-history.service';

@Controller('workout-exercise-history')
export class WorkoutExerciseHistoryController {
    constructor(private readonly workoutExerciseHistoryService: WorkoutExerciseHistoryService) {}

    @Get()
    findAll(): Promise<WorkoutExerciseHistory[]> {
        return this.workoutExerciseHistoryService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<WorkoutExerciseHistory> {
        return this.workoutExerciseHistoryService.findOne(id);
    }

    @Post()
    create(@Body() workoutExerciseHistory: WorkoutExerciseHistory): Promise<WorkoutExerciseHistory> {
        return this.workoutExerciseHistoryService.create(workoutExerciseHistory);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.workoutExerciseHistoryService.remove(id);
    }
}