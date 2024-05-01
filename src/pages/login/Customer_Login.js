import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Card, Container, Form, Stack } from 'react-bootstrap';
import './Customer_Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


async function authenticate(email, lastName) {

  const checkDatabase = await fetch('http://localHost:8000/accounts/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      lastName: lastName,
      email: email,
    })
  })
  
  if (checkDatabase.ok){
    const data = await checkDatabase.json();
    let matchedAccount = data.matchedAccount;
    localStorage.setItem('personID', matchedAccount.personID);
    return data.grantAccess;
  }

  
  /*This is where we would use the Minthouse API and make a post call to https://mint-mw-acc.ireckonu.com/api/person/lookup
  and use the user inputed email and lastName values to search for a match.
  .
  .
  .*/

  /*Then if a succesful response is returned, then we would take the information from the json file and set them equal to their respective variables 
  This is just dummy data assuming that we found a match and took the info and stored it into these variables.*/
  //Note we would replace the "true" value inside the if statement with something to check if a successful response was returned.
  if (false){
    let mintHouseEmail = 'MintHouse@gmail.com';
    let mintHouseLastName = 'House';
    let mintHouseFirstName = "Mint";
    let mintHousePersonID = '999';
    localStorage.setItem('personID', mintHousePersonID);

    const addAccountToDatabase = await fetch('http://localHost:8000/accounts/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        personID: mintHousePersonID,
        firstName: mintHouseFirstName,
        lastName: mintHouseLastName,
        email: mintHouseEmail
      })
    });
  
    await addAccountToDatabase.json();
    return true;
}

throw new Error('Authentication failed');

}

function App() {

  //initilize local storage values
  localStorage.clear();
  localStorage.setItem('loggedIn', false);

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
        const loggedIn = await authenticate(email, lastname);
        console.log('Login successful');
        alert('Login Successful. Redirecting to Reservation Selection.');
        localStorage.setItem('loggedIn', loggedIn);
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
