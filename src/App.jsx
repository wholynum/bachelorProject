import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/App.css'
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';
import DocsPage from './pages/DocsPage';
import EventsPage from './pages/EventsPage';
import GaleryPage from './pages/GaleryPage';
import MtbPage from './pages/MtbPage';
import ProgramsPage from './pages/ProgramsPage';
import SubInfoPage from './pages/SubInfoPage';
import TeachersPage from './pages/TeachersPage';
import ErrorPage from './pages/ErrorPage';
import HeaderGP from './components/HeaderGP';
import HomePage from './pages/HomePage';
import FooterGP from './components/FooterGP';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from './context/index';


function App() {
  
  const [isAuth, setIsAuth] = useState(true)

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <BrowserRouter>
        <div className='app__wrapper'>
          <HeaderGP className="app__header"/>
          <main className='main__wrapper'>
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/about" element={<AboutPage/>}/>
              <Route path="/contacts" element={<ContactsPage/>}/>
              <Route path="/docs" element={<DocsPage/>}/>
              <Route path="/events" element={<EventsPage/>}/>
              <Route path="/galery" element={<GaleryPage/>}/>
              <Route path="/mtb" element={<MtbPage/>}/>
              <Route path="/programs" element={<ProgramsPage/>}/>
              <Route path="/subinfo" element={<SubInfoPage/>}/>
              <Route path="/teachers" element={<TeachersPage/>}/>
              <Route path="*" element={<ErrorPage/>}/>
            </Routes>
          </main>
          <FooterGP className="app__footer"/>
        </div>
      </BrowserRouter>  
    </AuthContext.Provider>
  );
}

export default App;
