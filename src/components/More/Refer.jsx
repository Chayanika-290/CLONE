import React, { useState } from 'react'
import Footer from '../Footer/Footer'

const faqData = [
  {
    id: 1,
    question: "How do boAt Reward Points work?",
    answer: "boAt Reward Points are loyalty points that you can earn through various activities like referring friends, making purchases, etc. These points can be redeemed for discounts on future purchases."
  },
  {
    id: 2,
    question: "How can I redeem my reward points?",
    answer: "You can redeem your reward points during checkout. The points will be automatically applied as a discount to your purchase."
  },
  {
    id: 3,
    question: "Is there an expiration date for boAt reward points?",
    answer: "Yes, boAt reward points typically expire after 12 months from the date they were earned."
  },
  {
    id: 4,
    question: "Where can I use my boAt Reward Points?",
    answer: "You can use your boAt Reward Points on any purchase made through our official website or app."
  },
  {
    id: 5,
    question: "Can I transfer my reward points to a friend?",
    answer: "No, reward points are non-transferable and can only be used by the account holder."
  },
  {
    id: 6,
    question: "When will I receive my 100 Rewards Points after referring a friend?",
    answer: "You will receive your 100 boAt Reward Points once your friend's first order is delivered."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-4 flex justify-between items-center text-left"
        onClick={onClick}
      >
        <span className="text-lg">{question}</span>
        <span className="text-2xl">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
};

const Refer = () => {
  const [formData, setFormData] = useState({
    friendName: '',
    friendPhone: ''
  });
  const [openFAQs, setOpenFAQs] = useState(new Set());

  const toggleFAQ = (id) => {
    setOpenFAQs(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <div className="max-w-[1440px] mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            
            <img 
              src="/More/more1.webp"
              alt="Refer a Friend" 
              className="w-full h-auto"
            />
          </div>

          {/* Right Side - Form */}
          <div className="bg-white p-8 rounded-lg">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-4">Share the Pulse &<br />Double the Vibe!</h2>
              <p className="text-lg mb-4">
                Refer a friend & you both get <span className="font-bold">100 boAt Reward Points</span>.
              </p>
              <p className="text-xl font-medium">Ready? Enter your friend's details!</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-lg mb-2">
                  Your Friend's Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="friendName"
                  value={formData.friendName}
                  onChange={handleChange}
                  placeholder="Type Here"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                  required
                />
              </div>

              <div>
                <label className="block text-lg mb-2">
                  Your Friend's Phone Number<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="friendPhone"
                  value={formData.friendPhone}
                  onChange={handleChange}
                  placeholder="Type Here"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* How it Works Section */}
        <div className="mb-16 mt-20">
          <h2 className="text-2xl font-bold mb-6">1. How it Works:</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-2">Step 1: <span className="font-normal">Go to our Refer and Earn page.</span></h3>
              <p className="text-gray-700">
                Note: You can find the link on the footer of our website. Also when you place an order, you will receive a message after your order confirmation that will take you to the referral page., so keep an eye out!
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-2">Step 2: <span className="font-normal">On our Refer & Earn page. Enter your friend's details, inviting them to become a boAthead just like you are.</span></h3>
            </div>

            <div>
              <h3 className="font-medium mb-2">Step 3: <span className="font-normal">As soon as they join the boAt community, your friend gets instant 100 boAt Reward Points applicable on the first purchase.</span></h3>
            </div>

            <div>
              <h3 className="font-medium mb-2">Step 4: <span className="font-normal">When your friend makes their first purchase with their newfound rewards, you get rewarded too! Your account will be topped up with 100 boAt Reward Points once their order gets delivered.</span></h3>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Benefits of boAt's Refer & Earn Program:</h2>
          
          <p className="mb-4">Discover a plethora of benefits that come with being a part of our Refer & Earn program.</p>
          
          <ul className="list-decimal pl-5 space-y-4">
            <li>Effortlessly earn reward points every time a friend purchases through your referral.</li>
            <li>You become the favorite friend in your gang! (rightfully so!)</li>
            <li>Use your boAt Reward Points to shop for your favorite products, and claim additional exciting discounts.</li>
            <li>There's no cap on how many friends you can refer. Share the boAt joy far and wide!</li>
          </ul>

          <p className="mt-8 text-lg italic">
            Experience the true essence of boAt, where sharing isn't just caring—it's rewarding!
          </p>
        </div>

        {/* FAQs Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-10">FAQs</h2>
          <div className="max-w-3xl mx-auto">
            {faqData.map((faq) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQs.has(faq.id)}
                onClick={() => toggleFAQ(faq.id)}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Refer
