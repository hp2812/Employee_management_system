import React from 'react';

const Header = (props) => {
  
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
    // window.location.reload();
  };

  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between p-4 w-full">
      {/* Greeting Text */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-medium text-center sm:text-left">
        Hello <br />
        <span className="text-2xl sm:text-3xl md:text-4xl font-semibold">
           👋
        </span>
      </h1>

      {/* Logout Button */}
      <button
        onClick={logOutUser}
        className="bg-red-600 text-sm sm:text-base font-medium text-white px-4 sm:px-5 py-2 rounded-sm mt-4 sm:mt-0"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
