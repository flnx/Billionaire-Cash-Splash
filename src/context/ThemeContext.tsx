import { createContext, useState } from 'react';
import { useContext } from 'react';


type ThemeContextProps = {
    children: React.ReactNode;
};

type ThemeType = 'dark' | 'light';

type ThemeContextType = {
    themeHandler: () => void;
    theme: ThemeType;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeContextProvider = ({ children }: ThemeContextProps) => {
    const [theme, setTheme] = useState<ThemeType>('light');

    const themeHandler = () => {
        setTheme((prev: ThemeType) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, themeHandler }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('useTheme must be used within a ThemeContextProvider');
    }

    return context;
};
