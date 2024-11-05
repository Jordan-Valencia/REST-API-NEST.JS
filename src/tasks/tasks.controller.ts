import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { PipeUser } from './pipe/pipe.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller('tasks')
export class TasksController {
  tasksService: TasksService;
  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  @Get()
  getTasks(@Query() query: object) {
    console.log(query);
    return this.tasksService.getTasks();
  }

  @Get('hola')
  @UseGuards(AuthGuard)
  greet(@Query(PipeUser) query: { name: string; age: number }) {
    return `Hello ${query.name} tienes ${query.age} años careverga`;
  }
  @Post()
  createTask(@Body() task: CreateTaskDto) {
    console.log(task);
    return this.tasksService.createTask(task);
  }
  @Put()
  updateTask() {
    return this.tasksService.updateTask();
  }
  @Patch()
  patchTask() {
    return this.tasksService.patchTask();
  }
  @Delete()
  deleteTask() {
    return this.tasksService.deleteTask();
  }
}
