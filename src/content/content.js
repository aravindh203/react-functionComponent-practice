export function Content(props){
    return <div className="content">{props.name}
        <button onClick={() => props.change("mathesh")}>click</button>
    </div>
}