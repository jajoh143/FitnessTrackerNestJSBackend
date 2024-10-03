import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { WorkoutExercise } from './workout-exercise.entity';

@Entity()
export class Exercise {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    muscle_group: string;

    @Column()
    created_at: Date;

    @OneToMany(() => WorkoutExercise, workoutExercise => workoutExercise.exercise)
    workoutExercises: WorkoutExercise[];
}