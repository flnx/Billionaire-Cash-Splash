import { createContext } from 'react';

type ShoppingCardProps = {
    children: React.ReactNode;
};

const ShoppingContext = createContext({});

const ShoppingContextProvider = ({ children }: ShoppingCardProps) => {
    const increaseCartQty = () => {};

    const decreaseCartQty = () => {};

    const getItemQty = () => {};

    const removeCartItem = () => {};

    return (
        <ShoppingContext.Provider value={'asd'}>
            {children}
        </ShoppingContext.Provider>
    );
};
