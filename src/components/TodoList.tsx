import { FC, ReactElement } from 'react';
import '../componentsStyles/css/TodoList.css'
import ToDoListProps from '../interfaces/ToDoListProps';
import Todo from './Todo';

const TodoList: FC<ToDoListProps> = ({todos}): ReactElement => {
    return (
        <div className='todo-list'>
            {todos.map(todo => todo.text != '' ?
                <Todo
                    text={todo.text}
                    id={todo.id}
                    completed={todo.completed}
                    key={todos.indexOf(todo)} />
                :
                null)}
        </div>
    )
};

export default TodoList;