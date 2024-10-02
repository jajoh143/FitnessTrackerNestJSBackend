import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { WorkoutExercise } from './workout-exercise.entity';

@Entity()
export class Exercise {
    @PrimaryGeneratedColumn()
    exercise_id: number;

    @Column()
    exercise_name: string;

    @Column()
    description: string;

    @Column()
    muscle_group: string;

    @OneToMany(() => WorkoutExercise, workoutExercise => workoutExercise.exercise)
    workoutExercises: WorkoutExercise[];
}