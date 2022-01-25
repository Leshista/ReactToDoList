import { FC } from 'react'
import '../componentsStyles/css/Form.css'

const Form: FC = () => {
    return (
        <form className='todo-form'>
            <input type="text" className="todo-form__input" />
            <button className="todo-form__button" type="submit">+</button>
            <div className="todo-form__select">
                <select name="todos" className="todo-form__filter">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form