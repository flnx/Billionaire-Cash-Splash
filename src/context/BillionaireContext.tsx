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
    addToInventory: (amount: number, clearCartCB: () => void, items: CartItemType[]) => void;
    inventory: CartItemType[];
    billionaire: billionaireType | null;
    isBillionaireSelected: boolean;
};

const BillionaireContext = createContext<BillionaireContextType | undefined>(
    undefined
);

export const BillionaireContextProvider = ({ children }: BillionareContextProps) => {
    const [billionaire, setBillionaire] = useState<null | billionaireType>(null);
    const [inventory, setInventory] = useState<CartItemType[]>([]);

    const isBillionaireSelected = billionaire ? true : false;

    const selectBillionaire = (selectedBillionaire: billionaireType) => {
        if (!isBillionaireSelected) {
            setBillionaire(selectedBillionaire);
        }
    };

    const addItems = (items: CartItemType[]) => {
        setInventory((prev: CartItemType[]) => {
            const newItems: CartItemType[] = items.map((newItem) => {
                const existingItem = prev.find((x) => x.id === newItem.id);

                if (existingItem) {
                    return {
                        ...existingItem,
                        qty: (existingItem.qty ?? 0) + newItem.qty,
                    };
                }

                return newItem;
            });

            const filtered: CartItemType[] = prev.filter(
                (i) => !newItems.some((x) => x.id === i.id)
            );

            return [...filtered, ...newItems];
        });
    };

    const addToInventory = (amount: number, clearCartCB: () => void, items: CartItemType[]) => {
        if (billionaire && amount <= billionaire.netWorth && items.length !== 0) {
            setBillionaire((prev) => {
                if (!prev) return prev;

                const newNetWorth = Math.max(0, prev.netWorth - amount).toFixed(2);

                const updatedBillionaire = {
                    ...prev,
                    netWorth: parseFloat(newNetWorth),
                };

                addItems(items);
                clearCartCB();

                return updatedBillionaire;
            });
        }
    };

    return (
        <BillionaireContext.Provider
            value={{
                selectBillionaire,
                billionaire,
                isBillionaireSelected,
                addToInventory,
                inventory,
            }}
        >
            {children}
        </BillionaireContext.Provider>
    );
};

export const useBillionaire = (): BillionaireContextType => {
    const context = useContext(BillionaireContext);

    if (!context) {
        throw new Error(
            'useBillionaire must be used within a BillionaireContextProvider'
        );
    }

    return context;
};
