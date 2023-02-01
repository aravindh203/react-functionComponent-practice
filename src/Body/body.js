export function Body(prop){
    
    return <div className="body">
        {prop.age}
        <button onClick={() => prop.getData("hello")}>onclick</button>
    </div>
}