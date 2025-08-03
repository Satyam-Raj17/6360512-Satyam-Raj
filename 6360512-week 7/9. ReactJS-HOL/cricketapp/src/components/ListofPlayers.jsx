import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat Kohli', score: 98 },
    { name: 'Rohit Sharma', score: 76 },
    { name: 'KL Rahul', score: 45 },
    { name: 'Shubman Gill', score: 65 },
    { name: 'Suryakumar Yadav', score: 80 },
    { name: 'Hardik Pandya', score: 59 },
    { name: 'Ravindra Jadeja', score: 72 },
    { name: 'Jasprit Bumrah', score: 50 },
    { name: 'Mohammed Shami', score: 40 },
    { name: 'R Ashwin', score: 77 },
    { name: 'Rishabh Pant', score: 88 }
  ];

  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - Score: {player.score}</li>
        ))}
      </ul>

      <h3>Players with Score Below 70</h3>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>{player.name} - Score: {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
