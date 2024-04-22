import React from 'react';

type Pokemon = {
  id: number;
  name: string;
  imageUrl: string;
  types: string[]; // Array of type names
};
const FilterPokemon: React.FC<{ onFilter: (type: string) => void }> = ({ onFilter }) => {
  const handleFilter = (type: string) => {
    onFilter(type);
  };
  return (
    <div className="mt-4 flex justify-center space-x-4">
      <button onClick={() => handleFilter('fire')} className="bg-red-500 text-white px-4 py-2 rounded-lg">
        Fire
      </button>
      <button onClick={() => handleFilter('water')} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Water
      </button>
      <button onClick={() => handleFilter('grass')} className="bg-green-500 text-white px-4 py-2 rounded-lg">
        Grass
      </button>
      <button onClick={() => handleFilter('fighting')} className="bg-orange-500 text-white px-4 py-2 rounded-lg">
      Fighting
      </button>
      {/* Add more filter buttons as needed */}
    </div>
  );
};

export default FilterPokemon;
