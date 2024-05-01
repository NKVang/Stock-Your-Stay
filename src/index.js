import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-m1kubyxvghmec6y2.us.auth0.com"
    clientId="xt8wNJ5FZQjN2fof6t43Mm1UUos8k4Ay"
    authorizationParams={{
      redirect_uri: "http://localhost:3000/employee"
    }}
  >
      <App />
  </Auth0Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();