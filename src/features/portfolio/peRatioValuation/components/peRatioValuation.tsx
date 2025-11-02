

const PERatioValuation: React.FC = ()=>{

    return (
        <div className=" flex flex-col gap-2 h-full w-full p-4 rounded-md shadow-md text-gray-700 bg-white max-h-[420px] overflow-auto ">
            <div className=" flex justify-between items-center ">
                <span className="font-bold">本益比(P/E Ratio)-估值</span>
                <span className=" flex  gap-1 items-center ">
                    <span>預估合理價：</span> 
                    <span className=" text-xl font-bold text-blue-600 ">1184 元</span>
                    <span className=" px-2 py-1 m-1 rounded-full text-white bg-green-500 font-bold ">賣出</span>
                </span>                
            </div>

            <div className=" flex flex-col gap-1 ">
                <div className=" flex flex-col gap-1 ">
                    <span>本益比 = 股價 / 每股盈餘</span>
                    <span>合理股價 = 每股盈餘 * 合理本益比</span>
                </div>
                <hr className=" my-2 text-gray-200 " />

                <div className=" flex items-center gap-2 ">
                    <span className=" font-bold ">本益比</span>
                    <span className=" font-bold ">26.64</span>
                    <span> = 1500 / 56.31</span>
                </div>
                <br />

                <div>
                    <span className=" font-bold ">5年內最高本益比</span>
                    <span className=" font-bold "> 32.11</span>                    
                </div>

                <div className="">
                    <span className=" font-bold ">5年內最低本益比</span>
                    <span className=" font-bold "> 10.41</span>                    
                </div>
                
                <div className="">
                    <span className=" font-bold ">5年內平均本益比</span>
                    <span className=" font-bold "> 21.02</span>                    
                </div>
                <br />

                <div>
                    <span className=" font-bold ">合理價</span>
                    <span className=" font-bold "> 1184</span>
                    <span> = 56.31 * 21.02</span>
                </div>
            </div>

            <div>
                <br />
                <span className=" text-sm text-gray-500 ">
                    本益比(P/E Ratio)不會考慮到公司的負債。
                </span>
            </div>
        </div>
    )
}


export default PERatioValuation;




























