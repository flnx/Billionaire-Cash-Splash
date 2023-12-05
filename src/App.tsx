import { Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './pages/Home';
import { ShoppingContextProvider } from './context/ShoppingContext';
import { BillionaireContextProvider } from './context/BillionaireContext';
import { Inventory } from './pages/Inventory';

function App() {
    return (
        <BillionaireContextProvider>
            <div className="app" data-theme="light">
                <ShoppingContextProvider>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/inventory" element={<Inventory />} />
                    </Routes>
                    <Footer />
                </ShoppingContextProvider>
            </div>
        </BillionaireContextProvider>
    );
}

export default App;
