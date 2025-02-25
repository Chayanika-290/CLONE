import React from 'react';
import HeroSection from '../components/home/HeroSection';
import Categories from '../components/home/Categories';
import Sales from '../components/Sales/Sales';
import BannerOne from '../components/HeroSectionComponents/Bannerone';
import Deals from '../components/HeroSectionComponents/Deals';
import ShopCategories from '../components/ShopCategories/ShopCategories';
import Bestsellers from '../components/Bestsellers/Bestsellers';
import TopPicks from '../components/TopPicks/TopPicks';
import Footer from '../components/Footer/Footer';
import Lifestyle from '../components/Lifestyle/Lifestyle';
import BestBoat from '../components/BestBoat/BestBoat';
import Tribe from '../components/Tribe/Tribe';
import Press from '../components/Press/Press';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <Sales />
      <BannerOne />
      <Deals />
      <ShopCategories />
      <Bestsellers />
      <TopPicks />
      <Lifestyle />
      <BestBoat />
      <Tribe />
      <Press />
      <Footer />
      {/* Add other sections as needed */}
    </main>
  );
};

export default Home; 