import { createContext, useReducer } from 'react';
import { shoppingCartReducer, StateType, CartItemType } from 'src/utils/ShoppingCartReducer';
import { useContext } from 'react';

type ShoppingCardProps = {
    children: React.ReactNode;
};

type ShoppingContextType = {
    state: StateType;
    increaseCartQty: (item: CartItemType) => void;
    // decreaseCartQty: () => void;
    // getItemQty: () => void;
    // removeCartItem: () => void;
};

const ShoppingContext = createContext<ShoppingContextType | undefined>(
    undefined
);

export const ShoppingContextProvider = ({ children }: ShoppingCardProps) => {
    const [state, dispatch] = useReducer(shoppingCartReducer, { cart: [] });

    const increaseCartQty = (item: CartItemType) => {
        dispatch({
            type: 'INCREASE',
            payload: item,
        });
    };

    // const decreaseCartQty = () => {};

    // const getItemQty = () => {}

    // const removeCartItem = () => {};

    return (
        <ShoppingContext.Provider value={{ increaseCartQty, state }}>
            {children}
        </ShoppingContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(ShoppingContext);

    return context;
};
