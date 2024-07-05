"use client";
import React, { useEffect, useState } from "react";
import { VStack, Text, Container, Stack } from "@chakra-ui/react";
import TodoList from "@/components/todos/todo-list";
import AddTodo from "@/components/todos/add-todo";
import { getTodoList } from "@/api-client";
import { Todo } from "@/types";

export default function Home() {
  const [todos, setTodos] = useState<Todo[] | []>([]);

  useEffect(() => {
    (async () => {
      const response = await getTodoList();
      setTodos(response.data);
    })();
  }, []);

  return (
    <Container maxW={"container.lg"}>
      <Stack spacing={5}>
        <Text fontSize="6xl" fontWeight="extrabold" textAlign={"center"}>
          Todo App
        </Text>
        <AddTodo setTodos={setTodos} />
        <TodoList todos={todos} />
      </Stack>
    </Container>
  );
}
