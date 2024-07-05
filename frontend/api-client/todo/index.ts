import axiosClient from "@/configs/axios-client";
import { CreateTodoDto, ResponseCreateTodo, ResponseTodoList } from "@/types";

const PREFIX_PATH = "/todo";

const getTodoList = async () => {
  return axiosClient
    .get<ResponseTodoList>(PREFIX_PATH)
    .then((response) => response.data);
};

const createTodo = async ({ name }: CreateTodoDto) => {
  return axiosClient
    .post<ResponseCreateTodo>(PREFIX_PATH, { name })
    .then((response) => response.data);
};

export { getTodoList, createTodo };
