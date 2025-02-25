import React from 'react';
import { useAuth } from '../../context/AuthContext';

const CartDrawer = ({ isOpen, onClose }) => {
  const { user, setIsAuthModalOpen } = useAuth();

  const handleLoginClick = () => {
    onClose();
    setIsAuthModalOpen(true);
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Cart Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-[400px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-medium">Your Cart</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart Content */}
        <div className="flex flex-col h-[calc(100vh-80px)]">
          {!user ? (
            <div className="flex-1 flex flex-col items-center justify-center p-6">
              <img 
                src="Navbar/cart.png"
                alt="Empty Cart"
                className="w-32 mb-6"
              />
              <p className="text-lg font-medium mb-2">Login to view your cart</p>
              <button
                onClick={handleLoginClick}
                className="mt-4 bg-black text-white px-8 py-2 rounded hover:bg-gray-800"
              >
                Login
              </button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-4">
                <div className="text-center py-8">
                  <img 
                    src="https://www.boat-lifestyle.com/cdn/shop/files/Empty_Cart_600x600.png?v=1634116996"
                    alt="Empty Cart"
                    className="w-32 mx-auto mb-4"
                  />
                  <p className="text-lg font-medium mb-2">Your cart is empty!</p>
                  <p className="text-gray-600 mb-4">Add some items to it now.</p>
                  <button
                    onClick={onClose}
                    className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
                  >
                    Start Shopping
                  </button>
                </div>
              </div>

              <div className="p-4 border-t bg-white">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="text-xl font-medium">₹0.00</span>
                </div>
                <button
                  className="w-full bg-black text-white py-3 rounded hover:bg-gray-800"
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer; 