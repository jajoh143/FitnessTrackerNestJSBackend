import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Workout } from "./workout.entity";

@Entity()
export class UserWorkout {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.userWorkouts)
    user: User;

    @ManyToOne(() => Workout, workout => workout.workoutExercises)
    workout: Workout;

    @Column()
    isActive: boolean;
}