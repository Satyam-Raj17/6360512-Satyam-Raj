import { useState } from 'react';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  let page;
  if (isLoggedIn) {
    page = <UserPage handleLogout={handleLogout} />;
  } else {
    page = <GuestPage handleLogin={handleLogin} />;
  }

  return (
    <div className="App">
      <h1>Ticket Booking App</h1>
      {page}
    </div>
  );
}

function GuestPage({ handleLogin }) {
  return (
    <div>
      <h2>Welcome Guest!</h2>
      <p>Flight Details:</p>
      <ul>
        <li>Flight A - 10:00 AM</li>
        <li>Flight B - 3:00 PM</li>
        <li>Flight C - 7:30 PM</li>
      </ul>
      <button onClick={handleLogin}>Login to Book</button>
    </div>
  );
}

function UserPage({ handleLogout }) {
  return (
    <div>
      <h2>Welcome User!</h2>
      <p>You can now book your ticket.</p>
      <button>Book Ticket</button>
      <br /><br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default App;
