

const DividentdYieldValuation: React.FC = ()=>{

    return (
        <div className=" flex flex-col gap-2 h-full w-full p-4 rounded-md shadow-md text-gray-700 bg-white max-h-[420px] overflow-auto ">
            <div className=" flex justify-between items-center ">
                <span className="font-bold">現金殖利率-估值</span>
                <span className=" flex  gap-1 items-center ">
                    <span>預估合理價：</span> 
                    <span className=" text-xl font-bold text-blue-600 ">380 元</span>
                    <span className=" px-2 py-1 m-1 rounded-full text-white bg-green-500 font-bold ">賣出</span>
                </span>                
            </div>

            <div className=" flex flex-col gap-1 ">
                <div className=" flex flex-col gap-1 ">
                    <span>現金殖利率 = ( 現金股息 / 股價 ) × 100%</span>
                    <span>合理股價 = ( 現金股息 / 自己預估的現金殖利率 ) × 100%</span>
                </div>
                <hr className=" my-2 text-gray-200 " />

                <div className=" flex items-center gap-2 ">
                    <span className=" font-bold ">現金殖利率</span>
                    <span className=" font-bold ">1.27</span>
                    <span> = ( 19 / 1500 ) × 100%</span>
                </div>
                <br />

                <div>
                    <span className=" font-bold ">便宜價</span>
                    <span className=" font-bold "> 190 元</span>
                    <span> = ( 19 / 0.1 ) × 100%</span>
                </div>

                <div className="">
                    <span className=" font-bold ">合理價</span>
                    <span className=" font-bold "> 380 元</span>
                    <span> = ( 19 / 0.05 ) × 100%</span>
                </div>

                <div>
                    <span className=" font-bold ">昂貴價</span>
                    <span className=" font-bold "> 760 元</span>
                    <span> = ( 19 / 0.25 ) × 100%</span>
                </div>
            </div>

            <div>
                <br />
                <span className=" text-sm text-gray-500 ">
                    若為不發現金股息的公司，則無法使用此估值法進行評估。
                </span>
            </div>
        </div>
    )
}


export default DividentdYieldValuation;




























