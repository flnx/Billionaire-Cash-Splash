import { Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './pages/Home';
import { ShoppingContextProvider } from './context/ShoppingContext';
import { BillionaireContextProvider } from './context/BillionaireContext';
import { Inventory } from './pages/Inventory';
import { useTheme } from './context/ThemeContext';

function App() {
    const { theme } = useTheme();

    return (
        <BillionaireContextProvider>
            <div className="app" data-theme={theme}>
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
