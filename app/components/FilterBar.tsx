'use client'
import { useState } from 'react';
import { FaChevronDown, FaStar } from 'react-icons/fa';

//bu kısım görsellik için eklendi
const FilterBar: React.FC = () => {
  return (
    <div className="flex justify-between items-center py-4">
      {/* Filtre butonları */}
      <div className="flex space-x-2 font-medium">
        <button className="px-3 py-2 bg-white border rounded-md hover:bg-gray-100">Times</button>
        <button className="px-3 py-2 bg-white border rounded-md hover:bg-gray-100">Stops</button>
        <button className="px-3 py-2 bg-white border rounded-md hover:bg-gray-100">Airlines</button>
        <button className="px-3 py-2 bg-white border rounded-md hover:bg-gray-100">Airports</button>
        <button className="flex items-center px-3 py-1 text-purple-700  hover:bg-gray-100">
          Edit Search <FaChevronDown className="ml-1" />
        </button>
      </div>

    </div>
  );
};

export default FilterBar;
