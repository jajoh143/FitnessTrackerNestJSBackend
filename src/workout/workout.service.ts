import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AssignWorkoutExercise } from 'src/data/dto/exercise_workout/assign-exercise-workout.dto';
import { CreateWorkoutDto } from 'src/data/dto/workout/create-workout.dto';
import { Exercise } from 'src/data/entities/exercise.entity';
import { UserWorkout } from 'src/data/entities/user-workout.entity';
import { User } from 'src/data/entities/user.entity';
import { WorkoutExercise } from 'src/data/entities/workout-exercise.entity';
import { Workout } from 'src/data/entities/workout.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WorkoutService {
  constructor(
    @InjectRepository(Workout) private readonly workoutRepository: Repository<Workout>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(UserWorkout) private readonly userWorkoutRepository: Repository<UserWorkout>,
    @InjectRepository(Exercise) private readonly exerciseRepository: Repository<Exercise>,
    @InjectRepository(WorkoutExercise) private readonly workoutExerciseRepository: Repository<WorkoutExercise>
  ) {}


  async create(createWorkoutDto: CreateWorkoutDto): Promise<Workout> {
    const workout = new Workout();
    
    workout.name = createWorkoutDto.name;
    workout.description = createWorkoutDto.description;
    workout.date = new Date();
    
    this.workoutRepository.create(workout);
    
    return workout;
  }

  findAll(): Promise<Workout[]> {
    return this.workoutRepository.find({ relations: ['user', 'workoutExercises'] });
  }

  findOne(id: number): Promise<Workout> {
    return this.workoutRepository.findOne({
      where: { id },
      relations: ['user', 'workoutExercises']
    });
  }

  /**
   * function for adding a new user workout
   * @param workoutId 
   * @param userId 
   * @returns new user workout
   */
  async addUserWorkout(workoutId: number, userId: number): Promise<UserWorkout> {
    const userWorkout: UserWorkout = new UserWorkout();
    const workout: Workout = await this.workoutRepository.findOneBy({ id: workoutId });
    const user: User = await this.userRepository.findOneBy({ id: userId });

    userWorkout.isActive = true;
    userWorkout.workout = workout;
    userWorkout.user = user;
    this.userWorkoutRepository.create(userWorkout);

    return userWorkout;
  }

  /**
   * Assigns a new exercise to the workout
   * @param assignWorkoutExercise dto for operation
   */
  async addWorkoutExercise(assignWorkoutExercise: AssignWorkoutExercise): Promise<WorkoutExercise> {
    const workout: Workout = await this.workoutRepository.findOneBy({ id: assignWorkoutExercise.workoutId });
    const exercise: Exercise = await this.exerciseRepository.findOneBy({ id: assignWorkoutExercise.exerciseId });
    const workoutExercise: WorkoutExercise = new WorkoutExercise();
    
    workoutExercise.workout = workout;
    workoutExercise.exercise = exercise;
    this.workoutExerciseRepository.create(workoutExercise);
    
    return workoutExercise;
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
