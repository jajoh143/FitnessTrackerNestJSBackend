import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { WorkoutExercise } from './workout-exercise.entity';

@Entity()
export class WorkoutExerciseHistory {
    @PrimaryGeneratedColumn()
    history_id: number;

    @Column()
    date: Date;

    @Column()
    sets_completed: number;

    @Column()
    reps_completed: number;

    @Column()
    weight_used: number;

    @ManyToOne(() => WorkoutExercise, workoutExercise => workoutExercise.history)
    workoutExercise: WorkoutExercise;
}