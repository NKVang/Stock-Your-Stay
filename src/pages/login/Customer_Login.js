import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Card, Container, Form, Stack } from 'react-bootstrap';
import './Customer_Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


let accountEmail
let accountLastName
let accountFirstName
let accountPersonID


async function mockAuthenticate(email, lastName) {

  /*
  This is where we would use the Minthouse API and make a post call to https://mint-mw-acc.ireckonu.com/api/person/lookup
  and use the email and lastName values provided in the request body.


  */

  //Right now these are just dummy values, but ideally we would want to set these values to the values that were returned in the response body of the POST call
  accountEmail = 'Test@gmail.com'
  accountLastName = 'Parker'
  accountFirstName = 'Peter'
  accountPersonID = '123'

  if (email.toLowerCase() === accountEmail.toLowerCase() && lastName.toLowerCase() === accountLastName.toLowerCase()) {
    return 'fakeToken1A';
  }
  throw new Error('Authentication failed');
}

function App() {

  const [email, setEmail] = useState('');
  const [lastname, setLastName] = useState('');

  const emailInput = (event) => {
    setEmail(event.target.value);
  };

  const lastNameInput = (event) => {
    setLastName(event.target.value);
  };

  const navigate = useNavigate();

  const handleLogin = async () => {
      try {
        const token = await mockAuthenticate(email, lastname);
        console.log('Login successful');
        alert('Login Successful. Redirecting to Shop.');
        localStorage.setItem('token', token);
        navigate('/reservations');
      } catch (error) {
        console.error('Login failed');
        alert('Invalid Login. Please Try Again.');
      }
  };

  const enterKeyPressed = (event) =>{
    if (event.key === 'Enter'){
      event.preventDefault();
      handleLogin();
    }
  }


  return (
    <div className='App'>
      <header className="App-header">
        <div class="center">
          <Container >
            <Card style={{ height: 450, width: 400 }}>
              <Card.Body className="center" >
                <Form>
                  <Stack gap={3}>
                    <h1> Login </h1>

                    <Form.Group>
                      <h6> Email </h6>
                      <Form.Control type="text" value= {email} onChange = {emailInput} onKeyDown = {enterKeyPressed} placeholder="email" />
                    </Form.Group>

                    <Form.Group>
                      <h6> Lastname</h6>
                      <Form.Control type="text" value= {lastname} onChange = {lastNameInput} onKeyDown = {enterKeyPressed} placeholder="lastname" />
                    </Form.Group>

                    <Button variant="primary" onClick = {handleLogin}>Login</Button>

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
