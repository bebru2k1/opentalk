"use client";
import { createTodo } from "@/api-client";
import { Todo } from "@/types";
import { Stack, Input, Button, useToast } from "@chakra-ui/react";
import { create } from "domain";
import React, { useState } from "react";

interface AddTodoProps {
  setTodos: React.Dispatch<React.SetStateAction<[] | Todo[]>>;
}
function AddTodo({ setTodos }: AddTodoProps) {
  const [value, setValue] = useState("");

  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();
      if (value === "") return;
      const todo = {
        name: value,
      };
      const response = await createTodo(todo);
      setTodos((todos) => [...todos, response.data]);
      setValue("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={5} direction={"row"}>
        <Input
          value={value}
          variant="outline"
          type="text"
          placeholder="Enter your todo..."
          onChange={(e) => setValue(e.target.value)}
        />
        <Button colorScheme="teal" type="submit">
          Add
        </Button>
      </Stack>
    </form>
  );
}

export default AddTodo;
