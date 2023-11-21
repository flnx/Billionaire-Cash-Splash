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
    billionaire: billionaireType | null;
}

const BillionaireContext = createContext<BillionaireContextType | undefined>(undefined);

export const BillionaireContextProvider = ({children }: BillionareContextProps) => {
    const [billionaire, setBillionaire] = useState<null | billionaireType>(null);

    const selectBillionaire = (selectedBillionaire: billionaireType) => {
        setBillionaire(selectedBillionaire);
    };

    return (
        <BillionaireContext.Provider value={{ selectBillionaire, billionaire }}>
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
}
