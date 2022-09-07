import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import { Component } from 'react';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput'
import InputField from './InputField/InputField';
import Char from './CharComponent/Char';
import char from './CharComponent/Char';
// import Radium ,{styleRoot }from 'radium';
// import { StyleRoot } from 'radium';

import styled from 'styled-components';

// const StyledButtom = styled.button`
// background-color : ${props=> props.alt ? 'red' :'green'};
// color : wihte;
// font: inherit;
// border: 1px solid white;
// padding: 8px;
// cursor : pointer ;
 
// &:hover {
//   background-color : ${props=> props.alt ? 'salmon' :'lightgreen'}; 
//   color : black ;
// }`;

class App  extends Component {

  state = {
    persons :[
      { id : '1' ,name : 'ma3rouf' , age : 26  },
      { id : '2' ,name : 'alaa' , age : 28  } ,
      { id : '3' ,name : 'ayat' , age :24  }

    ] ,
    otherState :'some other value ' ,
    showPesons : true,
    text : ''
  };

  // state = {
  //   userName : "MM"
  // };

   deletePersonHandler = (personIndex)=>{
    // const persons = this.state.persons
    const persons = [...this.state.persons];
    persons.splice(personIndex ,1);
    this.setState({persons: persons});
  }
 
  NameChangedHandler =(event , id)=>{
  
    const personIndex = this.state.persons.findIndex( p=>{
      return p.id===id
    } );

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name= event.target.value;
    const persons= [...this.state.persons];
    persons[personIndex]= person

    this.setState({persons: persons})
  }


  // changeNameHandler = (event) =>{
  //   this.setState({
  //     persons :[
  //       { name : 'marouf' , age : 25  },
  //       { name : event.target.value  , age : 28  } ,
  //       { name : 'ayat' , age :23  }
  
  //     ]
  //   })
  // }

  userNameChangeHandler = (event)=>{
      this.setState({
        userName: event.target.value 
      })
  }

  togglepersonHandler =() =>{
    const doesShow= this.state.showPesons;
    this.setState({showPesons : !doesShow})
  }
  inputchangeHandler = (event) =>{
    this.setState({text : event.target.value });  
   }

  deleteCharHandler =(charindex) =>{
      const deleteChar = this.state.text.split('');
      deleteChar.splice(charindex ,1 );
      const update = deleteChar.join(''); 
      this.setState({text : update}); 

  } 

  render(){
  //  const style = {
  //    backgroundColor : 'green',
  //   color : 'wihte',
  //   font: 'inherit',
  //   border: '1px solid white',
  //   padding: '16px',
  //   cursor : 'pointer' ,
     
  //   ':hover' :{
  //     backgroundColor : 'lightgreen' ,
  //     color : 'black' 
  //   }
   
  //  };

   let persons = null;
   if(this.state.showPesons){
   persons= (
     <div>

       { this.state.persons.map( (person,index) => {
         return  <Person 
         click={()=> this.deletePersonHandler(index)}
         name={person.name}
         age={person.age} 
         key = {person.id} 
         changed={(event )=> this.NameChangedHandler(event , person.id)} />
       } )} 
     </div>
   );
  //  style.backgroundColor = 'red';
  //  style[':hover']={
  //   backgroundColor : 'salmon',
  //   color :'black'
  //  };

      }
  const charList = this.state.text.split('').map((ch ,index) => {
    return ( <Char 
      clicked={()=> this.deleteCharHandler(index)}
      charcter={ch}
      key={index} ></Char>)
  })
 
  const classes = [];
  if(this.state.persons.length<=2 ){
    classes.push('red') ;
  }
  if (this.state.persons.length <=1 ){
    classes.push('bold');
  }
  return (
    // <StyleRoot>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <div>
        <h1>hi am react App  </h1>
        <p className={classes.join(' ')}> this is realy working !</p>

         {/* <StyledButtom   */}
        <button className="button"
            alt = {this.state.showPesons} 
            onClick={this.togglepersonHandler}>
            toggle person
          {/* </StyledButtom> */}
          </button>
        {persons}  
       
        </div>

        <div>
        <input type="text"  
            onChange={this.inputchangeHandler}
            value={this.state.text} ></input>
          {/* <p>{this.state.text}</p> */}
        <InputField inputLength={this.state.text.length}></InputField>
          {charList}

        {/* <Char >{this.state.text}</Char> */}
        </div>

      </header>
    </div>
    // </StyleRoot>
  );
 }
}

export default App;


        {/* <button
        onClick={() => this.switchNameHandler( "mmm")}>Switch Name</button> */}

 // switchNameHandler = (newName) =>{
  //   // console.log("Was clicked  !");
  //   this.setState({
  //     persons :[
  //       { name : newName , age : 25  },
  //       { name : 'alaa' , age : 28  } ,
  //       { name : 'ayat' , age :23  }
  
  //     ]
  //   })
  // }
  

          {/* <Person name={this.state.persons[0].name}   age ={this.state.persons[0].age}  ></Person>
      
       <Person  click={this.switchNameHandler.bind(this , "aaa")}
        name={this.state.persons[1].name} 
        age ={this.state.persons[1].age}
        changed={this.changeNameHandler}
        ></Person>

       <Person  name={this.state.persons[2].name}  age = {this.state.persons[2].age}>hi brothers</Person> */}
  
        // <Person name={this.state.persons[0].name}   age ={this.state.persons[0].age}  ></Person>
      
        // <Person  click={this.switchNameHandler.bind(this , "aaa")}
        //   name={this.state.persons[1].name} 
        //   age ={this.state.persons[1].age}
        //   changed={this.changeNameHandler}
        //   ></Person>

        // <Person  name={this.state.persons[2].name}  age = {this.state.persons[2].age}>hi brothers</Person>
    
        {/* <UserInput changed={this.userNameChangeHandler}
             currentName={this.state.userName} ></UserInput>

        <UserOutput userName= {this.state.userName}></UserOutput>
        <UserOutput userName= {this.state.userName}  />
        <UserOutput userName= "m3"/> */}