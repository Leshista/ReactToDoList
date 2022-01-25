import { FC, ReactElement } from "react";
import '../componentsStyles/css/Todo.css'
import TodoProps from "../interfaces/TodoProps";

const Todo: FC<TodoProps> = (text): ReactElement => {
    return (
    <div className="todo">
        <input type="checkbox" className="todo__checkbox"/>
            <p className="todo__text">{text.text}</p>
            <button className="todo__delete">X</button>
        </div>
    )
};

export default Todo;