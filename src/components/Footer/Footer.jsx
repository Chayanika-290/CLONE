import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#edf0f5] py-16">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-20 gap-y-8 mb-12">
          {/* Email Subscription Section */}
          <div>
            <img 
              src="/Navbar/logo.png" 
              alt="boAt" 
              className="w-32 mb-6" 
            />
            <h3 className="text-[22px] font-medium text-gray-800 mb-4">
              Subscribe to our email alerts!
            </h3>
            <div className="flex">
              <input 
                type="email" 
                placeholder="devichaya999@gmail.com" 
                className="flex-1 px-4 py-3 bg-white rounded-l outline-none text-sm"
              />
              <button 
                className="px-4 py-3 bg-white rounded-r border-l border-gray-200"
                aria-label="Subscribe"
              >
                <span className="text-xl">→</span>
              </button>
            </div>
          </div>

          {/* Shop Section */}
          <div>
            <h3 className="text-base font-semibold text-gray-800 mb-4">Shop</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-[15px] text-gray-600 hover:text-gray-800">True Wireless Earbuds</Link></li>
              <li><Link to="/" className="text-[15px] text-gray-600 hover:text-gray-800">Wireless Headphones</Link></li>
              <li><Link to="/" className="text-[15px] text-gray-600 hover:text-gray-800">Wired Headphones</Link></li>
              <li><Link to="/" className="text-[15px] text-gray-600 hover:text-gray-800">Wireless Speakers</Link></li>
              <li><Link to="/" className="text-[15px] text-gray-600 hover:text-gray-800">Home Audio</Link></li>
              <li><Link to="/" className="text-[15px] text-gray-600 hover:text-gray-800">Mobile Accessories</Link></li>
              <li><Link to="/" className="text-[15px] text-gray-600 hover:text-gray-800">Smart Watches</Link></li>
              <li><Link to="/" className="text-[15px] text-gray-600 hover:text-gray-800">TRebel</Link></li>
              <li><Link to="/" className="text-[15px] text-gray-600 hover:text-gray-800">Misfit Trimmers</Link></li>
              <li><Link to="/" className="text-[15px] text-gray-600 hover:text-gray-800">Refer & Earn</Link></li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-base font-semibold text-gray-800 mb-4">Help</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-[15px] text-gray-600 hover:text-gray-800">Track Your Order</Link></li>
              <li><Link to="/" className="text-[15px] text-gray-600 hover:text-gray-800">Warranty & Support</Link></li>
              <li><Link to="/" className="text-[15px] text-gray-600 hover:text-gray-800">Return Policy</Link></li>
              <li><Link to="/" className="text-[15px] text-gray-600 hover:text-gray-800">Service Centers</Link></li>
              <li><Link to="/" className="text-[15px] text-gray-600 hover:text-gray-800">Bulk Orders</Link></li>
              <li><Link to="/" className="text-[15px] text-gray-600 hover:text-gray-800">Why Buy Direct</Link></li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-base font-semibold text-gray-800 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-[15px] text-gray-600 hover:text-gray-800">About boAt</Link></li>
              <li><Link to="/" className="text-[15px] text-gray-600 hover:text-gray-800">News</Link></li>
              <li><Link to="/" className="text-[15px] text-gray-600 hover:text-gray-800">Read Our Blog</Link></li>
              <li><Link to="/" className="text-[15px] text-gray-600 hover:text-gray-800">Careers</Link></li>
              <li><Link to="/" className="text-[15px] text-gray-600 hover:text-gray-800">Security</Link></li>
              <li><Link to="/" className="text-[15px] text-gray-600 hover:text-gray-800">Investor Relations</Link></li>
              <li><Link to="/" className="text-[15px] text-gray-600 hover:text-gray-800">Social Responsibility</Link></li>
              <li><Link to="/" className="text-[15px] text-gray-600 hover:text-gray-800">Warranty Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Mega Menu Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-gray-200 pt-12">
          {/* First Column */}
          <div className="space-y-12">
            {/* True Wireless Earbuds */}
            <div>
              <h3 className="text-lg font-medium mb-4">True Wireless Earbuds</h3>
              <div className="space-y-4">
                <h4 className="text-sm text-gray-600">Shop by Features</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>Noise Cancellation Earbuds</li>
                  <li>Gaming Earbuds</li>
                  <li>Large Playback Earbuds</li>
                </ul>
                <h4 className="text-sm text-gray-600">Shop by Price</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>Earbuds Under 1000</li>
                  <li>Earbuds Under 2000</li>
                  <li>Earbuds Under 3000</li>
                  <li>Earbuds Under 4000</li>
                  <li>Earbuds Under 5000</li>
                  <li>Earbuds Above 5000</li>
                </ul>
              </div>
            </div>

            {/* Trimmers */}
            <div>
              <h3 className="text-lg font-medium mb-4">Trimmers</h3>
              <div className="space-y-4">
                <h4 className="text-sm text-gray-600">Shop by Features</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>Trimmer for Men</li>
                  <li>Trimmers with Grooming Kit for Men</li>
                </ul>
                <h4 className="text-sm text-gray-600">Shop by Price</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>Trimmer Under 1000</li>
                  <li>Trimmer Under 2000</li>
                </ul>
              </div>
            </div>

            {/* Limited Editions */}
            <div>
              <h3 className="text-lg font-medium mb-4">Limited Editions</h3>
              <div className="space-y-4">
                <h4 className="text-sm text-gray-600">Shop by Features</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>Limited Editions Headphones</li>
                  <li>Limited Editions Smart Watch</li>
                  <li>Limited Editions Earphone</li>
                  <li>Limited Edition Speakers</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div className="space-y-12">
            {/* Wireless Speakers */}
            <div>
              <h3 className="text-lg font-medium mb-4">Wireless Speakers</h3>
              <div className="space-y-4">
                <h4 className="text-sm text-gray-600">Shop by Features</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>Portable Speakers</li>
                  <li>Long Playback Speakers</li>
                  <li>Waterproof Bluetooth Speaker</li>
                  <li>Party Speaker with RGB Lights</li>
                  <li>Speaker with Karaoke Mic</li>
                </ul>
                <h4 className="text-sm text-gray-600">Shop by Price</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>Bluetooth Speakers Under 1000</li>
                  <li>Bluetooth Speakers Under 2000</li>
                  <li>Bluetooth Speakers Under 3000</li>
                  <li>Bluetooth Speakers Under 5000</li>
                  <li>Bluetooth Speakers Under 8000</li>
                </ul>
              </div>
            </div>

            {/* Chargers */}
            <div>
              <h3 className="text-lg font-medium mb-4">Chargers</h3>
              <div className="space-y-4">
                <h4 className="text-sm text-gray-600">Shop by Features</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>Wireless Charger</li>
                  <li>Type C Charger</li>
                  <li>Fast Charger</li>
                  <li>USB Charger</li>
                  <li>Micro USB Charger</li>
                  <li>Type C Adapter</li>
                </ul>
              </div>
            </div>

            {/* Cables */}
            <div>
              <h3 className="text-lg font-medium mb-4">Cables</h3>
              <div className="space-y-4">
                <h4 className="text-sm text-gray-600">Shop by Features</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>Micro USB Cable</li>
                  <li>C Type Cable</li>
                  <li>Lightning Cable</li>
                  <li>USB C to C Cable</li>
                  <li>Smart Watch Charging Cable</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Third Column */}
          <div className="space-y-12">
            {/* Wireless Earphones */}
            <div>
              <h3 className="text-lg font-medium mb-4">Wireless Earphones</h3>
              <div className="space-y-4">
                <h4 className="text-sm text-gray-600">Shop by Features</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>Noise Cancellation Earphone</li>
                  <li>Long Playback Earphone</li>
                  <li>Clear Calling Earphone</li>
                </ul>
                <h4 className="text-sm text-gray-600">Shop by Price</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>Neckbands Under 1000</li>
                  <li>Neckbands Under 2000</li>
                  <li>Neckbands Under 3000</li>
                </ul>
              </div>
            </div>

            {/* Car Accessories */}
            <div>
              <h3 className="text-lg font-medium mb-4">Car Accessories</h3>
              <div className="space-y-4">
                <h4 className="text-sm text-gray-600">Shop by Features</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>Car Charger</li>
                  <li>Aux Cable for Car</li>
                </ul>
                <h4 className="text-sm text-gray-600">Shop by Price</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>Car Charger Under 500</li>
                  <li>Car Charger Above 500</li>
                </ul>
              </div>
            </div>

            {/* Powerbanks */}
            <div>
              <h3 className="text-lg font-medium mb-4">Powerbanks</h3>
              <div className="space-y-4">
                <h4 className="text-sm text-gray-600">Shop by Features</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>Power Bank 10000mah</li>
                  <li>Power Bank 20000mah</li>
                  <li>Mobile Power Bank</li>
                  <li>Fast Charging Power Bank</li>
                  <li>Power Bank for iPhone</li>
                </ul>
                <h4 className="text-sm text-gray-600">Shop by Price</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>Power Bank Under 1000</li>
                  <li>Power Bank Under 1500</li>
                  <li>Power Bank Under 2000</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Fourth Column */}
          <div className="space-y-12">
            {/* Wireless Headphones */}
            <div>
              <h3 className="text-lg font-medium mb-4">Wireless Headphones</h3>
              <div className="space-y-4">
                <h4 className="text-sm text-gray-600">Shop by Features</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>Noise Cancelling Headphones</li>
                  <li>Wireless Gaming Headphone</li>
                  <li>Long Playback Headphones</li>
                </ul>
                <h4 className="text-sm text-gray-600">Shop by Price</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>Wireless Headphones Under 1000</li>
                  <li>Wireless Headphones Under 2000</li>
                  <li>Wireless Headphones Under 3000</li>
                  <li>Wireless Headphones Under 4000</li>
                  <li>Wireless Headphones Above 4000</li>
                </ul>
              </div>
            </div>

            {/* TRebel Range */}
            <div>
              <h3 className="text-lg font-medium mb-4">TRebel Range</h3>
              <div className="space-y-4">
                <h4 className="text-sm text-gray-600">Shop by Features</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>Smartwatch for Women</li>
                  <li>Earbuds for Women</li>
                  <li>Neckband for Women</li>
                  <li>Earphone for Women</li>
                  <li>Headphone for Women</li>
                </ul>
              </div>
            </div>

            {/* Gaming Headphones */}
            <div>
              <h3 className="text-lg font-medium mb-4">Gaming Headphones</h3>
              <div className="space-y-4">
                <h4 className="text-sm text-gray-600">Shop by Features</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>Gaming Headphones with Mic</li>
                  <li>Low Latency Headphone</li>
                  <li>RGB Light Headphones</li>
                  <li>Headphone for PC Gaming</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media and Footer Info */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          {/* Social Media Links */}
          <div className="text-center mb-6">
            <div className="flex justify-center items-center gap-4 text-gray-800">
              <span className="text-base font-medium">Let's get social</span>
              <div className="flex items-center gap-6">
                <a href="#" className="hover:text-gray-900">
                  <img src="/Footer/facebook.svg" alt="Facebook" className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-gray-900">
                  <img src="/Footer/twitter.svg" alt="Twitter" className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-gray-900">
                  <img src="/Footer/instagram.svg" alt="Instagram" className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-gray-900">
                  <img src="/Footer/youtube.svg" alt="YouTube" className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-gray-900">
                  <img src="/Footer/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Privacy Links */}
          <div className="flex justify-center items-center gap-2 mb-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Privacy Policy
            </Link>
            <span className="text-gray-400">•</span>
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Terms & Conditions
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-500 space-y-4">
            <p>© 2025 Imagine Marketing Limited. All Rights Reserved.</p>
            <p className="max-w-3xl mx-auto text-sm">
              For queries contact us: Manager, Imagine Marketing Limited Unit no. 204 & 205, 2nd floor, D-wing & E-wing,
              Corporate Avenue, Andheri Ghatkopar Link Road, Mumbai, Maharashtra-400093, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
