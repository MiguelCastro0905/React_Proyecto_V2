import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import CarnetAprendiz from './components/carnetAprendiz';
import CarnetAdministrativo from './components/carnetAdministrativo';
import CarnetInstructor from './components/carnetInstructor';
import CarnetAdministrador from './components/carnetAdministrador';




function App() {
    return (
        <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/CarnetAprendiz" element={<CarnetAprendiz />} />
            <Route path="/CarnetAdministrativo" element={< CarnetAdministrativo/>} />
            <Route path="/CarnetInstructor" element={< CarnetInstructor/>} />
            <Route path="/CarnetAdministrador" element={< CarnetAdministrador/>} />
        </Routes>
        </Router>
    );
}

export default App;