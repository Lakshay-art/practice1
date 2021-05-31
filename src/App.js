import React from "react";
 
import "./style.css";
import {CardGroup,Card} from 'react-bootstrap';

 class App extends React.Component {
  constructor(){super();
  this.state={down:false}}
  render(){
  return (
    <div>
      <Box 
      name={'Lakshay Gupta'} 
      rollno={'24'}/>
    </div>
  );
}}
 function Box({name,rollno}){
   return(
     <CardGroup>
     <Card.Title className="display-4">{name}</Card.Title>
     <Card.Text>{rollno}</Card.Text>
     </CardGroup>
    
   );

 }
export default App;