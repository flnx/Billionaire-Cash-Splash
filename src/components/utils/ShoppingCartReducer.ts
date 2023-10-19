// type ActionType = {
//     INCREASE: 'INCREASE';
//     DECREASE: 'DECREASE';
//     QUANTITY: 'QUANTITY';
//     REMOVE: 'REMOVE';
// };

// type CartItemType = {
//     id: number;
//     name:  string;
//     price: number;
//     imageUrls: string[];
// };

// type ReducerAction = {
//     type: ActionType;
//     payload?: CartItemType;
// };

// type StateType = {
//     cart: CartItemType[];
// };

// const shoppingCartReducer = (state: StateType, action: ReducerAction) => {

// };

type ActionType = 'INCREASE' | 'DECREASE' | 'QUANTITY' | 'REMOVE';

type CartItemType = {
    id: number;
    name: string;
    price: number;
    imageUrls: string[];
};

type ReducerActions = {
    type: ActionType;
    payload?: CartItemType;
};

type StateType = {
    cart: CartItemType[];
};

const shoppingCartReducer = (state: StateType, action: ReducerActions) => {
    
};
