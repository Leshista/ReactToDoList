import './Backdrop.css'

export default function Backdrop(props:any) {
    return <div className="backdrop" onClick={props.onClick}/>
}