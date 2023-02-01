export function Footer(promps){
    return <div className="footer">{promps.name}
        <button onClick={()=> promps.clear()}>print</button>
    </div>
}