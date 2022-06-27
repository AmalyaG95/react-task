import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Question from './components/Question';
import Home from './components/Home';
import Results from './components/Results';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route
          path={'/'}
          element={<Home />}
        />
        <Route
          path={'/results'}
          element={<Results />}
        />
        <Route
          path={'/question/:id'}
          element={<Question />}
        />
      </Routes>
    </div>
  );
}

export default App;
