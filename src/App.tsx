
import './App.css'

import Header from './layouts/Header';

import CompanyProfile from './features/company-info/components/CompanyProflie';
import DividentdYieldValuation from './features/portfolio/dividend-yield-valuation/components/DividendYieldValuation';
import PERatioValuation from './features/portfolio/pe-ratio-valuation/components/PERatioValuation';
import DCFValuation from './features/portfolio/dcf-valuation/components/DCFValuation';
import MultipleOfEarningsValuation from './features/portfolio/multiple-of-earnings-valuation/components/MultipleOfEarningsValuation';

function App() { 
  

  return (
    <>      
      <div className=" h-screen w-screen flex flex-col items-center justify-center bg-gray-200">
        <Header />
        <div className=" grid grid-cols-3 gap-4 p-10 overflow-auto h-full w-full ">
          <CompanyProfile companyId="2330" />
          <DividentdYieldValuation />
          <PERatioValuation />
          <DCFValuation />
          <MultipleOfEarningsValuation />
        </div>
      </div>
    </>
  )
}

export default App
