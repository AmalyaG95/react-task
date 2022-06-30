import { Route, Routes } from 'react-router-dom';

import './App.scss';
import AddUserForm from './components/AddUserForm';
import Navbar from './components/Navbar';
import UsersList from './components/UsersList';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route
            path={'/add-user'}
            element={<AddUserForm />}
          />
          <Route
            path={'/edit-user/:id'}
            element={<AddUserForm />}
          />
          <Route
            path={'/users'}
            element={<UsersList />}
          />
        </Routes>
    </div>
  );
}

export default App;
