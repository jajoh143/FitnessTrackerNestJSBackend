import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Workout } from './workout.entity';
import { Exercise } from './exercise.entity';
import { WorkoutExerciseHistory } from './workout-exercise-history.entity';

@Entity()
export class WorkoutExercise {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Workout, workout => workout.workoutExercises)
    workout: Workout;

    @ManyToOne(() => Exercise, exercise => exercise.workoutExercises)
    exercise: Exercise;

    @OneToMany(() => WorkoutExerciseHistory, history => history.workoutExercise)
    history: WorkoutExerciseHistory[];
}