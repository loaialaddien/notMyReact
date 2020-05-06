import {React,render} from './react';
import {hooks} from './react/hooks';
import {SS} from './module1'
export const App = ()=>{
    const [name,setName, nameIndex] = hooks.useState("myName")
    const [ss,setSS, ssIndex] = hooks.useState("myName");
    const [fsdfs,set] = hooks.useState({})
    const btnClick = ()=>{
        setName("kk")
    }
    hooks.useEffect(()=>{
        console.log("dsfsdfsdfsd");
    },[nameIndex]);
    
    return(
    <div>
        <a><h1>{name}</h1></a>
        <SS ss="lfsdfsdfdsf" fdfsdfsdf="erererwrwerWE"/>
        <button onclick={()=>btnClick()}> click</button>
        <h1>fsdfsdfsd</h1>
        <p>fsdfdsfsdfsdfsdfsdf</p>
    </div>
)

};

export const appReRender = ()=>{
    render(<App/>,document.getElementById("app"));
}

render(<App/>,document.getElementById("app"));
