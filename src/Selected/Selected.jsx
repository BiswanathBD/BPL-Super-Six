import React from "react";

const Selected = ({
  className,
  selected,
  setSelected,
  balance,
  setBalance,
}) => { 
  const handleRemove = (player) => {
    const newSelected = selected.filter((select) => select.id !== player.id);
    setSelected(newSelected);
    setBalance(balance + player.price);
  };

  return (
    <div
      className={`${className} container mx-auto px-4 md:px-10 lg:px-20 py-6`}
    >
      <div className="bg-white p-10 rounded-4xl grid gap-4">
        {selected.length === 0 && (
          <div className="text-center text-2xl text-neutral-500">
            <h2>No Players Added</h2>
          </div>
        )}
        {selected.map((player) => (
          <div
            key={player.id}
            className="flex justify-between items-center bg-neutral-100 p-2 rounded-2xl"
          >
            <div className="flex gap-4">
              <img
                src={player.image}
                alt=""
                className="w-20 aspect-square object-cover rounded-lg"
              />
              <div className="grid items-center">
                <h3 className="text-2xl font-semibold">{player.name}</h3>
                <p className="text-neutral-500">
                  <span className="font-semibold">Price:</span> ${player.price}
                </p>
              </div>
            </div>
            <p
              onClick={() => handleRemove(player)}
              className="text-2xl mr-4 text-red-500"
            >
              <i class="fa-regular fa-trash-can"></i>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Selected;
