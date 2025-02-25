import React from 'react'
import Footer from '../Footer/Footer'

const StoreLocator = () => {
  return (
    <>
      <div className="w-full px-0 mt-10">
        {/* Store Locator Banner */}
        <div className="relative w-full h-[400px]">
          <img 
            src="/More/more19.png"
            alt="Store Locator" 
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              console.log('Image failed to load:', e.target.src);
              e.target.src = '/images/placeholder.jpg';
            }}
          />
        </div>

        {/* Store Listings */}
        <div className="max-w-[1200px] mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-12">Find Store</h1>
          
          <div className="grid grid-cols-1 gap-6">
            {/* First Row - 2 cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Store 1 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex gap-6">
                  <div className="w-1/3">
                    <img 
                      src="/More/more20.webp"
                      alt="boAt Store" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="w-2/3">
                    <div className="inline-block bg-red-500 text-white text-xs font-medium px-2 py-1 rounded mb-4">
                      COMPANY STORE
                    </div>
                    <h3 className="text-xl font-bold mb-2">boAt Official Store</h3>
                    <p className="text-sm text-gray-600 mb-4">GROUND FLOOR, SHAKUN COMPLEX, NEAR ICICI BANKGARH ROAD,MEERUT - 250002</p>
                    <div>
                      <div className="font-bold text-gray-900 mb-1">Working Hours</div>
                      <p className="text-sm text-gray-600 mb-4">10:30 AM to 7:00 PM</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                          <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        <span className="text-sm text-gray-600">Support</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                          <path d="M12 15L16 11M16 11H12M16 11V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-sm text-gray-600">Navigate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Store 2 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex gap-6">
                  <div className="w-1/3">
                    <img 
                      src="/More/more20.webp"
                      alt="boAt Store" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="w-2/3">
                    <div className="inline-block bg-red-500 text-white text-xs font-medium px-2 py-1 rounded mb-4">
                      COMPANY STORE
                    </div>
                    <h3 className="text-xl font-bold mb-2">boAt Official Store</h3>
                    <p className="text-sm text-gray-600 mb-4">18, MUNICIPAL MARKET, NEAR SUBHASH CHOWK,ATLAS ROAD,SONIPAT - 131001</p>
                    <div>
                      <div className="font-bold text-gray-900 mb-1">Working Hours</div>
                      <p className="text-sm text-gray-600 mb-4">10:30 AM to 7:00 PM</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                          <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        <span className="text-sm text-gray-600">Support</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                          <path d="M12 15L16 11M16 11H12M16 11V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-sm text-gray-600">Navigate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row - 2 cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Store 3 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex gap-6">
                  <div className="w-1/3">
                    <img 
                      src="/More/more20.webp"
                      alt="boAt Store" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="w-2/3">
                    <div className="inline-block bg-red-500 text-white text-xs font-medium px-2 py-1 rounded mb-4">
                      COMPANY STORE
                    </div>
                    <h3 className="text-xl font-bold mb-2">boAt | Asian Gadgets</h3>
                    <p className="text-sm text-gray-600 mb-4">#5-8-453/A/1, Ground Floor, Chirag Ali Lane, Abids, Hyderabad- 500001, Telangana</p>
                    <div>
                      <div className="font-bold text-gray-900 mb-1">Working Hours</div>
                      <p className="text-sm text-gray-600 mb-4">10:30 AM to 7:00 PM</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                          <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        <span className="text-sm text-gray-600">Support</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                          <path d="M12 15L16 11M16 11H12M16 11V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-sm text-gray-600">Navigate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Store 4 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex gap-6">
                  <div className="w-1/3">
                    <img 
                      src="/More/more20.webp"
                      alt="boAt Store" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="w-2/3">
                    <div className="inline-block bg-red-500 text-white text-xs font-medium px-2 py-1 rounded mb-4">
                      COMPANY STORE
                    </div>
                    <h3 className="text-xl font-bold mb-2">boAt | SGH Tech</h3>
                    <p className="text-sm text-gray-600 mb-4">Penta Menaka Shopping Complex, 40/2908 C3 C5, 1st Floor, Shanmugham Rd, Marine Drive, Ernakulam, Kerala- 682031</p>
                    <div>
                      <div className="font-bold text-gray-900 mb-1">Working Hours</div>
                      <p className="text-sm text-gray-600 mb-4">10:30 AM to 7:00 PM</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                          <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        <span className="text-sm text-gray-600">Support</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                          <path d="M12 15L16 11M16 11H12M16 11V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-sm text-gray-600">Navigate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Row - 1 centered card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2 md:w-1/2 md:mx-auto">
                {/* Store 5 */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex gap-6">
                    <div className="w-1/3">
                      <img 
                        src="/More/more20.webp"
                        alt="boAt Store" 
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="w-2/3">
                      <div className="inline-block bg-red-500 text-white text-xs font-medium px-2 py-1 rounded mb-4">
                        COMPANY STORE
                      </div>
                      <h3 className="text-xl font-bold mb-2">boAt | Gizmo Zone</h3>
                      <p className="text-sm text-gray-600 mb-4">New 85-D Old, 37, 1st Main Rd, Chennai, Tamil Nadu- 600020</p>
                      <div>
                        <div className="font-bold text-gray-900 mb-1">Working Hours</div>
                        <p className="text-sm text-gray-600 mb-4">10:30 AM to 7:00 PM</p>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                            <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                          <span className="text-sm text-gray-600">Support</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                            <path d="M12 15L16 11M16 11H12M16 11V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span className="text-sm text-gray-600">Navigate</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default StoreLocator 