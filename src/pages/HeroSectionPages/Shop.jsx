import React from 'react';
import ShopBanner from '../../components/HeroSectionComponents/ShopBanner';
import Deals from '../../components/HeroSectionComponents/Deals';
import BannerOne from '../../components/HeroSectionComponents/Bannerone';
import BestPrices from '../../components/HeroSectionComponents/BestPrices';
import Offer from '../../components/HeroSectionComponents/Offer';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation';

const Shop = () => {
  return (
    <main>
      <Navigation />
      <ShopBanner />
      <Deals />
      <BannerOne />
      <BestPrices />
      <BannerOne />
      <Offer />
      <Footer />
    </main>
  );
};

export default Shop; 