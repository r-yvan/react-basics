import React from "react";

const Game = ({ game, setPlayerName }) => {
  return (
    <div>
      <p>
        {game.id} and {game.player.name}
      </p>
      <button onClick={setPlayerName}>Change Player Name</button>
    </div>
  );
};

export default Game;
