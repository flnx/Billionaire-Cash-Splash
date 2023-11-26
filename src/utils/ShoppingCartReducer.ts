type ActionType = 'INCREASE' | 'DECREASE' | 'REMOVE';

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
                throw new Error('action.payload is missing in INCREASE section');
            }

            const { id } = action.payload;
            const existingItem = state.cart.find((item) => item.id === id);

            if (existingItem) {
                const updatedCart = state.cart.map((item) =>
                    item.id === id
                        ? { ...item, qty: (item.qty || 0) + 1 }
                        : item
                );

                return {
                    ...state,
                    cart: updatedCart,
                };
            }

            return {
                ...state,
                cart: [...state.cart, { ...action.payload, qty: 1 }],
            };
        }

        case 'DECREASE': {
            if (!action.payload) {
                throw new Error('action.payload is missing in DECREASE section');
            }

            const { id } = action.payload;
            const existingItem = state.cart.find((item) => item.id === id);

            if (existingItem) {
                const updatedCart = state.cart
                    .map((item) =>
                        item.id === id ? { ...item, qty: item.qty - 1 } : item
                    )
                    .filter((item) => item.qty > 0);

                return {
                    ...state,
                    cart: updatedCart,
                };
            }

            return state;
        }

        case 'REMOVE': {
            if (!action.payload) {
                throw new Error('action.payload is missing in INCREASE section');
            }

            const { id } = action.payload;
            const updatedCart = state.cart.filter((i) => i.id !== id);

            return {
                ...state,
                cart: updatedCart,
            };
        }

        default:
            return state;
    }
};
