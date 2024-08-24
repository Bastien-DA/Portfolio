import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Experiences from './pages/Experiences.tsx';
import Realisations from './pages/Realisations.tsx';
import Contact from "./pages/Contact.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/experiences" element={<Experiences />} />
                <Route path="/realisations/:specialite?" element={<Realisations />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
