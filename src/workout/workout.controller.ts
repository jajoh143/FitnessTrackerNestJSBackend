import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { WorkoutService } from './workout.service';
import { CreateWorkoutDto } from 'src/data/dto/workout/create-workout.dto';
import { UpdateWorkoutDto } from 'src/data/dto/workout/update-workout.dto';

@Controller('workout')
export class WorkoutController {
  constructor(private readonly workoutService: WorkoutService) {}

  @Post()
  create(@Body() createWorkoutDto: CreateWorkoutDto) {
    return this.workoutService.create(createWorkoutDto);
  }

  @Get()
  findAll() {
    return this.workoutService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workoutService.findOne(+id);
  }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateWorkoutDto: UpdateWorkoutDto) {
  //   return this.workoutService.update(+id, updateWorkoutDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.workoutService.remove(+id);
  // }
}
