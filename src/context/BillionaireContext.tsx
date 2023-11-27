import { createContext, useState, useContext } from 'react';

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
    billionaire: billionaireType | null;
    isBillionaireSelected: boolean;
};

const BillionaireContext = createContext<BillionaireContextType | undefined>(undefined);

export const BillionaireContextProvider = ({ children }: BillionareContextProps) => {
    const [billionaire, setBillionaire] = useState<null | billionaireType>(null);
    
    const isBillionaireSelected = billionaire ? true : false;

    const selectBillionaire = (selectedBillionaire: billionaireType) => {
        if (!isBillionaireSelected) {
            setBillionaire(selectedBillionaire);
        } 
    };

    const decreaseNetWorth = (amount: number, clearCartCB: () => void) => {
        if (billionaire && amount <= billionaire.netWorth) {
            setBillionaire((prevBillionaire) => {
                if (!prevBillionaire) return prevBillionaire;

                const newNetWorth = Math.max(0, prevBillionaire.netWorth - amount).toFixed(2);
                const updatedBillionaire = { ...prevBillionaire, netWorth: parseFloat(newNetWorth) };

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
                decreaseNetWorth,
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
