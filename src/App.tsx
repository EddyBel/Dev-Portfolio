import { NavBar } from './components/layouts/index';
import { ButtonScrollTop } from './components/commons/index';
import { Views } from './routes/routes';

function App() {
  return (
    <main className="App">
      <NavBar />
      <ButtonScrollTop />
      <Views />
    </main>
  );
}

export default App;
