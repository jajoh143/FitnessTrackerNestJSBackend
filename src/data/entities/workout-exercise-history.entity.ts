import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { WorkoutExercise } from './workout-exercise.entity';

@Entity()
export class WorkoutExerciseHistory {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => WorkoutExercise, workoutExercise => workoutExercise.history)
    workoutExercise: WorkoutExercise;

    @Column()
    date: Date;

    @Column()
    sets: number;

    @Column()
    reps: number;

    @Column()
    weight: number;
}
