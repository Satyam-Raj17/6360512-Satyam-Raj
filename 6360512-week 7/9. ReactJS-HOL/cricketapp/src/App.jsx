import React from 'react';
import ListofPlayers from './components/ListofPlayers';
import IndianPlayers from './components/IndianPlayers';

function App() {
  const flag = true; // Set to false to show IndianPlayers

  return (
    <div style={{ padding: '20px' }}>
      <h1>Cricket App</h1>
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
