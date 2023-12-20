import React from 'react';
import { MdDelete } from 'react-icons/md';

function todoItem({ todo, deleteTodo, id }) {
  return (
    <div className="flex gap-2 items-center">
      {todo}
      <MdDelete
        className="hover:cursor-pointer"
        onClick={() => {
          deleteTodo(id);
        }}
      />
    </div>
  );
}

export default todoItem;
