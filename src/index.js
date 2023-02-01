import React,{createElement,useState} from 'react';
import ReactDOM,{createRoot} from 'react-dom/client';
import './index.css';
import { Header } from './header/header.js';
import { Body } from './Body/body.js';
import { Footer } from './Footer/footer.js';
import { Content } from './content/content.js';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

var root=createRoot(document.getElementById("root"));

function Main(){

    const [name,chageState]=useState("aravindh")
    var object={
        name:"aravindh",
        age:20,
        profile:"FrontEndDeveloper"
    }

    const [stateName,changeStateName]=useState("aravindh")

    var clear=()=>{
        console.log("hello")
        obj.name="aravindh";
        console.log(obj)
    }

    const main = () =>{
        console.log("aravindh")
    }

    const obj={
        name:"mathesh",
        age:19,
        profile:"FilmDirector"
    }

    const get=(hello)=>{
        console.log(hello);
    }

    return <div>
        <Header name={name} />
        <button onClick={() => chageState("mahesh")}>chane</button>
        <Body name={object.name} age={object.age} profile={object.profile} getData={get}/>
        <Content name={stateName} age={obj.age} change={changeStateName}/>
        <Footer name={stateName} age={obj.age} change={changeStateName}/>
    </div>
}

root.render(<Main/>)















// var root=createRoot(document.getElementById("root"));

// function Main(){
//     return <div className="container">
//                 <Header/>
//                 <Body/>
//                 <Footer/>
//             </div>
// }

// root.render(<Main />)

// function Header(){
//     return <div className='header'>
//         <Nav/>
//     </div>
// }

// function Nav(){
//     return <div>
//                 <a>one</a>
//                 <a>two</a>
//                 <a>three</a>
//            </div>
// }

// function Body(){
//     return <div className='body'>Body</div>
// }

// function Footer(){
//     return <div className='footer'>Footer</div>
// }






//var heading=createElement("h1",{class:"hello"},"hello everyone to all");



// var text=createElement("div",{className:"parent"},[createElement("h1",{className:"child"},"hello"),
//                                                    createElement("h1",{className:"child"},"everyone"),
//                                                    createElement("h1",{className:"child"},"to"),
//                                                    createElement("h1",{className:"child"},"all")])
// var body=createRoot(document.getElementById("root"));
// body.render(text)

// function clicked(text){
//     console.log(text+"clicked")
// }

// var array=["aravindh","karthick","mathesh"]
// var addition=5+9;
// var text=(
//         <div>
//             <h1>hello</h1>
//             <p>everyone</p>
//             <ul>
//                 <li className="one" style={{color:"red",textAlign:"center",fontSize:"50px"}} >to</li>
                
//             </ul>
//             <div>{array.map((value,index)=>(
//                 <p key={index}>{value}</p>
//             ))}</div>
//             <div>
//                 <h2>{addition}</h2>
//             </div>
//             <button onClick={()=>clicked("hello everyone")}>click</button>
//         </div>
// )

// var body=createRoot(document.getElementById("root"));
// body.render(text)

