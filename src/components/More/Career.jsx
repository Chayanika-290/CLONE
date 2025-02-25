import React, { useState } from 'react'
import Footer from '../Footer/Footer'
import { crewData } from '../../data/productsMore'
import { Link } from 'react-router-dom'

const Career = () => {
  const [startIndex, setStartIndex] = useState(0);
  const cardsToShow = 5;

  const handlePrevious = () => {
    setStartIndex((prev) => Math.max(0, prev - cardsToShow));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(crewData.length - cardsToShow, prev + cardsToShow));
  };

  const handleSubmitResume = () => {
    window.location.href = "mailto:careers@boat-lifestyle.com?subject=Job Application";
  };

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/company/boat-lifestyle', '_blank');
  };

  return (
    <>
      <div className="w-full px-0 mt-10">
        {/* Career Banner */}
        <div className="relative w-full">
          <img 
            src="/More/more2.webp"
            alt="Career at boAt" 
            className="w-full h-full object-cover"
            onError={(e) => {
              console.log('Image failed to load:', e.target.src);
              e.target.src = '/images/placeholder.jpg';
            }}
          />
        </div>
        
        {/* Submit Resume Button */}
        <div className="flex justify-center mt-10 mb-10">
          <button
            onClick={handleSubmitResume}
            className="bg-black text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Submit Your Resume
          </button>
        </div>

        {/* Origin Story Section */}
        <div className="max-w-[1200px] mx-auto px-4 py-16 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="px-4">
              <img 
                src="/More/more3.webp"
                alt="boAt Founders" 
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6">
              <h2 className="text-5xl font-bold">
                The Origin
                <br />
                <span className="text-red-600">Story</span>
              </h2>
              <p className="text-lg text-gray-700">
                In 2014, <span className="font-semibold">Aman Gupta</span> and <span className="font-semibold">Sameer Mehta</span> entered a world of unsailed waters to birth <span className="font-semibold">fashionable, affordable and quality audio products</span> and accessories for India's evolving youth. The passion and grit of <span className="font-semibold">young millennials and Gen-Z</span> asked for products that could compliment their hustle and empower them in their journey. And that's exactly why we're here.
              </p>
            </div>
          </div>
        </div>

        {/* Community Section */}
        <div className="relative w-full mt-10">
          <img 
            src="/More/more4.png"
            alt="boAt Community" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* For Our People Section */}
        <div className="max-w-[1200px] mx-auto px-4 py-16 mt-10 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-6">
              <h2 className="text-5xl font-bold">
                For Our
                <br />
                <span className="text-red-600">People</span>
              </h2>
              <p className="text-lg text-gray-700">
                We thrive on the creative energies of <span className="font-semibold">young Indians</span>.
                At boAt, we're as passionate about building a truly
                <span className="font-semibold"> diverse</span>, truly inclusive workplace as creating <span className="font-semibold">India's
                most loved products</span>. And yes, having fun in the midst
                is mandatory.
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="px-4">
              <img 
                src="/More/more5.webp"
                alt="boAt Team" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* boAt Crew Section */}
        <div className="max-w-[1440px] mx-auto px-4 py-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">boAt Crew</h2>
            <div className="flex gap-4">
              <button 
                onClick={handlePrevious}
                disabled={startIndex === 0}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ←
              </button>
              <button 
                onClick={handleNext}
                disabled={startIndex >= crewData.length - cardsToShow}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                →
              </button>
            </div>
          </div>

          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out gap-2"
              style={{ transform: `translateX(-${startIndex * (100 / cardsToShow)}%)` }}
            >
              {crewData.map((crew) => (
                <div 
                  key={crew.id}
                  className="flex-none w-1/5 px-1"
                >
                  <Link 
                    to={crew.path}
                    className="group block"
                  >
                    <div className="bg-black rounded-lg overflow-hidden">
                      <img 
                        src={crew.image}
                        alt={crew.title}
                        className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity"
                      />
                      <div className="p-4">
                        <h3 className="text-white text-lg font-medium">{crew.title}</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Join The Tribe Section */}
        <div className="w-full bg-gray-50 py-20 mb-10">
          <div className="max-w-[1440px] mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold mb-8">
              Join The <span className="text-black">Tribe</span>
            </h2>
            <button
              onClick={handleLinkedIn}
              className="bg-[#0A66C2] text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-[#004182] transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              Apply on LinkedIn
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Career 