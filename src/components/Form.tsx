import { ChangeEvent, FC, ReactElement } from 'react'
import '../componentsStyles/css/Form.css'
import FormProps from '../interfaces/FormProps'

const Form: FC<FormProps> = ({setInputText}): ReactElement => {
    const inputTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value)
    }

    return (
        <form className='todo-form'>
            <input type="text" className="todo-form__input" onChange={inputTextHandler}/>
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