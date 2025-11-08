
import { createContext, useContext } from 'react';

// 1. Context 數據類型定義 (Typescript Interface/Type)
export interface StockAnalysisContextProps {
    stockSymbol: string;
    setStockSymbol: (symbol: string) => void;
}

export interface StockAnalysisProviderProps {
    children: React.ReactNode;
    stockAnalysisContextProps: StockAnalysisContextProps;
}

//-------------------------------------------------------------------------------------------------------------------

// 2. Context 定義 (Context Object)
export const StockAnalysisContext = createContext<StockAnalysisContextProps | undefined>(undefined);

//-------------------------------------------------------------------------------------------------------------------

// 3. Provider 組件定義 (The Supplier)
export const StockAnalysisProvider: React.FC<StockAnalysisProviderProps> = ({ children, stockAnalysisContextProps }) => {    
    return (
        <StockAnalysisContext.Provider value={stockAnalysisContextProps}>
            {children}
        </StockAnalysisContext.Provider>
    );
};

//-------------------------------------------------------------------------------------------------------------------

// 4. 消費 Hook 定義 (The Consumer Wrapper)
export const useStockAnalysis = () =>{
    const context = useContext(StockAnalysisContext);

    // 額外檢查：如果組件沒有被 Provider 包裹，拋出錯誤
    if (context === undefined) {
        throw new Error('useStockAnalysis 必須在 StockAnalysisProvider 內部使用。');
    }

    return context;
}































