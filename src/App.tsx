import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Experiences from './pages/Experiences.tsx';
import Realisations from './pages/Realisations.tsx';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/experiences" element={<Experiences />} />
                <Route path="/realisations" element={<Realisations />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
