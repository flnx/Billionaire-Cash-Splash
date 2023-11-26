import { Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './pages/Home';
import { ShoppingContextProvider } from './context/ShoppingContext';
import { BillionaireContextProvider } from './context/BillionaireContext';

function App() {
    return (
        <ShoppingContextProvider>
            <div className="app">
                <BillionaireContextProvider>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                    <Footer />
                </BillionaireContextProvider>
            </div>
        </ShoppingContextProvider>
    );
}

export default App;
