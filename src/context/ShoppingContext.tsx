import { createContext, useReducer, useState } from 'react';
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
    openCart: () => void;
    closeCart: () => void;
    removeFromCart: (item: CartItemType) => void;
    clearCart: () => void;
    isOpen: boolean;
    subTotal: number;
    itemsInCart: CartItemType[];
    itemsToPopUp: string[];
    addPopUpItem: (item: string) => void;
};

const ShoppingContext = createContext<ShoppingContextType | undefined>(
    undefined
);

export const ShoppingContextProvider = ({ children }: ShoppingCardProps) => {
    const [state, dispatch] = useReducer(shoppingCartReducer, { cart: [] });
    const [isOpen, setIsOpen] = useState(false);
    const [itemsToPopUp, setItemsToPopUp] = useState<string[]>([]);

    const addPopUpItem = (newItem: string) => {
        setItemsToPopUp((prev) => [...prev, newItem]);

        setTimeout(() => {
            setItemsToPopUp((prev) => prev.slice(1));
        }, 1500);
    };
    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

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

    const removeFromCart = (item: CartItemType) => {
        dispatch({
            type: 'REMOVE',
            payload: item,
        });
    };

    const getItemQty = (id: number): number => {
        const item = state.cart.find((i) => i.id === id);

        return item?.qty ?? 0;
    };

    const clearCart = () => dispatch({ type: 'RESET' });

    const subTotal = state.cart.reduce(
        (sum, item) => (sum += item.price * item.qty),
        0
    );
    const itemsInCart = state.cart.filter((i) => i.qty > 0);

    return (
        <ShoppingContext.Provider
            value={{
                increaseCartQty,
                state,
                getItemQty,
                decreaseCartQty,
                itemsInCart,
                subTotal,
                openCart,
                closeCart,
                removeFromCart,
                isOpen,
                clearCart,
                addPopUpItem,
                itemsToPopUp
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
        throw new Error(
            'useCart must be used within a ShoppingContextProvider'
        );
    }

    return context;
};
