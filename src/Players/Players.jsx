import React, { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";

const Players = ({ playersPromise }) => {
  const playersData = use(playersPromise);

  return (
    <div className="container mx-auto px-4 md:px-10 lg:px-20 grid gap-10 sm:grid-cols-2 md:grid-cols-3 pt-10">
      {playersData.map((player) => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </div>
  );
};

export default Players;
