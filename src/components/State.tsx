import { useState } from 'react';

const State = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Dylan"
    }
  })

  const handleClick = () => {
    setGame({
      ...game,
      player:{name: 'Jake'}
    });
  }

  return (
    <>
      <div>
        <h1>State function</h1>
        <p>Player Name: {game.player.name}</p>
        <button onClick={handleClick}>Change Name</button>
      </div>
    </>
  );
}

export default State;