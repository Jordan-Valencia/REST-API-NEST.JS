import { ApiProperty } from '@nestjs/swagger';
import {IsString, MinLength}from 'class-validator';

export class CreateTaskDto{
    @ApiProperty({
        description: 'Task name',
        example: 'Task 1',
    })
    @IsString()
    @MinLength(1)
    title: string

    @ApiProperty({
        description: 'Task description',
        example: 'This is a task',
    })
    @MinLength(1)
    @IsString()
    description: string
}