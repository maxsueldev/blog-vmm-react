import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DefaultPage from './pages/DefaultPage';
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/Sobre';
import Contato from './pages/Contato/Contato';
import Erro404 from './pages/Erro404/Erro404';
import Artigo from './pages/Artigo';

function RouterApp() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/artigos/:linkArquivo' element={<Artigo />} />
        </Route>

        <Route path='*' element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterApp;
