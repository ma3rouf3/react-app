import { Style } from "radium";
import React from "react";
import './Person.css'
// import Radium from 'radium'
import styled   from 'styled-components'
const StyledDiv =  styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width : 500px ){
        width : 450px;
    } 
`;
const person = (prpos) => {

    // const style={
    //     '@media (min-width :500px)' :{
    //         width : '450px'
    //     }
    // };
    return(
        // <div className="Person" style={style}>
       <StyledDiv>
       <div>
        <p onClick={prpos.click}>I'm a  {prpos.name} and I am {prpos.age} years old  !</p>
        <p>{prpos.children}</p>
        <input type="text" onChange={prpos.changed}  />
        </div>
        </StyledDiv>
        )
};

export default  person;