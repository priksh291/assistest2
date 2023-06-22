

import React, { useEffect, useState } from 'react';

const UserCard = ({ user, deleteUser, editUser, index, show }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setAnimate(true);
      }, index * 100);
    }
  }, [index, show]);

  const handleDelete = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this user?');
    if (confirmDelete) {
      deleteUser(user.id);
    }
  };

  const handleEdit = () => {
    editUser(user.id);
  };

  return (
    <div
      className={`max-w-md w-60 bg-white shadow-md rounded-lg overflow-hidden m-4 transition-all duration-500 transform ${
        animate ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{user.name}</h3>
        <p className="text-gray-600 mb-2">Email: {user.email}</p>
        <p className="text-gray-600 mb-4">Phone: {user.phone}</p>
        <div className="flex justify-end">
          <button
            className="mr-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded focus:outline-none focus:shadow-outline"
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;


