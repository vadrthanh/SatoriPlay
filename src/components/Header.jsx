// src/components/Header.jsx
import React from 'react';
import logo from '../assets/logo2.png'; // Adjust the path if necessary

function Header() {
  return (
    <header className="flex items-center space-x-4 my-8">
      <img src={logo} alt="Satori Play Logo" className="w-20 h-20" />
      <div className="text-black">
        <h1 className="text-4xl font-heading">Satori Play Whitepaper</h1>
        <p className="italic text-lg mt-2">Unlocking Japanese Language Learning with Blockchain Rewards</p>
        <p className="text-sm mt-1">Version 1.0 | Date: November 2024</p>
      </div>
    </header>
  );
}

export default Header;
