import React from 'react';

import UserManagementApp from './UserManagementApp';

const App = () => {
  return (
    <div >
      <h1 className='pt-6 pb-6 mb-9 font-bold text-5xl flex justify-center items-center rounded-lg shadow-lg hover:shadow-xl'>User Management Application</h1>
      
      <UserManagementApp />
    </div>
  );
};

export default App;