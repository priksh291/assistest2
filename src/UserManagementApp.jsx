

import React, { useState } from 'react';
import AddUserForm from './AddUserForm';
import UserCard from './UserCard';
import EditUserForm from './EditUserForm';

const UserManagementApp = () => {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [showUserCards, setShowUserCards] = useState(false);

  const addUser = (user) => {
  
    user.id = Date.now().toString();
    setUsers([...users, user]);
    setShowUserCards(true);
  };

  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const editUser = (userId) => {
    setEditingUserId(userId);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
    setEditingUserId(null);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row">
      <div className="md:w-1/2 md:mr-4">
        <h2 className="text-2xl font-bold mb-4">Add User</h2>
        <AddUserForm addUser={addUser} />
      </div>

      <div className="md:w-1/2">
        {users.length === 0 && showUserCards && (
          <p className="text-2xl font-bold text-right mt-2">No users registered</p>
        )}

        {users.length > 0 && (
          <>
            <h2 className="text-2xl font-bold mb-4">Users List</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {users.map((user, index) => (
                <UserCard
                  key={user.id}
                  user={user}
                  deleteUser={deleteUser}
                  editUser={editUser}
                  index={index}
                  show={showUserCards}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {editingUserId && (
        <EditUserForm
          user={users.find((user) => user.id === editingUserId)}
          updateUser={updateUser}
        />
      )}
    </div>
  );
};

export default UserManagementApp;




