

export default function Button(props:any){

return (<>
<button className={props.type}   type="button"> {props.type==="one" ? <i className="material-symbols-outlined">work</i> : <i className="material-symbols-outlined">thumb_up</i>} 
{props.text} </button>

</>)
}