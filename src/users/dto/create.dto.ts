import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString, Max } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'Name of user',
    example: 'Juan Pérez',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'email of the user',
    example: 'juan.perez@example.com',
  })
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'password of the user',
    example: 'password123',
  })
  @IsString()
  @IsNotEmpty()
  password: string;

}
