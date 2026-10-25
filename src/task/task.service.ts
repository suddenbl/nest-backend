import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto.js';
import { UpdateTaskDto } from './dto/update-task.dto.js';

@Injectable()
export class TaskService {
  private tasks = [
    {
      id: 1,
      title: 'Task 1',
      description: 'Description 1',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Description 2',
      isCompleted: true,
    },
  ];

  findAll() {
    return this.tasks;
  }

  findById(id: number) {
    const found = this.tasks.find((t) => t.id === id);

    if (!found) {
      throw new NotFoundException(`Task not found`);
    }

    return found;
  }

  create(dto: CreateTaskDto) {
    const { title, description, priority, tags } = dto;

    const newTask = {
      id: this.tasks.length + 1,
      title,
      description,
      priority,
      tags,
      isCompleted: false,
    };

    this.tasks.push(newTask);

    return this.tasks;
  }

  update(id: number, dto: UpdateTaskDto) {
    const { isCompleted, title } = dto;

    const found = this.findById(id);

    if (title !== undefined) {
      found.title = title;
    }

    if (isCompleted !== undefined) {
      found.isCompleted = isCompleted;
    }

    return found;
  }

  patch(id: number, dto: Partial<UpdateTaskDto>) {
    const found = this.findById(id);

    Object.assign(found, dto);

    return found;
  }

  delete(id: number) {
    const found = this.findById(id);

    this.tasks = this.tasks.filter((task) => task.id !== found.id);

    return this.tasks;
  }
}
