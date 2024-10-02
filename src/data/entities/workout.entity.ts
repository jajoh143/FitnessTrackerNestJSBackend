import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { WorkoutExercise } from './workout-exercise.entity';

@Entity()
export class Workout {
    @PrimaryGeneratedColumn()
    workout_id: number;

    @Column()
    workout_name: string;

    @Column()
    description: string;

    @Column()
    created_at: Date;

    @ManyToOne(() => User, user => user.workouts)
    user: User;

    @OneToMany(() => WorkoutExercise, workoutExercise => workoutExercise.workout)
    workoutExercises: WorkoutExercise[];
}