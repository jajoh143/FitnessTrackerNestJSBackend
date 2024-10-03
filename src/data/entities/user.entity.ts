import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Workout } from './workout.entity';
import { UserWorkout } from './user-workout.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @OneToMany(() => UserWorkout, userWorkout => userWorkout.user)
    userWorkouts: UserWorkout[];
}
