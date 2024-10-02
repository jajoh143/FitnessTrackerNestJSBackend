import { Injectable } from '@nestjs/common';
import { CreateExerciseDto } from 'src/data/dto/exercise/create-exercise.dto';
import { UpdateExerciseDto } from 'src/data/dto/exercise/update-exercise.dto';

@Injectable()
export class ExerciseService {
  private exercises = [];

  create(createExerciseDto: CreateExerciseDto) {
    const newExercise = { id: Date.now(), ...createExerciseDto };
    this.exercises.push(newExercise);
    return newExercise;
  }

  findAll() {
    return this.exercises;
  }

  findOne(id: number) {
    return this.exercises.find(exercise => exercise.id === id);
  }

  update(id: number, updateExerciseDto: UpdateExerciseDto) {
    const exerciseIndex = this.exercises.findIndex(exercise => exercise.id === id);
    if (exerciseIndex > -1) {
      this.exercises[exerciseIndex] = { ...this.exercises[exerciseIndex], ...updateExerciseDto };
      return this.exercises[exerciseIndex];
    }
    return null;
  }

  remove(id: number) {
    const exerciseIndex = this.exercises.findIndex(exercise => exercise.id === id);
    if (exerciseIndex > -1) {
      const removedExercise = this.exercises.splice(exerciseIndex, 1);
      return removedExercise[0];
    }
    return null;
  }
}
