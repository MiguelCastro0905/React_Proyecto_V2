import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Carnet from './components/carnet';

function App() {
    return (
        <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/carnet" element={<Carnet />} />
        </Routes>
        </Router>
    );
}

export default App;