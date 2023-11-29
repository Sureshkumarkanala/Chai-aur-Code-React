import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/TodoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className=" flex" style={{ color: "white" }}>
              {todo.text}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                style={{ marginLeft: "20px" }}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
