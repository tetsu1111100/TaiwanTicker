
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import _ from 'lodash';

import { StockAnalysisProvider, type StockAnalysisContextProps } from '../features/context/StockAnalysisContext';

import Header from '../layouts/Header';

import CompanyProfile from '../features/company-info/components/CompanyProflie';
import DividentdYieldValuation from '../features/portfolio/dividend-yield-valuation/components/DividendYieldValuation';
import PERatioValuation from '../features/portfolio/pe-ratio-valuation/components/PERatioValuation';
import DCFValuation from '../features/portfolio/dcf-valuation/components/DCFValuation';
import MultipleOfEarningsValuation from '../features/portfolio/multiple-of-earnings-valuation/components/MultipleOfEarningsValuation';


const StockAnalysis:React.FC = () =>{

    const navigate = useNavigate();
    
    //從URL取得股票代號
    const { stockSymbol } = useParams<{ stockSymbol: string }>();
    //console.log("Stock Symbol:", stockSymbol);

    useEffect(() => {
        //若無股票代號，導向預設股票代號頁面
        if (_.isEmpty(stockSymbol)){         
            navigate('/stock-analysis/2330');
        }
        else{
            handleSetStockSymbol(stockSymbol??'');
        }        
    }, [stockSymbol, navigate]);

    const handleSetStockSymbol = (newSymbol: string) => {        
        if (newSymbol && newSymbol !== stockSymbol) {
            navigate(`/stock-analysis/${newSymbol}`); 
        }
    };

    const stockAnalysisContextProps:StockAnalysisContextProps={
        stockSymbol: stockSymbol ?? '',
        setStockSymbol: handleSetStockSymbol
    }

    return (
        <StockAnalysisProvider stockAnalysisContextProps={stockAnalysisContextProps}>
            <div className=" w-full h-full gap-4 ">                
                <div className=" w-full h-fit fixed top-0 ">
                    <Header />
                </div>

                <div className=" pt-16 overflow-auto h-full w-full ">
                    <div className=" grid grid-cols-3 gap-4 overflow-auto h-full w-full p-10 ">
                        <CompanyProfile companyId={stockSymbol??''} />
                        <DividentdYieldValuation />
                        <PERatioValuation />
                        <DCFValuation />
                        <MultipleOfEarningsValuation />
                    </div>
                        
                </div>                
            </div>    
        </StockAnalysisProvider>    
    )
}

export default StockAnalysis;






/*
<StockAnalysisContext.Provider value={{ stockSymbol: stockSymbol || '2330', setStockSymbol: (symbol: string) => { navigate(`/stock-analysis/${symbol}`); } }}>
                <div className=" w-full h-fit fixed top-0 ">
                    <Header />
                </div>

                <div className=" pt-16 overflow-auto h-full w-full ">
                    <div className=" grid grid-cols-3 gap-4 overflow-auto h-full w-full p-10 ">
                        <CompanyProfile companyId="2330" />
                        <DividentdYieldValuation />
                        <PERatioValuation />
                        <DCFValuation />
                        <MultipleOfEarningsValuation />
                    </div>
                        
                </div>
            </StockAnalysisContext.Provider>
*/




























