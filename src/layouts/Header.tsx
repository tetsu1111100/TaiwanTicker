
import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import _ from 'lodash';

import { IoSearch } from "react-icons/io5";

const Header:React.FC = () =>{

    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState('');
    const searchStockRef = useRef<HTMLInputElement>(null);
    
    //Search
    const handleButtonClick = ()=>{
        //console.log(searchStockRef.current?.value);
        const stockSymbol = searchStockRef.current?.value;
        if (_.isEmpty(stockSymbol)) return;
        setSearchInput('');
        navigate(`/stock-analysis/${stockSymbol}`);
    }
    
    const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>)=>{
        // 檢查按下的鍵是否為 'Enter'
        if (e.key === 'Enter'){

            // 阻止事件傳播，避免其他父元件的潛在行為
            e.preventDefault();

            //console.log(searchStockRef.current?.value);
            handleButtonClick();
        }
    }

    return (
        <div className="w-full h-16 bg-white shadow-md flex items-center px-6 ">
            <div className=" flex flex-row items-center justify-center gap-3 ">
                <span className=" rounded-md py-1 px-3 font-bold text-xl bg-gray-50 text-cyan-600 hover:scale-105 cursor-pointer ">
                    <Link to={"/"}>TaiwanTicker</Link>
                </span>
                <Link to={"/stock-analysis/"} className="text-gray-500 text-md font-bold py-1 cursor-pointer hover:scale-110 hover:text-cyan-700 ">個股分析</Link>
                <Link to={""} className="text-gray-500 text-md font-bold py-1 cursor-pointer hover:scale-110 hover:text-cyan-700 ">技術分析</Link>
                <Link to={""} className="text-gray-500 text-md font-bold py-1 cursor-pointer hover:scale-110 hover:text-cyan-700 ">產業報告與新聞</Link>
            </div>
            <div>
                <div className=" ml-10 flex flex-row items-center border border-gray-300 rounded-full px-2 py-1 gap-2 ">
                    <input 
                        ref={searchStockRef}
                        onKeyDown={handleKeyDown}
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        type="text" 
                        placeholder="輸入股票代號或公司名稱..." 
                        className=" outline-none border-none bg-transparent w-72 px-3 py-1 text-md text-gray-600 placeholder-gray-400 "
                    />
                    <IoSearch 
                        onClick={handleButtonClick}
                        className=" text-gray-400 mr-1 text-3xl cursor-pointer rounded-full p-1 hover:text-cyan-100 hover:bg-cyan-700 " 
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




























