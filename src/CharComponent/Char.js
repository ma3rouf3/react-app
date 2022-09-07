import React from "react";

const char = (props) =>{
        const style = {
                display : 'inline-block' ,
                padding: '16px',
                margin : '16px',
                border : '1px solid black' ,
                textAlign : 'center'
            };
    return (
        <div style={style}>
            <p onClick={props.clicked} >   {props.charcter}         </p>
        </div>
    )   ;

}

export default char;