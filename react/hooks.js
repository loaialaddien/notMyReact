import {render,React} from './index';
import {appReRender} from '../index.jsx'
export const hooks = (()=> {
    const useEffectFns = {}
     const states = [];
     let moduleIndex = 0;
     const reRender = () => {
         moduleIndex = 0;
         const ap = document.getElementById('app').firstElementChild.remove();;
         appReRender();
     }
     const useEffect = (fn,dependencies)=>{
         dependencies.forEach(e=>{
            useEffectFns[e] = useEffectFns[e] ? useEffectFns[e].push(fn):[fn];
         })
     }
     const useState = (initialState)=>{
         const thisIndex = moduleIndex;
         moduleIndex += 1;
        states[thisIndex] = states[thisIndex] || initialState;
        const setState = (newState)=>{
            states[thisIndex] = newState;
            useEffectFns[thisIndex].forEach(fn=>fn())
            reRender();
        }
        return [states[thisIndex],setState, thisIndex];
     }
     return {
         useState,useEffect,
     }
})();

