
import { IoSearch } from "react-icons/io5";

const Header:React.FC = () =>{

    return (
        <div className="w-full h-16 bg-white shadow-md flex items-center px-6 ">
            <div className=" flex flex-row items-center justify-center gap-3 ">
                <span className=" rounded-md py-1 px-3 font-bold text-xl bg-gray-50 text-cyan-600 hover:scale-105 cursor-pointer ">TaiwanTicker</span>
                <button className="text-gray-500 text-md font-bold py-1 cursor-pointer hover:scale-110 hover:text-cyan-700 ">個股分析</button>
                <button className="text-gray-500 text-md font-bold py-1 cursor-pointer hover:scale-110 hover:text-cyan-700 ">技術分析</button>
                <button className="text-gray-500 text-md font-bold py-1 cursor-pointer hover:scale-110 hover:text-cyan-700 ">產業報告與新聞</button>
            </div>
            <div>
                <div className=" ml-10 flex flex-row items-center border border-gray-300 rounded-md px-2 py-1 gap-2 ">
                    <IoSearch className=" text-gray-400 text-xl " />
                    <input 
                        type="text" 
                        placeholder="輸入股票代號或公司名稱..." 
                        className=" outline-none border-none bg-transparent w-72 text-md text-gray-600 placeholder-gray-400 "
                    />
                </div>
            </div>
            <div className="flex flex-row items-center ml-auto gap-4 ">
                <button className=" flex items-end ml-auto bg-cyan-600 text-white px-4 py-2 rounded-md font-bold hover:scale-105 cursor-pointer ">登入 / 註冊</button>                
            </div>
        </div>
    )
}

export default Header;




























