import React from "react";

type Props = {
  updatedData: object;
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addMessage: () => void;
  btn: React.RefObject<HTMLButtonElement>;
};

const Input: React.FC<Props> = ({
  todo,
  setTodo,
  addMessage,
  updatedData,
}) => {
  return (
    <>
      <input
        value={todo}
        type="text"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addMessage}>
        {updatedData ? "Update" : "Add"}
      </button>
    </>
  );
};

export default Input;
