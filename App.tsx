import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResultsPage from './pages/ResultsPage';
import PaintballPage from './pages/PaintballPage';
import OffersPage from './pages/OffersPage';
import ContactPage from './pages/ContactPage';
import SponsorsPage from './pages/SponsorsPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import AirsoftPage from './pages/AirsoftPage';
import GellyBallPage from './pages/GellyBallPage';
import FamilyCelebrationsPage from './pages/FamilyCelebrationsPage';
import ChildrenCampPage from './pages/ChildrenCampPage';
import OrderPage from './pages/OrderPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/o-nas" element={<AboutPage />} />
          <Route path="/vysledky" element={<ResultsPage />} />
          <Route path="/paintball" element={<PaintballPage />} />
          <Route path="/airsoft" element={<AirsoftPage />} />
          <Route path="/gelly-ball" element={<GellyBallPage />} />
          <Route path="/rodinne-oslavy" element={<FamilyCelebrationsPage />} />
          <Route path="/detsky-tabor" element={<ChildrenCampPage />} />
          <Route path="/team-building" element={<OffersPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/sponzori" element={<SponsorsPage />} />
          <Route path="/podmienky" element={<TermsPage />} />
          <Route path="/ochrana-osobnych-udajov" element={<PrivacyPage />} />
          <Route path="/objednat" element={<OrderPage />} />
          <Route path="/sportovy-klub" element={<AboutPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;