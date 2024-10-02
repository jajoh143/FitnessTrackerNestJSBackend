import {
    IsAlphanumeric,
    IsNotEmpty,
    MinLength,
  } from 'class-validator';

export class LoginUserDto {
    @IsNotEmpty()
    @MinLength(3, { message: 'Username must have atleast 3 characters.' })
    @IsAlphanumeric(null, {
      message: 'Username does not allow other than alpha numeric chars.',
    })
    username: string;
  
    @IsNotEmpty()
    password_hash: string;
}