import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Cats from './components/Cats';
import Home from './components/Home';
import Sidebar from './components/Sidebar';

function App() {

  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route
          path={'/'}
          element={<Home />}
        />
        <Route
          path={'/:id'}
          element={<Cats />}
        />
      </Routes>
    </div>
  );
}

export default App;
