import React from "react";

export function Header(props){
    console.log(props)
    return <div className="header">
        <p>{props.name}</p>
        {/* <button onClick={()=>props.change("karthick")}>click to change name</button> */}
    </div>
}

