import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Experiences from './pages/Experiences.tsx';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/experiences" element={<Experiences />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
