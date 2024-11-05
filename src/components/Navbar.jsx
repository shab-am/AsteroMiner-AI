import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-800">
      {/* Logo on the left */}
      <div className="flex items-center">
        <h1 className="text-white text-2xl font-bold">Asterominer AI</h1>
      </div>

      {/* Menu items on the right */}
      <div className="flex items-center space-x-6">
        <a href="/" className="text-gray-300 hover:text-white">Home</a>
        <a href="/about" className="text-gray-300 hover:text-white">About</a>
        <a href="/services" className="text-gray-300 hover:text-white">Services</a>
        <a href="/contact" className="text-gray-300 hover:text-white">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
