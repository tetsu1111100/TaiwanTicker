

const MultipleOfEarningsValuation: React.FC = ()=>{

    return (
        <div className=" flex flex-col gap-2 h-full w-full p-4 rounded-md shadow-md text-gray-700 bg-white max-h-[500px] min-h-[420px] overflow-auto ">
            <div className=" flex justify-between items-center ">
                <span className="font-bold">盈餘倍數法-估值</span>
                <span className=" flex  gap-1 items-center ">
                    <span>預估合理價：</span> 
                    <span className=" text-xl font-bold text-blue-600 ">1184 元</span>
                    <span className=" px-2 py-1 m-1 rounded-full text-white bg-red-500 font-bold ">買進</span>
                </span>                
            </div>

            <div className=" flex flex-col gap-1 ">
                <div className=" flex flex-col gap-1 ">
                    <span>企業價值倍數 = 企業價值(EV) / EBITDA</span>
                    <span>企業價值(EV) = EBITDA x 企業價值倍數</span>                    
                </div>
                <hr className=" my-2 text-gray-200 " />

                <div className=" flex items-center gap-2 ">
                    <span className=" bg-gray-700 text-white rounded-md p-1 font-bold w-fit px-2 ">
                        股票合理價(Fair Value) <br/>
                        = 企業價值(EV) / 流通股數 <br/>
                        = (EBITDA x <span className="text-amber-400">你對他的信心倍數</span>) / 流通股數
                    </span>
                </div>
                <br />
                
                <div className="">
                    <span className=" font-bold ">低倍數(悲觀的假設)</span>
                    <span className=" font-bold "> 5倍</span>                    
                </div>

                <div className="">
                    <span className=" font-bold ">中倍數(正常的假設)</span>
                    <span className=" font-bold "> 8倍</span>                    
                </div>

                <div className="">
                    <span className=" font-bold ">高倍數(樂觀的假設)</span>
                    <span className=" font-bold "> 15倍</span>                    
                </div>

                <br />

                <div>
                    <span className=" font-bold ">EBITDA息稅折舊攤銷前利潤，表示還沒扣掉「利息」、「稅金」與「折舊與攤銷」</span>                    
                </div>
            </div>

            <div>
                <br />
                <span className=" text-sm text-gray-500 ">
                    一般計算結果落在8~10為合理的正常值(依產業可能有所不同)。
                </span>
            </div>
        </div>
    )
}


export default MultipleOfEarningsValuation;




























