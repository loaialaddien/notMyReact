import {React,render} from './react';
import {hooks} from './react/hooks';


export const SS = (props)=>{
    const [ll,setLL] =  hooks.useState("ll");
    const btnClick = ()=>{
        setLL("i'm doost")
    }
    const {ss,fdfsdfsdf} = props;
    return (
        <div>
            <h1>{ll}</h1>
            <h1>{ss}</h1>
            <h1>{fdfsdfsdf}</h1>
            <button onclick = {()=>{btnClick()}}> doos me </button>
        </div>
    )
}