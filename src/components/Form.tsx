import { ChangeEvent, MouseEvent, FC, ReactElement } from 'react';
import '../componentsStyles/css/Form.css';
import FormProps from '../interfaces/FormProps';

const Form: FC<FormProps> = ({inputText, setInputText, todos, setTodos, setFilter}): ReactElement => {
    const inputTextHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e: MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        const currentId = todos.length
        setTodos([
            ...todos, {text:inputText, completed:false, id: currentId}
        ]);
        setInputText('');
    };
    const filterHandler = (e: ChangeEvent<HTMLSelectElement>): void => {
        setFilter(e.target.value)
    }

    return (
        <form className='todo-form'>
            <input type="text" value={inputText} className="todo-form__input" onChange={inputTextHandler} />
            <button className="todo-form__button" type="submit" onClick={submitTodoHandler}>+</button>
            <div className="todo-form__select">
                <select name="todos" className="todo-form__filter" onChange={filterHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
};

export default Form;