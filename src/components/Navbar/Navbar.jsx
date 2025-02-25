import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import CategoryDropdown from './CategoryDropdown';
import MoreDropdown from './MoreDropdown';
import SearchDropdown from './SearchDropdown';
import AuthModal from '../auth/AuthModal';
import CartDrawer from '../cart/CartDrawer';

const searchPlaceholders = [
  'Search "Smartwatches"',
  'Search "Earphones"',
  'Search "Speakers"',
  'Search "Wireless Earbuds"',
  'Search "Headphones"'
];

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const { user, logout, isAuthModalOpen, setIsAuthModalOpen } = useAuth();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const loginDropdownRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((current) => 
        current === searchPlaceholders.length - 1 ? 0 : current + 1
      );
    }, 2000);

    const handleClickOutside = (event) => {
      if (loginDropdownRef.current && !loginDropdownRef.current.contains(event.target)) {
        setShowLoginDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      clearInterval(interval);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLoginClick = () => {
    console.log('Login clicked');
    setShowLoginDropdown(false);
    setIsAuthModalOpen(true);
  };

  return (
    <div className="w-full">
      {/* Top Banner */}
      <div className="w-full bg-[#F6F6F6] py-2 text-center text-sm">
        <span>Get 5% off on First Order | Code : WELCOME5 </span>
        <Link to="/shop" className="text-[#0066CC] hover:underline">
          Shop Now!
        </Link>
      </div>

      {/* Main Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex items-center justify-between h-[68px]">
            {/* Left Section */}
            <div className="flex items-center gap-x-12">
              {/* Logo */}
              <Link to="/">
                <img 
                  src="https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small.svg" 
                  alt="boAt" 
                  className="h-[28px]"
                />
              </Link>

              {/* Navigation Links */}
              <div className="flex items-center gap-x-10 h-[68px]">
                <div className="relative group h-full">
                  <button className="flex items-center text-[15px] font-medium text-[#1A2024] h-full relative after:absolute after:w-full after:h-0.5 after:bg-[#ff0000] after:bottom-0 after:left-0 after:origin-center after:scale-x-0 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                    Categories
                    <svg className="ml-1.5 w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="hidden group-hover:block absolute top-full left-0">
                    <CategoryDropdown />
                  </div>
                </div>

                <Link to="/boatpersonalization" className="text-[15px] font-medium text-[#1A2024] relative after:absolute after:w-full after:h-0.5 after:bg-[#ff0000] after:bottom-0 after:left-0 after:origin-center after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                  boAt Personalisation
                </Link>

                <Link to="/corporate" className="text-[15px] font-medium text-[#1A2024] relative after:absolute after:w-full after:h-0.5 after:bg-[#ff0000] after:bottom-0 after:left-0 after:origin-center after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                  Corporate Orders
                </Link>

                <Link to="/gifting" className="text-[15px] font-medium text-[#1A2024] relative after:absolute after:w-full after:h-0.5 after:bg-[#ff0000] after:bottom-0 after:left-0 after:origin-center after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                  Gifting Store
                </Link>

                <div className="relative group h-full">
                  <button className="flex items-center text-[15px] font-medium text-[#1A2024] h-full relative after:absolute after:w-full after:h-0.5 after:bg-[#ff0000] after:bottom-0 after:left-0 after:origin-center after:scale-x-0 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                    More
                    <svg className="ml-1.5 w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="hidden group-hover:block">
                    <MoreDropdown />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-x-6">
              {/* Search */}
              <div className="relative">
                <div className="flex items-center bg-[#F6F6F6] rounded-full px-4 py-2.5">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder={searchPlaceholders[placeholderIndex]}
                    className="w-[200px] ml-2 bg-transparent text-sm focus:outline-none text-[#1A2024] placeholder-gray-400 transition-all duration-300"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                  />
                </div>
                <SearchDropdown isVisible={isSearchFocused} />
              </div>

              {/* Account */}
              <div className="relative" ref={loginDropdownRef}>
                <button 
                  onClick={() => setShowLoginDropdown(!showLoginDropdown)}
                  className="flex items-center justify-center"
                >
                  <svg className="w-[22px] h-[22px] text-[#1A2024]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </button>

                {showLoginDropdown && (
                  <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg z-50">
                    {!user ? (
                      // Not logged in state
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-4">
                          <h2 className="text-lg">Hi boAthead!</h2>
                          <button 
                            onClick={() => setShowLoginDropdown(false)}
                            className="text-gray-500 hover:text-gray-700"
                          >
                            ×
                          </button>
                        </div>
                        <button
                          onClick={handleLoginClick}
                          className="w-full bg-black text-white py-2 rounded"
                        >
                          Login
                        </button>
                      </div>
                    ) : (
                      // Logged in state
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-4">
                          <h2 className="text-lg">Hi {user.phoneNumber}!</h2>
                          <button 
                            onClick={() => setShowLoginDropdown(false)}
                            className="text-gray-500 hover:text-gray-700"
                          >
                            ×
                          </button>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Link 
                            to="/orders"
                            className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded"
                            onClick={() => setShowLoginDropdown(false)}
                          >
                            Manage Your Order
                          </Link>
                          <Link 
                            to="/account"
                            className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded"
                            onClick={() => setShowLoginDropdown(false)}
                          >
                            Account
                          </Link>
                          <button
                            onClick={() => {
                              logout();
                              setShowLoginDropdown(false);
                            }}
                            className="w-full bg-black text-white py-2 rounded mt-2"
                          >
                            Logout
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Cart */}
              <button onClick={() => setIsCartOpen(true)}>
                <svg className="w-[22px] h-[22px] text-[#1A2024]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </div>
  );
};

export default Navbar;