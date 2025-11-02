
import './App.css'

import CompanyProfile from './features/companyInfo/components/companyProflie';
import DividentdYieldValuation from './features/portfolio/dividendYieldValuation/components/dividendYieldValuation';


function App() { 
  

  return (
    <>      
      <div className=" h-screen w-screen flex items-center justify-center bg-gray-200">
        <div className=" grid grid-cols-3 gap-4 p-10  ">
          <CompanyProfile companyId="2330" />
          <DividentdYieldValuation />
        </div>
      </div>
    </>
  )
}

export default App
