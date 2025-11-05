

const DCFValuation: React.FC = ()=>{

    return (
        <div className=" flex flex-col gap-2 h-full w-full p-4 rounded-md shadow-md text-gray-700 bg-white max-h-[500px] min-h-[420px] overflow-auto ">
            <div className=" flex justify-between items-center ">
                <span className="font-bold">現金流折現法(DCF)-估值</span>
                <span className=" flex  gap-1 items-center ">
                    <span>預估合理價：</span> 
                    <span className=" text-xl font-bold text-blue-600 ">15 元</span>
                    <span className=" px-2 py-1 m-1 rounded-full text-white bg-red-500 font-bold ">買進</span>
                </span>                
            </div>

            <div className=" flex flex-col gap-1 ">
                <div className=" flex flex-col gap-2 ">
                    <span>將公司未來所有的現金加總，並轉換成今天的價值。</span>
                    <span className="text-sm text-gray-500">
                        本方法採自由現金流(FCF)計算，即扣掉公司各式支出後，
                        所能自由使用的現金流。
                    </span>
                </div>
                <hr className=" my-2 text-gray-200 " />

                <div className=" flex flex-col justify-center gap-2 ">
                    <div className=" flex flex-row gap-2 items-center ">
                        <span className=" flex items-center justify-center rounded-full bg-black text-white text-xs p-1 h-5 w-5 text-center font-bold ">1</span>
                        <span className=" flex items-center ">預測未來現金流 (未來5年公司成長率)</span>
                    </div>
                    <div className="pl-7 flex flex-col gap-1 text-sm ">
                        <span className=" font-bold ">自由現金流 100元</span>
                        <span className=" font-bold ">年成長率 10%</span>
                        <span className=" font-bold ">未來5年將有 161元自由現金流</span>
                    </div>
                </div>

                <div className=" flex flex-col justify-center gap-2 ">
                    <div className=" flex flex-row gap-2 items-center ">
                        <span className=" flex items-center justify-center rounded-full bg-black text-white text-xs p-1 h-5 w-5 text-center font-bold ">2</span>
                        <span className=" flex items-center ">計算現金流「終值」 (第5年至永久，所有現金流加總)</span>
                    </div>
                    <div className="pl-7 flex flex-col gap-1 text-sm ">
                        <span className=" bg-gray-700 text-white rounded-md p-1 font-bold px-2 w-fit ">終值 = (首年自由現金流 × (1 + 永久成長率)) / (折現率 - 永久成長率)</span>
                        <span className=" font-bold ">終值 3,000
                            <span className="font-normal"> = ( 161 × ( 1 + 0.025 ) ) / ( 0.08 - 0.025 )</span>
                        </span>
                        
                    </div>
                </div>

                <div className=" flex flex-col justify-center gap-2 ">
                    <div className=" flex flex-row gap-2 items-center ">
                        <span className=" flex items-center justify-center rounded-full bg-black text-white text-xs p-1 h-5 w-5 text-center font-bold ">3</span>
                        <span className=" flex items-center ">將未來現金流轉成今天的價值</span>
                    </div>
                    <div className="pl-7 flex flex-col gap-1 text-sm ">
                        <span className=" font-bold ">使用加權平均資本成本(WACC)進行折現率計算</span>
                        <span className=" font-bold ">折現率 8%</span>
                        <span className=" font-bold ">企業總價值(EV) = 2,200元</span>
                    </div>
                </div>

                <div className=" flex flex-col justify-center gap-2 ">
                    <div className=" flex flex-row gap-2 items-center ">
                        <span className=" flex items-center justify-center rounded-full bg-black text-white text-xs p-1 h-5 w-5 text-center font-bold ">4</span>
                        <span className=" flex items-center ">將「企業價值」轉換成「股權價值」 (公司價值)</span>
                    </div>
                    <div className="pl-7 flex flex-col gap-1 text-sm ">
                        <span className=" bg-gray-700 text-white rounded-md p-1 font-bold w-fit px-2 ">股權價值 = 企業價值(EV) + 現金及短期投資 - 總負債</span>
                        <span className=" font-bold ">股權價值 1,500元
                            <span className="font-normal"> = 2,200 + 300 - 1,000</span>
                        </span>
                    </div>
                </div>

                <div className=" flex flex-col justify-center gap-2 ">
                    <div className=" flex flex-row gap-2 items-center ">
                        <span className=" flex items-center justify-center rounded-full bg-black text-white text-xs p-1 h-5 w-5 text-center font-bold ">5</span>
                        <span className=" flex items-center ">計算出股票的「合理價」</span>
                    </div>
                    <div className="pl-7 flex flex-col gap-1 text-sm">
                        <span className=" bg-gray-700 text-white rounded-md p-1 font-bold w-fit px-2 ">股票合理價 = 股權價值 / 流通股數</span>
                        <span className=" font-bold ">合理價 15元
                            <span className="font-normal"> = 1500 / 100</span>
                        </span>
                    </div>
                </div>
            </div>

            <div>
                <br />
                <span className=" text-sm text-gray-500 ">
                    WACC可以綜合考慮一家公司的風險，計算出相對應的「客觀合理折現率」。
                </span>
            </div>
        </div>
    )
}


export default DCFValuation;




























