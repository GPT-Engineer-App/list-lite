import { useState } from "react";
import { Container, VStack, HStack, Input, Button, Text, Checkbox, IconButton } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <HStack width="100%">
          <Input
            placeholder="Add a new task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button onClick={addTodo} colorScheme="teal">
            Add
          </Button>
        </HStack>
        <VStack spacing={2} width="100%">
          {todos.map((todo, index) => (
            <HStack key={index} width="100%" justifyContent="space-between">
              <Checkbox
                isChecked={todo.completed}
                onChange={() => toggleTodo(index)}
              >
                <Text as={todo.completed ? "del" : ""}>{todo.text}</Text>
              </Checkbox>
              <IconButton
                aria-label="Delete task"
                icon={<FaTrash />}
                onClick={() => deleteTodo(index)}
                colorScheme="red"
              />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;