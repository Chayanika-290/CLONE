import React, { useState } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route,
  createRoutesFromElements
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import SignIn from './components/SignIn';
import { AuthProvider } from './context/AuthContext';
import OrdersPage from './pages/OrdersPage';
import AccountPage from './pages/AccountPage';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Shop from './pages/HeroSectionPages/Shop';
import Personalization from './components/HeroSectionComponents/Personalization';
import SmartWatches from './pages/HeroSectionPages/SmartWatches';
import NirvanaProductPage from './components/HeroSectionComponents/NirvanaProductPage';
import WirelessEarbuds from './pages/HeroSectionPages/WirelessEarbuds';
import SmartwatchesProductPage from './components/HeroSectionComponents/SmartwatchesProductPage';
import SmartwatchesEnigmaProductPage from './components/HeroSectionComponents/SmartwatchesEnigmaProductPage';
import SmartwatchesEnigmaView from './components/HeroSectionComponents/SmartwatchesEnigmaView';
import DealsView from './components/HeroSectionComponents/DealsView';
import SmartwatchesEnigmaViewProductPage from './components/HeroSectionComponents/SmartwatchesEnigmaViewProductPage';
import BoatNirvana from './components/HeroSectionComponents/BoatNirvana';
import BestPricesProductPage from './components/HeroSectionComponents/BestPricesProductPage';
import StoneBujji from './components/HeroSectionComponents/StoneBujji';
import PersonalisedProducts from './components/HeroSectionComponents/PersonalisedProducts';
import SalesProductPage from './components/Sales/SalesProductPage';
import DealsProductPage from './components/HeroSectionComponents/DealsProductPage';
import DealsViewProductPage from './components/HeroSectionComponents/DealsViewProductPage';
import SalesView from './components/Sales/SalesView';
import SalesViewProductPage from './components/Sales/SalesViewProductPage';
import ShopCategoriesTrueWirelessEarbuds from './components/ShopCategories/ShopCategoriesTrueWirelessEarbuds';
import ShopCategoriesNeckbands from './components/ShopCategories/ShopCategoriesNeckbands';
import ShopCategoriesSmartwatches from './components/ShopCategories/ShopCategoriesSmartwatches';
import ShopCategoriesNirvana from './components/ShopCategories/ShopCategoriesNirvana';
import ShopCategoriesWirelessHeadphones from './components/ShopCategories/ShopCategoriesWirelessHeadphones';
import ShopCategoriesWirelessSpeakers from './components/ShopCategories/ShopCategoriesWirelessSpeakers';
import ShopCategoriesWiredHeadphones from './components/ShopCategories/ShopCategoriesWiredHeadphones';
import ShopCategoriesWiredEarphones from './components/ShopCategories/ShopCategoriesWiredEarphones';
import ShopCategoriesSoundbars from './components/ShopCategories/ShopCategoriesSoundbars';
import ShopCategoriesGamingHeadphones from './components/ShopCategories/ShopCategoriesGamingHeadphones';
import TopPicksProductPage from './components/TopPicks/TopPicksProductPage';
import TopPicksView from './components/TopPicks/TopPicksView';
import TopPicksViewProductPage from './components/TopPicks/TopPicksViewProductPage';
import BestBoatProductPage from './components/BestBoat/BestBoatProductPage';
import CorporateOrders from './pages/CorporateOrders/CorporateOrders';
import Navigation from './components/Navigation';
import GiftingStore from './pages/GiftingStore/GiftingStore';
import Refer from './components/More/Refer';
import Career from './components/More/Career';
import Social from './components/More/Social';
import StoreLocator from './components/More/StoreLocator';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/cart/CartDrawer';

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <Routes>
              <Route path="/party-speakers" element={<BoatNirvana />} />
              <Route path="/nirvana-product/:id" element={<BoatNirvana />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/" element={<Home />} />
              <Route path="/categories" element={<div>Categories Page</div>} />
              <Route path="/boatpersonalization" element={<Personalization />} />
              <Route 
                path="/corporate" 
                element={
                  <ProtectedRoute>
                    <CorporateOrders />
                  </ProtectedRoute>
                } 
              />
              <Route path="/gifting" element={<GiftingStore />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<div>Cart Page</div>} />
              <Route 
                path="/orders" 
                element={
                  <ProtectedRoute>
                    <OrdersPage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/account" 
                element={
                  <ProtectedRoute>
                    <AccountPage />
                  </ProtectedRoute>
                } 
              />
              <Route path="/smart-watches" element={<SmartWatches />} />
              <Route path="/wireless-earbuds" element={<WirelessEarbuds />} />
              <Route path="/smartwatches-product/:id" element={<SmartwatchesProductPage />} />
              <Route path="/smartwatches-enigma/:id" element={<SmartwatchesEnigmaProductPage />} />
              <Route path="/enigma-series" element={<SmartwatchesEnigmaView />} />
              <Route path="/daily-deals" element={<DealsView />} />
              <Route path="/smartwatches-enigma-view/:id" element={<SmartwatchesEnigmaViewProductPage />} />
              <Route path="/best-prices/:id" element={<BestPricesProductPage />} />
              <Route path="/neckbands" element={<StoneBujji />} />
              <Route path="/wireless-headphones" element={<PersonalisedProducts />} />
              <Route path="/sales-product/:id" element={<SalesProductPage />} />
              <Route path="/deals-product/:id" element={<DealsProductPage />} />
              <Route path="/deals-view-product/:id" element={<DealsViewProductPage />} />
              <Route path="/sales" element={<SalesView />} />
              <Route path="/sales-view-product/:id" element={<SalesViewProductPage />} />
              <Route path="/twe" element={<ShopCategoriesTrueWirelessEarbuds />} />
              <Route path="/neck" element={<ShopCategoriesNeckbands />} />
              <Route path="/smart" element={<ShopCategoriesSmartwatches />} />
              <Route path="/party" element={<ShopCategoriesNirvana />} />
              <Route path="/wireless-h" element={<ShopCategoriesWirelessHeadphones />} />
              <Route path="/wireless-s" element={<ShopCategoriesWirelessSpeakers />} />
              <Route path="/wired-h" element={<ShopCategoriesWiredHeadphones />} />
              <Route path="/wired-e" element={<ShopCategoriesWiredEarphones />} />
              <Route path="/sound" element={<ShopCategoriesSoundbars />} />
              <Route path="/gaming-h" element={<ShopCategoriesGamingHeadphones />} />
              <Route path="/top-picks/view/:id" element={<TopPicksViewProductPage />} />
              <Route path="/top-picks/:category/:id" element={<TopPicksProductPage />} />
              <Route path="/top-picks" element={<TopPicksView />} />
              <Route 
                path="/best-boat/:category/:id" 
                element={<BestBoatProductPage />} 
              />
              <Route path="/refer-earn" element={<Refer />} />
              <Route path="/careers" element={<Career />} />
              <Route path="/social-responsibility" element={<Social />} />
              <Route path="/store-locator" element={<StoreLocator />} />
              <Route path="/personalization" element={<Personalization />} />
              <Route path="*" element={
                <div className="flex items-center justify-center h-screen">
                  <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
                </div>
              } />
            </Routes>
            <CartDrawer 
              isOpen={isCartOpen} 
              onClose={() => setIsCartOpen(false)} 
            />
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
