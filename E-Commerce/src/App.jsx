import { Route, Routes } from 'react-router-dom';
import Header from './components/layouts/Header';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Notice from './components/layouts/Notice';
import Footer from './components/layouts/Footer';
import Blog from './components/pages/Blog';
import Account from './components/pages/Account';
import Brands from './components/layouts/Brands';
import Policy from './components/layouts/Policy';
import Shop from './components/pages/Shop';

function App() {
  return (
    <div className="app">
      <Notice />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Shop" element={<Shop />} />
      </Routes>
      <Policy />
      <Footer />
    </div>
  );
}

export default App;
