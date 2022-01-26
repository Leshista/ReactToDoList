import { FC, ReactElement } from "react";
import '../componentsStyles/css/Todo.css'
import TodoProps from "../interfaces/TodoProps";

const Todo: FC<TodoProps> = ({ text, id, completed, todo, todos, setTodos }): ReactElement => {

    const deleteHandler = () => {
        setTodos(todos.filter(e=> e.id !== todo.id))
    }
    
    const checkHandler = () => {
        setTodos(todos.map(e => e.id === todo.id ? { ...e, completed: !e.completed } : e))
    }

    return (
    <div className="todo" id= {String(id)}>
            <input type="checkbox" className={'todo__checkbox'} onChange={checkHandler}/>
            <p className={`todo__text${completed ? ' checked' : ''}` }>{text}</p>
            <button className="todo__delete" onClick={deleteHandler}>X</button>
        </div>
    )
};

export default Todo;