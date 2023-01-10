import './App.css'
import Alerts from './components/Alerts/Alerts';
import NavBar from './components/NavBar/NavBar';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detailed from './pages/PaidTemplate/TemplateDetailed/Detailed';
import FHome from './pages/FreeTemplate/Home/FHome';
import FDetail from './pages/FreeTemplate/Free/FreeDetails/FDetail';
import PDownload from './pages/PaidTemplate/PDownload/PDownload';
import FDownload from './pages/FreeTemplate/Free/FDownload/FDownload';
function App() {
  return (
    <BrowserRouter >
      <Alerts />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detailed />} />
        <Route path="/pdownloadthakjeuyeyou112jrhghrhdgdhdgdvhd9876789jdEUIEU3U3U32UI43838ydjhgUYtyrtdhy9UJJSSH9276gdgnc12(*-*)487/:id" element={<PDownload />} />
        <Route path="/free" element={<FHome />} />
        <Route path="/fdetail/:id" element={<FDetail />} />
        <Route path="/fdownloadthankfree183636egndh03984*5^n/:id" element={<FDownload />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
