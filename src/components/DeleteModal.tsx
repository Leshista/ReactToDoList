import './DeleteModal.css'


export default function DeleteModal(props: any) {

    const confirmHandler = () =>{
        props.onClick()
    }

    const cancelHandler = () => {
        props.onClick()
    }
    return (

        <div className="modal">
            <div className="delete-modal">
                <p className="delete-modal__title">Are you sure?</p>
                <div className="delete-modal__buttons">
                    <button className="delete-modal__cancel" onClick={cancelHandler}>Cancel</button>
                    <button className="delete-modal__confirm" onClick={confirmHandler}>Confirm</button>
                </div>
            </div>
        </div>
    ) 
}