import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { CreateExerciseDto } from 'src/data/dto/exercise/create-exercise.dto';
import { UpdateExerciseDto } from 'src/data/dto/exercise/update-exercise.dto';

@Controller('exercises')
export class ExerciseController {
  constructor(private readonly exerciseService: ExerciseService) {}

  @Post()
  create(@Body() createExerciseDto: CreateExerciseDto) {
    return this.exerciseService.create(createExerciseDto);
  }

  @Get()
  findAll() {
    return this.exerciseService.findAllExercise();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exerciseService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateExerciseDto: UpdateExerciseDto) {
    return this.exerciseService.update(+id, updateExerciseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exerciseService.removeExercise(+id);
  }
}
