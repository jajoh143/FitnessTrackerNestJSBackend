import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Workout } from './workout.entity';
import { Exercise } from './exercise.entity';
import { WorkoutExerciseHistory } from './workout-exercise-history.entity';

@Entity()
export class WorkoutExercise {
    @PrimaryGeneratedColumn()
    workout_exercise_id: number;

    @Column()
    sets: number;

    @Column()
    reps: number;

    @Column()
    weight: number;

    @ManyToOne(() => Workout, workout => workout.workoutExercises)
    workout: Workout;

    @ManyToMany(() => Exercise)
    @JoinTable()
    exercises: Exercise;

    @ManyToMany(() => WorkoutExerciseHistory)
    @JoinTable()
    history: WorkoutExerciseHistory[];
}