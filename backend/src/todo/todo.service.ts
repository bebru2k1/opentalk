import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from './schemas/todo.schema';
import { Model } from 'mongoose';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) {}
  async create(createTodoDto: CreateTodoDto) {
    const { name } = createTodoDto;
    const todo = await new this.todoModel({ name }).save();
    return { data: todo };
  }

  async findAll() {
    const todos = await this.todoModel.find({});
    return { data: todos };
  }
}
