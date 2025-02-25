import React from 'react'
import Giftone from '../../components/GiftingStore/Giftone'
import GiftHeading from '../../components/GiftingStore/GiftHeading'
import GiftExperience from '../../components/GiftingStore/GiftExperience'
import Deals from '../../components/HeroSectionComponents/Deals'
import Footer from '../../components/Footer/Footer'
import Offer from '../../components/HeroSectionComponents/Offer'
import GiftQuiz from '../../components/GiftingStore/GiftQuiz'

const GiftingStore = () => {
  return (
    <div className="min-h-screen bg-white">
      <Giftone />
      <GiftHeading />
      <GiftExperience />
      <Deals />
      <GiftQuiz />
      <Offer />
      <Footer />
    </div>
  )
}

export default GiftingStore
