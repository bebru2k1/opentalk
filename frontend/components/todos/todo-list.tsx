import {
  HStack,
  VStack,
  Text,
  Flex,
  Badge,
  Stack,
  Divider,
  Container,
  StackDivider,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Todo } from "@/types";

export default function TodoList({ todos }: { todos: Todo[] }) {
  return !todos.length ? (
    <Badge colorScheme="purple" variant="outline" borderRadius="4" p="4" m="5">
      No todos for Today!!
    </Badge>
  ) : (
    <>
      <Container maxW={"container.md"}>
        {todos.map((todo, key) => (
          <Stack key={todo._id} spacing={1}>
            <Text>{todo.name}</Text>
          </Stack>
        ))}
      </Container>
    </>
  );
}
