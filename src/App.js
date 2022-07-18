import { Route, Routes, Navigate } from "react-router-dom";

import "./App.scss";
import AddUserForm from "./features/AddUserForm";
import Navbar from "./features/Navbar";
import UsersList from "./features/UsersList";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path={"/add-user"} element={<AddUserForm />} />
                <Route path={"/users"} element={<UsersList />} />
                <Route
                path="*"
                element={<Navigate to="/add-user" replace />}
            />
            </Routes>
        </div>
    );
}

export default App;
