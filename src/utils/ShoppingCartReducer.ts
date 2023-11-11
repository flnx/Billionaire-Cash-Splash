type ActionType = 'INCREASE' | 'DECREASE' | 'QUANTITY' | 'REMOVE';

export type CartItemType = {
    id: number;
    name: string;
    price: number;
    imageUrls: string[];
    qty: number;
};

export type ReducerActions = {
    type: ActionType;
    payload?: CartItemType;
};

export type StateType = {
    cart: CartItemType[];
};

export const shoppingCartReducer = (state: StateType, action: ReducerActions) => {
    switch (action.type) {
        case 'INCREASE': {
            if (!action.payload) {
                throw new Error(
                    'action.payload is missing in INCREASE section'
                );
            }

            const { id } = action.payload;

            const updatedCart = state.cart.map((item) =>
                item.id === id ? { ...item, qty: (item.qty || 0) + 1 } : item
            );

            return {
                ...state,
                cart: updatedCart,
            };
        }

        default:
            return state;
    }
};
