import React, { useState } from 'react';

const AddUserForm = ({ addUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      alert('Please fill in all fields');
      return;
    }

    addUser({ name, email, phone });

 
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden m-4 p-4">
      <label className="block mb-2" htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        placeholder='Enter your Name'
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 p-2 mb-4 w-full rounded"
      />

      <label className="block mb-2" htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        placeholder='Enter your Email address'
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 p-2 mb-4 w-full rounded"
      />

      <label className="block mb-2" htmlFor="phone">Phone:</label>
      <input
        type="number"
        id="phone"
        value={phone}
        placeholder='Enter Your Phone No.(Only in Numbers)'
        onChange={(e) => setPhone(e.target.value)}
        className="border border-gray-300 p-2 mb-4 w-full rounded"
      />

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add User
      </button>
    </form>
  );
};

export default AddUserForm;
