import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { User } from './user.entity';
import { WorkoutExercise } from './workout-exercise.entity';
import { Exercise } from './exercise.entity';

@Entity()
export class Workout {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    date: Date;

    @ManyToMany(() => Exercise)
    @JoinTable()
    exercises: Exercise[];

    @OneToMany(() => WorkoutExercise, workoutExercise => workoutExercise.workout)
    workoutExercises: WorkoutExercise[];
}