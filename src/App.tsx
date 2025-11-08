
import './App.css'
import { type RouteObject, useRoutes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import StockAnalysis from './pages/StockAnalysis';


//路由定義
const routerConfig: RouteObject[] = [
  { path: '/', element: <HomePage /> },
  { path: '/stock-analysis', element: <StockAnalysis /> },
  { path: '/stock-analysis/:stockSymbol', element: <StockAnalysis /> },
  { path:"*", element:<NotFound />}
];




function App() { 
  const element = useRoutes(routerConfig);
  
  return (
    <>      
      <div className=" h-screen w-screen flex flex-col items-center justify-center bg-gray-200">
        {element}
      </div>      
    </>
  )
}

export default App













