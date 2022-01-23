import './DeleteModal.css'

export default function DeleteModal(props:any) {
    return (
        <div className="modal">
            <div className="delete-modal">
                <p className="delete-modal__title">Are you sure?</p>
                <div className="delete-modal__buttons">
                    <button className="delete-modal__cancel" onClick={props.onClick}>Cancel</button>
                    <button className="delete-modal__confirm" onClick={props.onClick}>Confirm</button>
                </div>
            </div>
        </div>
    ) 
}