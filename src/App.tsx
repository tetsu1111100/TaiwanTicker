
import './App.css'

import CompanyProfile from './features/companyInfo/components/companyProflie';
import DividentdYieldValuation from './features/portfolio/dividendYieldValuation/components/dividendYieldValuation';
import PERatioValuation from './features/portfolio/peRatioValuation/components/peRatioValuation';
import DCFValuation from './features/portfolio/dcfValuation/components/dcfValuation';

function App() { 
  

  return (
    <>      
      <div className=" h-screen w-screen flex items-center justify-center bg-gray-200">
        <div className=" grid grid-cols-3 gap-4 p-10 overflow-auto h-full w-full ">
          <CompanyProfile companyId="2330" />
          <DividentdYieldValuation />
          <PERatioValuation />
          <DCFValuation />
        </div>
      </div>
    </>
  )
}

export default App
