import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
  import { UserService } from './user.service';
  import { CreateUserDto } from '../data/dto/user/create-user.dto';
import { UpdateUserDto } from 'src/data/dto/user/update-user.dto';
import { LoginUserDto } from 'src/data/dto/user/login-user.dto';
  //import { UpdateUserDto } from './dto/update-user.dto';
  
  /**
   * whatever the string pass in controller decorator it will be appended to
   * API URL. to call any API from this controller you need to add prefix which is
   * passed in controller decorator.
   * in our case our base URL is http://localhost:3000/user
   */
  @Controller('user')
  export class UserController {
    constructor(private readonly userService: UserService) {}
  
    /**
     * Post decorator represents method of request as we have used post decorator the method
     * of this API will be post.
     * so the API URL to create User will be
     * POST http://localhost:3000/user
     */
    @Post()
    create(@Body() createUserDto: CreateUserDto) {
      return this.userService.createUser(createUserDto);
    }
  
    /**
     * we have used get decorator to get all the user's list
     * so the API URL will be
     * GET http://localhost:3000/user
     */
    @Get()
    findAll() {
      return this.userService.findAllUser();
    }
  
    /**
     * we have used get decorator with id param to get id from request
     * so the API URL will be
     * GET http://localhost:3000/user/:id
     */
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.userService.viewUser(+id);
    }

    @Post('/login')
    loginUser(@Body() loginUserDto: LoginUserDto) {
      return this.userService.loginUser(loginUserDto);
    }
  
    /**
     * we have used patch decorator with id param to get id from request
     * so the API URL will be
     * PATCH http://localhost:3000/user/:id
     */
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
      return this.userService.updateUser(+id, updateUserDto);
    }
  
    /**
     * we have used Delete decorator with id param to get id from request
     * so the API URL will be
     * DELETE http://localhost:3000/user/:id
     */
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.userService.removeUser(+id);
    }
  }