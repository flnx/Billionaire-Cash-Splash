import { createContext, useReducer } from 'react';
import { shoppingCartReducer, StateType, CartItemType } from 'src/utils/ShoppingCartReducer';
import { useContext } from 'react';
import { Cart } from 'src/components/Cart/Cart';

type ShoppingCardProps = {
    children: React.ReactNode;
};

type ShoppingContextType = {
    state: StateType;
    increaseCartQty: (item: CartItemType) => void;
    decreaseCartQty: (item: CartItemType) => void;
    getItemQty: (id: number) => number;
    getCartItems: () => CartItemType[];
    // removeCartItem: () => void;
};

const ShoppingContext = createContext<ShoppingContextType | undefined>(undefined);

export const ShoppingContextProvider = ({ children }: ShoppingCardProps) => {
    const [state, dispatch] = useReducer(shoppingCartReducer, { cart: [] });

    const increaseCartQty = (item: CartItemType) => {
        dispatch({
            type: 'INCREASE',
            payload: item,
        });
    };

    const decreaseCartQty = (item: CartItemType) => {
        dispatch({
            type: 'DECREASE',
            payload: item,
        });
    };

    const getCartItems = () => {
        const items = state.cart.filter(i => i.qty > 0);

        return items;
    }

    const getItemQty = (id: number): number => {
        const item = state.cart.find((i) => i.id === id);

        return item?.qty ?? 0;
    };

    // const removeCartItem = () => {};

    return (
        <ShoppingContext.Provider 
            value={{ 
                increaseCartQty, 
                state, 
                getItemQty, 
                decreaseCartQty, 
                getCartItems,
            }}
        >
            {children}
            <Cart />
        </ShoppingContext.Provider>
    );
};

export const useCart = (): ShoppingContextType => {
    const context = useContext(ShoppingContext);

    if (!context) {
        throw new Error('useCart must be used within a ShoppingContextProvider');
    }

    return context;
};
