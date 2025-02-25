import React from 'react'
import Footer from '../Footer/Footer'

const Social = () => {
  return (
    <>
      <div className="w-full px-0 mt-10">
        {/* E-Waste Management Policy Banner */}
        <div className="relative w-full">
          <img 
            src="/More/more7.png"
            alt="E-Waste Management Policy" 
            className="w-full h-full object-cover"
            onError={(e) => {
              console.log('Image failed to load:', e.target.src);
              e.target.src = '/images/placeholder.jpg';
            }}
          />
        </div>

        {/* Our Pledge Section */}
        <div className="max-w-[1440px] mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold mb-12 border-b-2 border-black inline-block">
            Our Pledge
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {/* Conscious Tech */}
            <div className="bg-gray-50 p-8 text-center border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-4">
                <img 
                  src="/More/more8.png"
                  alt="Conscious Tech"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold">Conscious</h3>
              <p className="text-gray-600">Tech</p>
            </div>

            {/* Eco Innovation */}
            <div className="bg-gray-50 p-8 text-center border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-4">
                <img 
                  src="/More/more9.png"
                  alt="Eco Innovation"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold">Eco</h3>
              <p className="text-gray-600">Innovation</p>
            </div>

            {/* Wearables With Soul */}
            <div className="bg-gray-50 p-8 text-center border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-4">
                <img 
                  src="/More/more10.png"
                  alt="Wearables With Soul"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold">Wearables</h3>
              <p className="text-gray-600">With Soul</p>
            </div>

            {/* Global Duty */}
            <div className="bg-gray-50 p-8 text-center border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-4">
                <img 
                  src="/More/more11.png"
                  alt="Global Duty"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold">Global</h3>
              <p className="text-gray-600">Duty</p>
            </div>
          </div>
        </div>

        {/* Contributing to a Greener Earth Section */}
        <div className="max-w-[1440px] mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h3 className="text-[#E77C40] text-lg font-medium">
                CONTRIBUTING TO A GREENER EARTH
              </h3>
              <h2 className="text-4xl md:text-5xl font-light leading-tight">
                We are committed to make a <span className="font-bold">positive impact</span>
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We at Imagine Marketing Ltd (boAt) are committed to make a positive impact on
                  society by ensuring compliance to Environment, Health and safety regulations. We
                  have taken several iteratives to follow eco-friendly practices in manufacturing with
                  conservation and optimization of resources, thereby <span className="font-semibold">contributing</span> to the noble
                  cause of <span className="font-semibold">environment preservation</span> and <span className="font-semibold">safety</span> for greater goods for society.
                </p>
                <p>
                  Imagine Marketing Ltd (boAt) is committed to <span className="font-semibold">quality & continuous improvement in
                  Environment</span>, Occupational Health & Safety Performance through maintaining
                  documentation, Compliance & periodic review of the Environment, OHS legislation
                  & Regulatory requirement, Resource Conservation, Prevention of ill health and
                  injury, Zero Accident & Occupational Health Monitoring.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div>
              <img 
                src="/More/more12.webp"
                alt="Greener Earth" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Building a Better Future Banner */}
        <div className="relative w-full">
          <img 
            src="/More/more13.webp"
            alt="Building a Better Future" 
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 px-4">
            <h2 className="text-5xl md:text-6xl text-white font-bold text-center mb-6">
              Building a Better Future &<br />
              Planet Together
            </h2>
            <p className="text-white text-lg md:text-xl max-w-3xl text-center leading-relaxed">
              At boAt, our vision extends beyond gadgets — by leveraging our resources, 
              connections, and collaborations, we strive to construct a more sustainable 
              landscape, ensuring a digital economy that empowers everyone, everywhere.
            </p>
          </div>
        </div>

        {/* Eco Friendly Practices Section */}
        <div className="max-w-[1440px] mx-auto px-4 py-16">
          <div className="space-y-8">
            <h3 className="text-[#E77C40] text-lg font-medium">
              ECO FRIENDLY PRACTICES
            </h3>
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-light leading-tight">
                Responsibility of<br />
                <span className="font-bold">Producers & Consumers</span>
              </h2>
              <div className="max-w-4xl space-y-6 text-gray-700 text-lg">
                <p>
                  We at Imagine Marketing Ltd (boAt) are committed to make a positive impact on society by ensuring compliance to Environment, Health and safety
                  regulations. We have taken several iteratives to follow eco-friendly practices in manufacturing with conservation and optimization of resources, thereby
                  <span className="font-semibold"> contributing</span> to the noble cause of <span className="font-semibold">environment preservation</span> and <span className="font-semibold">safety</span> for greater goods for society.
                </p>
                <p>
                  Imagine Marketing Ltd (boAt) is committed to quality & continuous improvement in Environment, Occupational Health & Safety Performance through
                  maintaining documentation, Compliance & periodic review of the Environment, OHS legislation & Regulatory requirement, Resource Conservation,
                  Prevention of ill health and injury, Zero Accident & Occupational Health Monitoring.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What is E-Waste Section */}
        <div className="max-w-[1440px] mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-light leading-tight">
                What is <span className="font-bold">E-Waste?</span>
              </h2>
              <div className="text-gray-700 text-lg">
                <p>
                  e-waste means electrical and electronic equipment, whole or in part discarded as
                  waster by the consumer or bulk consumer as well as rejects from manufacturing,
                  refurbishment and repair processes.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div>
              <img 
                src="/More/more14.jpg"
                alt="E-Waste" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Sustainable Recycling Options Section */}
        <div className="max-w-[1440px] mx-auto px-4 py-16">
          <div className="space-y-8">
            <h3 className="text-[#E77C40] text-lg font-medium">
              SUSTAINABLE RECYCLING OPTIONS
            </h3>
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-light leading-tight">
                e-waste Collection &<br />
                <span className="font-bold">Recycling Programme</span>
              </h2>
              <div className="max-w-4xl text-gray-700 text-lg">
                <p>
                  Join us in our commitment to a cleaner, greener future. Through our <span className="font-semibold">e-Waste Collection Program</span>, 
                  disposing of your electronic devices responsibly has never been easier. Follow these simple steps to contribute to a safer 
                  and more sustainable India:
                </p>
              </div>
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Step 1 */}
            <div className="space-y-6">
              <h3 className="text-[#E77C40] text-lg font-medium">STEP 1</h3>
              <h2 className="text-3xl font-light">
                Connect With <span className="font-bold">Us</span>
              </h2>
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src="/More/more15.webp"
                  alt="Connect With Us" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-700">
                Begin the e-Waste disposal process by reaching out to us. Call our
                Toll-Free No 1800-123-5124 or email us at info@namoewaste.com. We
                are in collaboration with our authorized e-Waste recycler, Namo E
                Waste Management Ltd, to channelize e-Waste collected from PAN
                India.
              </p>
            </div>

            {/* Step 2 */}
            <div className="space-y-6">
              <h3 className="text-[#E77C40] text-lg font-medium">STEP 2</h3>
              <h2 className="text-3xl font-light">
                Find A Center <span className="font-bold">Near You</span>
              </h2>
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src="/More/more16.webp"
                  alt="Find A Center" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-700">
                Connect with our Customer Care for guidance on disposal. They'll
                provide details on the nearest drop points where you can
                conveniently dispose of your e-Waste. Our reverse logistic team can
                even collect items directly from your doorstep for channelization to
                our e-Waste partner plant for final processing.
              </p>
            </div>

            {/* Step 3 */}
            <div className="space-y-6">
              <h3 className="text-[#E77C40] text-lg font-medium">STEP 3</h3>
              <h2 className="text-3xl font-light">
                Drop Off <span className="font-bold">Responsibly</span>
              </h2>
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src="/More/more17.webp"
                  alt="Drop Off Responsibly" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-700">
                Visit the designated drop points or have our reverse logistic team
                collect your e-Waste from your doorstep. Ensure proper disposal and
                channelization to our authorized e-Waste partner plant, Namo E
                Waste Management Ltd, for responsible processing and recycling.
              </p>
            </div>

            {/* Step 4 */}
            <div className="space-y-6">
              <h3 className="text-[#E77C40] text-lg font-medium">STEP 4</h3>
              <h2 className="text-3xl font-light">
                Contribute to <span className="font-bold">Change</span>
              </h2>
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src="/More/more18.webp"
                  alt="Contribute to Change" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-700">
                Your actions matter in creating a safer, greener India. Join us in
                making a positive impact on the environment.
              </p>
              <p className="text-gray-700 font-medium">
                Together, <span className="font-bold">WE CAN</span> bring about the change we wish to see. Let's be
                part of this transformative journey.
              </p>
            </div>
          </div>
        </div>

        {/* Collection Centers Section */}
        <div className="max-w-[1440px] mx-auto px-4 py-16">
          <div className="space-y-8">
            <h3 className="text-[#E77C40] text-lg font-medium">
              FIND A DROP OFF POINT NEAR YOU
            </h3>
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-light leading-tight">
                List Of<br />
                <span className="font-bold">Collection Centers</span>
              </h2>
            </div>
          </div>

          {/* Table */}
          <div className="mt-12 overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">S.No.</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Name of State/UT</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Name of Town/ City</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Address of collection centres</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Name of contact person</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Contact Number</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">1</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Chhattisgarh</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Raipur</td>
                  <td className="px-6 py-4 text-sm text-gray-900">4,5,6, Ashirwad Towers G.E. Road Raipur, Chattishgarh-492001</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Rishi Tandon</td>
                  <td className="px-6 py-4 text-sm text-gray-900">9893544445</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">2</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Gujarat</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Ahmedabad</td>
                  <td className="px-6 py-4 text-sm text-gray-900">B-1 , 605, West Gate Business Bay S.G , Highway , Ahmedabad 51</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Neil</td>
                  <td className="px-6 py-4 text-sm text-gray-900">9998222086</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">3</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Delhi</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Delhi</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Tap The Scrap 91/147, Rajpur Khurd extension, New Delhi - 110068</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Ashish Kumar</td>
                  <td className="px-6 py-4 text-sm text-gray-900">8800234237</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">4</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Haryana</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Faridabad</td>
                  <td className="px-6 py-4 text-sm text-gray-900">1A/255 NIT Faridabad , Haryana 121001</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Satish chauhan</td>
                  <td className="px-6 py-4 text-sm text-gray-900">7290016934</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">5</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Tamilnadu</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Chennai</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Plot no 111/114, Shri Lakshmi amman nagar, Surapet main road , Puthagaram , Chennai – 600099</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Mr: Mohar Singh</td>
                  <td className="px-6 py-4 text-sm text-gray-900">8144480808</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">6</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Maharashtra</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Thane</td>
                  <td className="px-6 py-4 text-sm text-gray-900">OMKAR ENTERPRISES 5B, Building No 4, Gala No 10, Bhagwan Seth Estate, Purna Village, Bhivandi, Thane,Maharashtra, 421305</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Bharat Kapse</td>
                  <td className="px-6 py-4 text-sm text-gray-900">9321989403</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Corporate Social Responsibility Section */}
        <div className="max-w-[1440px] mx-auto px-4 py-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Corporate Social Responsibility
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* CSR 2023-24 */}
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">CSR Projects approved Financial Year 2023-24</h3>
                <a 
                  href="/documents/csr-2023-24.pdf" 
                  download
                  className="text-[#E77C40] hover:text-[#d66a31]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            </div>

            {/* CSR 2022-23 */}
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">CSR Projects approved Financial Year 2022-23</h3>
                <a 
                  href="/documents/csr-2022-23.pdf" 
                  download
                  className="text-[#E77C40] hover:text-[#d66a31]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            </div>

            {/* CSR 2021-22 */}
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">CSR Projects approved Financial Year 2021-22</h3>
                <a 
                  href="/documents/csr-2021-22.pdf" 
                  download
                  className="text-[#E77C40] hover:text-[#d66a31]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Social 