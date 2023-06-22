import React, { useState } from 'react';

const EditUserForm = ({ user, updateUser }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!name || !email || !phone) {
      alert('Please fill in all fields');
      return;
    }

    updateUser({ ...user, name, email, phone });
    alert("Entry Update Successfull")
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden m-4 p-4">
      <label className="block mb-2" htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 p-2 mb-4 w-full rounded"
      />

      <label className="block mb-2" htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 p-2 mb-4 w-full rounded"
      />

      <label className="block mb-2" htmlFor="phone">Phone:</label>
      <input
        type="text"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border border-gray-300 p-2 mb-4 w-full rounded"
      />

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Update
      </button>
    </form>
  );
};

export default EditUserForm;
