import React from 'react';

function ShoppingItem({ item, onToggle, onDelete }) {
  return (
    <li className="flex items-center justify-between bg-gray-50 p-2 rounded border">
      <div
        className={`flex-1 cursor-pointer ${item.bought ? 'line-through text-gray-400' : ''}`}
        onClick={() => onToggle(item.id)}
      >
        {item.name}
      </div>
      <button
        onClick={() => onDelete(item.id)}
        className="ml-2 text-red-500 hover:text-red-700"
        title="Delete"
      >
        
      </button>
    </li>
  );
}

export default ShoppingItem;
