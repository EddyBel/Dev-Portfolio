import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import { NavBar, Footer } from './components/layouts/index';
import { ButtonScrollTop } from './components/commons/index';
import { Views } from './routes/routes';

function App() {
  // const location = useLocation();

  useEffect(() => {
    import('./animations/scroll-animations.ts').then(() => {
      // El archivo scroll-animations.ts se ha cargado completamente
      console.log('El archivo scroll-animations se ha cargado completamente');
    });
  }, []);

  // useEffect(() => {
  //   if (location.pathname == '/repositories') document.body.style.background = '#061013';
  //   else document.body.style.background = '#eaecee';
  // }, [location]);

  return (
    <>
      <NavBar />
      <ButtonScrollTop />
      <main className="App">
        <Views />
      </main>
      <Footer />
    </>
  );
}

export default App;
