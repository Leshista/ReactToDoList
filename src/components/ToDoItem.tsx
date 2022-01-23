export default function ToDoItem() {

    const deleteHolder = () =>{
        alert('hello')
    }

    return (
        <div className="to-do-item">
        <input type="checkbox" id="" className="to-do-item__checkbox"/>
        <input type="text" id="" className="to-do-item__text" />
        <button className="to-do-item__delete-button">Change</button>
        <button className="to-do-item__delete-button" onClick={deleteHolder}>Delete</button>
    </div>
    )
}