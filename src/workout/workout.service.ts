import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AssignWorkoutExercise } from 'src/data/dto/exercise_workout/assign-exercise-workout.dto';
import { CreateWorkoutDto } from 'src/data/dto/workout/create-workout.dto';
import { Exercise } from 'src/data/entities/exercise.entity';
import { User } from 'src/data/entities/user.entity';
import { WorkoutExercise } from 'src/data/entities/workout-exercise.entity';
import { Workout } from 'src/data/entities/workout.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WorkoutService {
  constructor(
    @InjectRepository(Workout) private readonly workoutRepository: Repository<Workout>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Exercise) private readonly exerciseRepository: Repository<Exercise>
  ) {}


  async create(createWorkoutDto: CreateWorkoutDto) {
    const workout = new Workout();
    workout.workout_name = createWorkoutDto.name;
    workout.created_at = new Date();
    workout.description = createWorkoutDto.notes;
    workout.user = await this.userRepository.findBy({ user_id: createWorkoutDto.user_id })
      .then((userArray: User[]) => userArray.length > 0 ? userArray[0] : {} as User);
    return this.workoutRepository.save(workout);
  }

  findAll(): Promise<Workout[]> {
    return this.workoutRepository.find({ relations: ['user', 'workoutExercises'] });
  }

  findOne(id: number): Promise<Workout> {
    return this.workoutRepository.findOne({
      where: {
        workout_id: id
      },
      relations: ['user', 'workoutExercises']
    });
  }

  /**
   * Assigns a new exercise to the workout
   * @param assignWorkoutExercise dto for operation
   */
  async assignWorkoutExercise(assignWorkoutExercise: AssignWorkoutExercise) {
    const workout: Workout = await this.workoutRepository.findOneBy({ workout_id: assignWorkoutExercise.workoutId });
    const exercise: Exercise = await this.exerciseRepository.findOneBy({ exercise_id: assignWorkoutExercise.exerciseId });
    const workoutExercise: WorkoutExercise = new WorkoutExercise();
    workoutExercise.workout = workout;
    workoutExercise.ex
    
    workoutExercise.
  }


//   update(id: number, updateWorkoutDto: UpdateWorkoutDto) {
//     const workoutIndex = this.workouts.findIndex(workout => workout.id === id);
//     if (workoutIndex > -1) {
//       this.workouts[workoutIndex] = { ...this.workouts[workoutIndex], ...updateWorkoutDto };
//       return this.workouts[workoutIndex];
//     }
//     return null;
//   }

  remove(id: number) {
    return this.workoutRepository.delete(id);
  }

}
