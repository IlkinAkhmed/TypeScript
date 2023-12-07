import React from "react";
import { todos } from "../type";
type Props = {
  todosArr: todos[];
  deleteMessage: (id: number) => void;
  editMessage: (text: string, todo: object) => void;
};

const Message: React.FC<Props> = ({ todosArr, deleteMessage, editMessage }) => {
  return (
    <>
      <ul>
        {todosArr.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.id} + {todo.text}{" "}
              <button onClick={() => deleteMessage(todo.id)}>remove</button>{" "}
              <button onClick={() => editMessage(todo.text, todo)}>edit</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Message;
