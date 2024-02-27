import { Route, Routes } from 'react-router-dom';
import Header from './components/layouts/Header';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Notice from './components/layouts/Notice';
import Footer from './components/layouts/Footer';

function App() {
  return (
    <div className="app">
      <Notice />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
