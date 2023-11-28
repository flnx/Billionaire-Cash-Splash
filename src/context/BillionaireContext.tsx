import { createContext, useState, useContext } from 'react';

import { CartItemType } from 'src/utils/ShoppingCartReducer';

type BillionareContextProps = {
    children: React.ReactNode;
};

type billionaireType = {
    id: number;
    netWorth: number;
    imgUrl: string;
    name: string;
};


type BillionaireContextType = {
    selectBillionaire: (selectedBillionaire: billionaireType) => void;
    decreaseNetWorth: (amount: number, clearCartCB: () => void) => void;
    addToInventory: (item: CartItemType) => void;
    inventory: CartItemType[];
    billionaire: billionaireType | null;
    isBillionaireSelected: boolean;
};

const BillionaireContext = createContext<BillionaireContextType | undefined>(undefined);

export const BillionaireContextProvider = ({ children }: BillionareContextProps) => {
    const [billionaire, setBillionaire] = useState<null | billionaireType>(null);
    const [inventory, setInventory] = useState<CartItemType[]>([]);
    
    const isBillionaireSelected = billionaire ? true : false;

    const selectBillionaire = (selectedBillionaire: billionaireType) => {
        if (!isBillionaireSelected) {
            setBillionaire(selectedBillionaire);
        } 
    };

    const decreaseNetWorth = (amount: number, clearCartCB: () => void) => {
        if (billionaire && amount <= billionaire.netWorth) {
            setBillionaire((prev) => {
                if (!prev) return prev;

                const newNetWorth = Math.max(0, prev.netWorth - amount).toFixed(2);

                const updatedBillionaire = { 
                    ...prev, 
                    netWorth: parseFloat(newNetWorth) 
                };

                clearCartCB();

                return updatedBillionaire;
            });
        }
    };

    const addToInventory = (item: CartItemType) => {
        setInventory((prev: CartItemType[]) => {
            const existingItem = prev.some((i) => i.id === item.id);

            if (existingItem) {
                const updatedInventory = prev.map((i) =>
                    i.id === item.id ? { ...i, qty: (i.qty ?? 0) + item.qty } : i
                );

                return updatedInventory;
            }

            return [...prev, item];
        });
    };

    return (
        <BillionaireContext.Provider
            value={{
                selectBillionaire,
                billionaire,
                isBillionaireSelected,
                decreaseNetWorth,
                addToInventory,
                inventory
            }}
        >
            {children}
        </BillionaireContext.Provider>
    );
};

export const useBillionaire = (): BillionaireContextType => {
    const context = useContext(BillionaireContext);

    if (!context) {
        throw new Error('useBillionaire must be used within a BillionaireContextProvider');
    }

    return context;
};
