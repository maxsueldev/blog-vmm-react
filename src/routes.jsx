import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DefaultPage from './pages/DefaultPage';
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/Sobre';
import Contato from './pages/Contato/Contato';
import Erro404 from './pages/Erro404/Erro404';
import Artigos from './pages/Artigos';
import SocialIcons from "./components/SocialIcons";
import Footer from "./components/Footer";
import Empreendedorismo from './pages/Artigos/Empreendedorismo';
import InglesNegocios from './pages/Artigos/InglesNegocios';
import FerramentasGestaoPt1 from './pages/Artigos/FerramentasGestaoPt1';
import FerramentasGestaoPt2 from './pages/Artigos/FerramentasGestaoPt2';
import PrimeiroNegocio from './pages/Artigos/PrimeiroNegocio';

function RouterApp() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/contato' element={<Contato />} />
        </Route>

        <Route path='/artigos/' element={<Artigos />}>
          <Route path='por-que-devo-ensinar-empreendedorismo-em-minha-escola' element={<Empreendedorismo />} />
          <Route path='ingles-e-o-mundo-dos-negocios' element={<InglesNegocios />} />
          <Route path='ferramentas-para-gerir-e-analizar-seu-negocio-parte-1' element={<FerramentasGestaoPt1 />} />
          <Route path='ferramentas-para-gerir-e-analizar-seu-negocio-parte-2' element={<FerramentasGestaoPt2 />} />
          <Route path='como-abrir-meu-primeiro-negocio' element={<PrimeiroNegocio />} />
        </Route>

        <Route path='*' element={<Erro404 />} />
      </Routes>

      <SocialIcons />
      <Footer />
    </BrowserRouter>
  )
}

export default RouterApp;
