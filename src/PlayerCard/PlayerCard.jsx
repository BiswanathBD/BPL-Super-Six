import React, { useState } from "react";
import { toast } from "react-toastify";

const PlayerCard = ({ player, balance, setBalance, selected, setSelected }) => {
  const [isSelected, setIsSelected] = useState(false);

  const selectedPlayer = (player) => {
    if (balance < player.price) {
      return;
    } else if (selected.length === 6) {
      return;
    }
    setBalance(balance - player.price);
    setIsSelected(true);
    const newSelected = [...selected, player];
    setSelected(newSelected);
    selected.length === 5 && toast.success("🎉 Your Team is Ready 🎉");
  };
  return (
    <div className="bg-white p-4 rounded-2xl hover:scale-103 transition-all duration-300 group ">
      <div className="overflow-hidden rounded-md">
        <img
          src={player.image}
          className="w-full aspect-5/3 object-cover transition-all duration-500 group-hover:scale-110"
        />
      </div>
      <h3 className="text-xl font-bold mt-4">
        <i className="fa-solid fa-user text-2xl text-neutral-400 mr-2"></i>{" "}
        {player.name}
      </h3>
      <div className="py-4 text-neutral-400 flex justify-between items-center border-b-1 border-neutral-200">
        <p>
          <i className="fa-brands fa-square-font-awesome-stroke"></i>{" "}
          {player.country}
        </p>
        <button className="px-2 py-1 bg-neutral-200 text-black rounded-md">
          {player.playing_role}
        </button>
      </div>

      <div className="flex justify-between items-center mt-4 font-semibold text-lg">
        <p>Rating</p>
        <p>
          {player.rating} <i className="fa-solid fa-star text-yellow-500"></i>
        </p>
      </div>
      <div className="flex justify-between mt-4 text-gray-400 font-semibold">
        <p className="text-black">{player.batting_hand}</p>
        <p>{player.bowling_hand}</p>
      </div>

      <div className="flex justify-between items-center mt-4">
        <p className="text-lg">
          $ <span className="font-bold text-blue-600">{player.price}</span>
        </p>
        <button
          onClick={() => selectedPlayer(player)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={
            isSelected || selected.length === 6 || balance < player.price
          }
        >
          {isSelected ? (
            <span>
              <i className="fa-solid fa-check mr-1"></i> Selected
            </span>
          ) : (
            "Choose Player"
          )}
        </button>
      </div>
    </div>
  );
};

export default PlayerCard;
