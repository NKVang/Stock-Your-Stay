import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Card, Container, Form, Stack } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


async function mockAuthenticate(username, password) {
  if (username === 'user' && password === 'pass') {
    return 'fakeToken1A';
  }
  throw new Error('Authentication failed');
}

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const usernameInput = (event) => {
    setUsername(event.target.value);
  };

  const passwordInput = (event) => {
    setPassword(event.target.value);
  };

  const navigate = useNavigate();

  const handleLogin = async () => {
      try {
        const token = await mockAuthenticate(username, password);
        console.log('Login successful');
        alert('Login Successful. Redirecting to Shop.');
        localStorage.setItem('token', token);
        navigate('/reservations');
      } catch (error) {
        console.error('Login failed');
        alert('Invalid Login. Please Try Again.');
      }
  };

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
                      <h6> Username </h6>
                      <Form.Control type="text" value= {username} onChange = {usernameInput} placeholder="username" />
                    </Form.Group>

                    <Form.Group>
                      <h6> Password</h6>
                      <Form.Control type="text" value= {password} onChange = {passwordInput} placeholder="password" />
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
