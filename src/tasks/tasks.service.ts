import { Injectable } from '@nestjs/common';


@Injectable()
export class TasksService {
  private tasks= [];
  getTasks(){
    return this.tasks;
  }
  createTask(task: object) {
    this.tasks.push(task)
    return task;
  }
  deleteTask() {
    return 'Task deleted';
  }
  updateTask() {
    return 'Task updated';
  }
  patchTask() {
    return 'Task patched';
  }
}
