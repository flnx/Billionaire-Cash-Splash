type ActionType = {
    INCREASE: 'INCREASE';
    DECREASE: 'DECREASE';
    QUANTITY: 'QUANTITY';
    REMOVE: 'REMOVE';
};

type CartItemType = {
    id: number;
    name:  string;
    price: number;
    imageUrls: string[];
};

type ReducerAction = {
    type: string;
    payload?: CartItemType;
};

type StateType = {
    cart: CartItemType[];
};

// const shoppingCartReducer = (state, action) => {

// };
