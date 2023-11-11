import { createContext, useReducer } from 'react';
import {
    shoppingCartReducer,
    StateType,
    CartItemType,
} from 'src/utils/ShoppingCartReducer';
import { useContext } from 'react';

type ShoppingCardProps = {
    children: React.ReactNode;
};

type ShoppingContextType = {
    state: StateType;
    increaseCartQty: (item: CartItemType) => void;
    // decreaseCartQty: () => void;
    getItemQty: (id: number) => number;
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

    const getItemQty = (id: number): number => {
        const item = state.cart.find((i) => i.id === id);

        return item?.qty ?? 0;
    };

    // const removeCartItem = () => {};

    return (
        <ShoppingContext.Provider value={{ increaseCartQty, state, getItemQty }}>
            {children}
        </ShoppingContext.Provider>
    );
};

export const useCart = (): ShoppingContextType => {
    const context = useContext(ShoppingContext);

    if (!context) {
        throw new Error(
            'useCart must be used within a ShoppingContextProvider'
        );
    }

    return context;
};
