import React, { useRef, useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";
import Input from "./Components/input";
import Message from "./Components/message";
import { todos } from "./type";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todosArr, setTodos] = useState<todos[]>([]);
  const [count, setCount] = useState<number>(0);
  const [updatedData, setUpdatedData] = useState<object | null>(null);


  const addMessage = () => {
    if (updatedData) {
      const index = todosArr.findIndex((todo) => todo.id === updatedData.id);
      todosArr[index].text = todo;
      setTodos([...todosArr]);
      setUpdatedData(null);
      setTodo("");

      return;
    } else if (todo) {
      setTodos([...todosArr, { text: todo, id: todosArr.length + 1 }]);
      setTodo("");
    }
  };
  const deleteMessage = (id: number) => {
    setTodos(todosArr.filter((todo) => todo.id !== id));
  };
  const editMessage = (text: string, data: object) => {
    setTodo(text);
    setUpdatedData(data);
  };

  return (
    <>
      <Counter count={count} setCount={setCount} />
      <Input
        addMessage={addMessage}
        updatedData={updatedData}
        todo={todo}
        setTodo={setTodo}
      />
      <Message
        editMessage={editMessage}
        deleteMessage={deleteMessage}
        todosArr={todosArr}
      />
    </>
  );
};

export default App;
