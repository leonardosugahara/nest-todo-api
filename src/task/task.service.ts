import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async findAll(): Promise<Task[]> {
    return await this.taskRepository.find();
  }

  async create(task: Task): Promise<Task> {
    return await this.taskRepository.save(task);
  }

  async update(id: number, updatedTask: Task): Promise<Task> {
    const existingTask = await this.taskRepository.findOneBy({ id: id });

    if (!existingTask) {
      throw new Error('Tarefa não encontrada');
    }

    existingTask.title = updatedTask.title;
    existingTask.description = updatedTask.description;

    return await this.taskRepository.save(existingTask);
  }

  async remove(id: number): Promise<void> {
    const existingTask = await this.taskRepository.findOneBy({ id: id });

    if (!existingTask) {
      throw new Error('Tarefa não encontrada');
    }

    await this.taskRepository.remove(existingTask);
  }
}
