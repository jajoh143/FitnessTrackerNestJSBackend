import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkoutExercise } from 'src/data/entities/workout-exercise.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WorkoutExerciseService {
    constructor(
        @InjectRepository(WorkoutExercise)
        private workoutExerciseRepository: Repository<WorkoutExercise>,
    ) {}

    findAll(): Promise<WorkoutExercise[]> {
        return this.workoutExerciseRepository.find({ relations: ['workout', 'exercise'] });
    }

    findOne(id: number): Promise<WorkoutExercise> {
        return this.workoutExerciseRepository.findOne({
            where: {
                workout_exercise_id: id
            },
            relations: ['workout', 'exercise']
        });
    }

    create(workoutExercise: WorkoutExercise): Promise<WorkoutExercise> {
        return this.workoutExerciseRepository.save(workoutExercise);
    }

    async remove(id: number): Promise<void> {
        await this.workoutExerciseRepository.delete(id);
    }
}