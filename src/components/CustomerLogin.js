import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';

// actual auth function, but no database as of yet
export async function Authenticate(confnum, lname) {
    // replace (APIURLPLACEHOLDER) with the url for database once implemented
    return fetch(`(APIURLPLACEHOLDER)`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ confnum, lname }),
    })
    .then(data => data.json());
}

// temporary authentication until database
export async function mockAuthenticate(confnum, lname) {
  if (confnum === '1' && lname === 'A') {
    return 'fakeToken1A';
  }
  throw new Error('Authentication failed');
}

export function Login(){
    const navigate = useNavigate();
    const [confnum, setConfnum] = useState("");
    const [lname, setLname] = useState("");

    const handleLogin = async () => {
        try {
          const token = await mockAuthenticate(confnum, lname);
          console.log('Login successful');
          alert('Login Successful. Redirecting to Shop.');
          localStorage.setItem('token', token);
          // navigate to location page, will need adjustment as shop pages expanded
          navigate('/location');
        } catch (error) {
          console.error('Login failed');
          alert('Invalid Login. Please Try Again.');
        }
    };

    // basic code for testing (login page), replace with actual page
    return (
        <div>
          <label>
            <p>Guest Confirmation Number:</p>
            <input type="text" value={confnum} onChange={e => setConfnum(e.target.value)} />
          </label>
          <br/>
          <label>
            <p>Guest Last Name:</p>
            <input type="text" value={lname} onChange={e => setLname(e.target.value)} />
          </label>
          <button onClick={handleLogin}>Login</button>
        </div>
      );
};

export default Login;