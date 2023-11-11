import { Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './pages/Home';
import { ShoppingContextProvider } from './context/ShoppingContext';

function App() {
    return (
        <div className="app">
            <ShoppingContextProvider>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <Footer />
            </ShoppingContextProvider>
        </div>
    );
}

export default App;
