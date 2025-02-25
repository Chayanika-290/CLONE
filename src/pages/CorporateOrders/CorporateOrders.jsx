import React from 'react'
import CorporateBanner from '../../components/CorporateBanner/CorporateBanner'
import BannerOne from '../../components/HeroSectionComponents/Bannerone'
import Deals from '../../components/HeroSectionComponents/Deals'
import Lifestyle from '../../components/Lifestyle/Lifestyle'
import Explore from '../../components/Explore/Explore'
import Footer from '../../components/Footer/Footer'

const CorporateOrders = () => {
  return (
    <div className="min-h-screen bg-white">
      <CorporateBanner />
      <BannerOne />
      <Deals />
      <Lifestyle />
      <Explore />
      <Footer />
    </div>
  )
}

export default CorporateOrders
