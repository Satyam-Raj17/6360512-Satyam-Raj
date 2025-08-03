import React from 'react';

const IndianPlayers = () => {
  const team = ['Kohli', 'Rohit', 'Rahul', 'Shami', 'Ashwin', 'Pant', 'Gill', 'Jadeja', 'Bumrah', 'Suryakumar', 'Hardik'];

  const oddPlayers = team.filter((_, index) => index % 2 !== 0);
  const evenPlayers = team.filter((_, index) => index % 2 === 0);

  const T20players = ['Kohli', 'Rohit', 'Suryakumar'];
  const RanjiPlayers = ['Pujara', 'Rahane', 'Shaw'];
  const allPlayers = [...T20players, ...RanjiPlayers];

  return (
    <div>
      <h2>Odd Index Team Players</h2>
      <ul>
        {oddPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Even Index Team Players</h2>
      <ul>
        {evenPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Merged T20 and Ranji Trophy Players</h2>
      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
