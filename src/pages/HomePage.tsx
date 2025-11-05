
import Header from '../layouts/Header';

import { IoSearch } from "react-icons/io5";

const HomePage:React.FC = () =>{

    return (
        <div className=" w-full h-full flex flex-col items-center justify-center bg-gray-200 gap-4 bg-linear-to-tr from-teal-100 via-gray-100 to-gray-200 ">
            <div className=" w-full h-fit absolute top-0 ">
                <Header />
            </div>

            <div className="w-full h-fit flex flex-col items-center justify-center gap-4 ">
                <IoSearch className=" text-cyan-600 text-8xl animate-bounce " />            
                <h1 className=" text-2xl font-bold bg-linear-to-r from-cyan-700 via-cyan-500 to-teal-900 bg-clip-text text-transparent animate-pulse ">您最佳的台灣上市公司價值分析助理</h1>
                <div className=" flex flex-row items-center border border-gray-300 rounded-full px-4 py-2 gap-2 bg-white shadow-md ">
                    <input 
                        type="text" 
                        placeholder="輸入股票代號或公司名稱..." 
                        className=" outline-none border-none bg-transparent px-2 w-72 text-md text-gray-600 placeholder-gray-400 "
                    />
                    <button className=" bg-cyan-600 text-white px-4 py-2 rounded-full font-bold hover:scale-105 cursor-pointer ">搜尋</button>
                </div>
            </div>                            
        </div>
    )
}

export default HomePage;












































