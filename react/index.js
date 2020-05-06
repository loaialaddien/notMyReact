
export const React = {
    createElement : (tag,props,...children)=>{
        if(typeof tag === "function"){
          return  tag(props)
        }
        return ({tag,props:{...props,children}});

    },
}
export const render = (element,container)=>{

    if(["string","number"].includes(typeof element)){
        container.appendChild(document.createTextNode(String(element)));
        return;
    }
    const domElement = document.createElement(element.tag);
    if(element.props){''

        Object.keys(element.props).filter(e=>e !== "children").forEach(key=>domElement[key] = element.props[key]);
    }
    const {children} = element.props;
    if(children){
        children.forEach(child=>render(child,domElement));
    }
    container.appendChild(domElement);

}


