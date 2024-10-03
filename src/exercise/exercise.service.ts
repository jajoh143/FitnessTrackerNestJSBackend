import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateExerciseDto } from 'src/data/dto/exercise/create-exercise.dto';
import { UpdateExerciseDto } from 'src/data/dto/exercise/update-exercise.dto';
import { Exercise } from 'src/data/entities/exercise.entity';
import { User } from 'src/data/entities/user.entity';
import { Workout } from 'src/data/entities/workout.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExerciseService {
  
   /**
   * Constructor for the Exercise Service
   * @param workoutRepository 
   * @param exerciseRepository
   */
   constructor(
    @InjectRepository(Workout) private readonly workoutRepository: Repository<Workout>,
    @InjectRepository(Exercise) private readonly exerciseRepository: Repository<Exercise>
  ) {}

  /**
   * Create a new exercise
   * @param createExerciseDto
   * @returns the newly created exercose
   */
  create(createExerciseDto: CreateExerciseDto) {
    const newExercise: Exercise = new Exercise();
    newExercise.name = createExerciseDto.name;
    newExercise.description = createExerciseDto.description;
    newExercise.created_at = new Date();
    this.exerciseRepository.save(newExercise);
    return newExercise;
  }

  /**
   * this function is used to get all the user's list
   * @returns promise of array of users
   */
  findAllExercise(): Promise<Exercise[]> {
    return this.exerciseRepository.find({ order: { name: 'ASC' }});
  }

  /**
   * Retrieves the exercise with a matching id
   * @param id exercise id
   * @returns the corresponding exercise if it exists
   */
  findOne(id: number) {
    return this.exerciseRepository.findOneBy({ id });
  }

  /**
   * 
   * @param id
   * @param updateExerciseDto 
   * @returns 
   */
  update(id: number, updateExerciseDto: UpdateExerciseDto) {
    return 1;
  }

  /**
   * this function is used to remove or delete exercise from database.
   * @param id is the type of number, which represent id of user
   * @returns nuber of rows deleted or affected
   */
  removeExercise(id: number): Promise<{ affected?: number }> {
    return this.exerciseRepository.delete(id);
  }
}
