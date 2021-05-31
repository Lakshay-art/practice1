import React from "react";
 
import "./style.css";
import {CardGroup,Card} from 'react-bootstrap';

 class App extends React.Component {
  constructor(){super();
  this.state={down:false}}
  render(){
  return (
    <div className="card-columns" style={{backgroundColor:"white"}}>
      <Box 
      name={'Lakshay Gupta'} 
      rollno={'24'}/>
      <Box 
      name={'Lakshay Gupta'} 
      rollno={'24'}/>
    </div>
  );
}}
 function Box({name,rollno}){
   return(
     <CardGroup className="m-5 d-block">
     <Card  style={{borderRadius:"45px"}}>
     <Card.Body className="m-2 border-5 shadow" id="body" style={{  backgroundColor:"white",boxShadow:"5px"}}>
     <Card.Title id="title" className="display-4">{name}</Card.Title>
     <Card.Text id="text">{rollno}</Card.Text>
     </Card.Body>
     </Card>
     </CardGroup>
    
   );

 }
export default App;