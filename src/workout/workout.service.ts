import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateWorkoutDto } from 'src/data/dto/workout/create-workout.dto';
import { Workout } from 'src/data/entities/workout.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WorkoutService {
  constructor(
    @InjectRepository(Workout) private readonly workoutRepository: Repository<Workout>
  ) {}


  create(createWorkoutDto: CreateWorkoutDto) {
    const workout = new Workout();
    workout.workout_name = createWorkoutDto.name;
    workout.created_at = new Date();
    workout.description = createWorkoutDto.notes;
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


//   update(id: number, updateWorkoutDto: UpdateWorkoutDto) {
//     const workoutIndex = this.workouts.findIndex(workout => workout.id === id);
//     if (workoutIndex > -1) {
//       this.workouts[workoutIndex] = { ...this.workouts[workoutIndex], ...updateWorkoutDto };
//       return this.workouts[workoutIndex];
//     }
//     return null;
//   }

//   remove(id: number) {
//     const workoutIndex = this.workouts.findIndex(workout => workout.id === id);
//     if (workoutIndex > -1) {
//       const removedWorkout = this.workouts.splice(workoutIndex, 1);
//       return removedWorkout[0];
//     }
//     return null;
//   }

}
