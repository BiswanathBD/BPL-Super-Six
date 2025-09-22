import React, { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";

const Players = ({
  playersPromise,
  balance,
  setBalance,
  selected,
  setSelected,
  className,
  isSelected,
  setIsSelected,
}) => {
  const playersData = use(playersPromise);

  return (
    <div
      className={`${className} container mx-auto px-4 md:px-10 lg:px-20 grid gap-10 md:grid-cols-2 xl:grid-cols-3 py-6`}
    >
      {playersData.map((player) => (
        <PlayerCard
          key={player.id}
          player={player}
          balance={balance}
          setBalance={setBalance}
          selected={selected}
          setSelected={setSelected}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
        />
      ))}
    </div>
  );
};

export default Players;
