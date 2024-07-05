export interface Todo {
  _id: string;
  name: string;
}
export interface ResponseApp<T> {
  data: T;
}

export interface ResponseTodoList extends ResponseApp<Todo[]> {}

export interface ResponseCreateTodo extends ResponseApp<Todo> {}

export interface CreateTodoDto extends Pick<Todo, "name"> {}
