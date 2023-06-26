import { useEffect } from 'react';
import { NavBar, Footer } from './components/layouts/index';
import { ButtonScrollTop } from './components/commons/index';
import { Views } from './routes/routes';

function App() {
  useEffect(() => {
    import('./animations/scroll-animations.ts').then(() => {
      // El archivo scroll-animations.ts se ha cargado completamente
      console.log('El archivo scroll-animations se ha cargado completamente');
    });
  }, []);

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
