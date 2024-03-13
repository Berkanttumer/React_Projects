import { Route, Routes } from 'react-router-dom';
import Header from './components/layouts/Header';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Notice from './components/layouts/Notice';
import Footer from './components/layouts/Footer';
import Blog from './components/pages/Blog';
import Account from './components/pages/Account';

import Policy from './components/layouts/Policy';
import Shop from './components/pages/Shop';
import Details from './components/pages/Details';
import ScrollGoTop from './components/ScrollGoTop';
import Cart from './components/pages/Cart';
import SearchModal from './components/layouts/SearchModal';
import Favorites from './components/pages/Favorites';

function App() {
  return (
    <div className="app">
      <ScrollGoTop />
      <Notice />
      <Header />
      <SearchModal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Details/:id" element={<Details />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Favorites" element={<Favorites />} />
      </Routes>
      <Policy />
      <Footer />
    </div>
  );
}

export default App;
