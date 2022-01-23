import ToDoItem from "./ToDoItem";

export default function ToDoBlock() {
    return (
    <section className="to-do-block">
        <div className="to-do-block__items">
        <button className="to-do-block__add-new">Add new</button>
        <button className="to-do-block__reset">Reset</button>
        </div>
        <ToDoItem/>
        <ToDoItem/>
        <ToDoItem/>
        <ToDoItem/>
        <ToDoItem/>
    </section>
    ) 
}