import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Card, Form, Container, Stack} from 'react-bootstrap'
import { dark, light } from '@mui/material/styles/createPalette';


function App() {
  return (
    <div className='App'> 
    <header className = "App-header">
    <div class = "center">
    <Container > 
      <Card style= {{ height: 450, width: 400 }}>
        <Card.Body className = "center" > 
          <Form> 
          <Stack  gap = {3}> 
          <h1> Login </h1>

                <Form.Group> 
                  <h6> Last Name </h6> 
                  <Form.Control type="text" placeholder= "Last name here"/>
                </Form.Group>

                <Form.Group> 
                  <h6> Confirmation Number</h6> 
                  <Form.Control type="number" placeholder= "xx-xxx-xx"/>
                </Form.Group>
                {/*has issue in which user is able to increment/decrement using buttons 
                that appear when entering number */}

                <Button variant= "primary">Shop Now</Button>

            </Stack> 
           </Form>
        </Card.Body>
      </Card> 
      </Container>
      </div> 
      </header>
    </div> //App end 
  );
}

export default App;
