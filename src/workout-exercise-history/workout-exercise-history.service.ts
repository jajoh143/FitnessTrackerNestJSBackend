import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkoutExerciseHistory } from 'src/data/entities/workout-exercise-history.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WorkoutExerciseHistoryService {
    constructor(
        @InjectRepository(WorkoutExerciseHistory)
        private workoutExerciseHistoryRepository: Repository<WorkoutExerciseHistory>,
    ) {}

    findAll(): Promise<WorkoutExerciseHistory[]> {
        return this.workoutExerciseHistoryRepository.find({ relations: ['workoutExercise'] });
    }

    findOne(id: number): Promise<WorkoutExerciseHistory> {
        return this.workoutExerciseHistoryRepository.findOneBy({ workoutExercise: { workout_exercise_id: id}});
    }

    create(workoutExerciseHistory: WorkoutExerciseHistory): Promise<WorkoutExerciseHistory> {
        return this.workoutExerciseHistoryRepository.save(workoutExerciseHistory);
    }

    async remove(id: number): Promise<void> {
        await this.workoutExerciseHistoryRepository.delete(id);
    }
}