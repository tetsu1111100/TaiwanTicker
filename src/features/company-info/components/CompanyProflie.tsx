
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';

import type { CompanyProfileProps } from '../types/companyProfileProps';
import type { CompanyInfo } from '../../../types/companyInfo';

import { fetchCompanyInfo } from '../../../services/fetchCompanyInfo';

const CompanyProfile: React.FC<CompanyProfileProps> = (props) => {

    const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);

    useEffect(() => {
        const getCompanyInfo = async () => {
        try {
            const allCompanyInfo: CompanyInfo[] | null = await fetchCompanyInfo();
            setCompanyInfo(allCompanyInfo?.find(info => info.companyId === props.companyId) || null);
        } catch (error) {
            console.error(error);
        }
        };
        getCompanyInfo();
    }, []);

    const handleFollowClick = () => {
        // Handle follow button click
    };

    /*
    const handleUnfollowClick = () => {
        // Handle unfollow button click
    };
    */

    //產業別代碼轉換成中文名稱
    const industryMap = (industryCategory:string) => {
        switch(industryCategory) {
            case '4':
                return '紡織纖維';
            case '5':
                return '電機機械';
            case '10':
                return '鋼鐵工業';
            case '11':
                return '橡膠工業';            
            case '14':
                return '建材營造';
            case '15':
                return '航運業';
            case '16':
                return '觀光事業';
            case '17':
                return '金融業';
            case '18':
                return '貿易百貨業';
            case '20':
                return '其他';
            case '21':
                return '化學工業';
            case '22':
                return '生技醫療';
            case '23':
                return '油電燃氣業';
            case '24':
                return '半導體業';
            case '25':
                return '電腦及週邊設備業';
            case '26':
                return '光電業';
            case '27':
                return '通信網路業';
            case '28':
                return '電子零組件業';
            case '29':
                return '電子通路業';
            case '30':
                return '資訊服務業';
            case '31':
                return '其他電子業';
            default:
                return industryCategory;
        }
    };
    

    return (
        <div className=" flex flex-col gap-2 h-full w-full p-4 rounded-md shadow-md text-gray-700 bg-white max-h-[420px] overflow-auto ">            
            <div className=" flex justify-between items-center ">
                <div>
                    <span className=" font-bold text-lg ">{companyInfo?.companyId} {companyInfo?.companyAbbr}</span>
                </div>
                <div>
                    <span className=" rounded-xl text-gray-500 bg-gray-100 text-sm px-2 py-1 cursor-pointer hover:bg-gray-600 hover:text-white " onClick={handleFollowClick}>+追蹤</span>
                </div>
            </div>

            <div className=" flex flex-col text-sm gap-1 ">
                <div>
                    <span className="  ">公司網址： 
                        <a 
                            href={companyInfo?.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className=" text-blue-500 underline "
                        >{companyInfo?.website}</a>
                    </span>
                </div>

                <div className=" flex flex-row justify-between">
                    <div className=" flex flex-col gap-1 ">
                        <span className=" ">成立：                    
                            {dayjs(companyInfo?.dateEstablished).format('YYYY/MM/DD')}
                        </span>
                        <span className=" ">上市：
                            {dayjs(companyInfo?.dateListed).format('YYYY/MM/DD')}
                        </span>
                        <span className=" ">產業類別：
                            {industryMap(companyInfo?.industryCategory ?? '')}
                        </span>
                        <span className=" ">資本額：
                            {companyInfo?.paidInCapital?.toLocaleString()} 元
                        </span>
                        <span>
                            已發行普通股數：
                            {companyInfo?.outstandingShares?.toLocaleString()} 股
                        </span>
                    </div>

                    <div className=" flex flex-col gap-1 items-end">
                        <span className=" text-2xl text-red-600 font-bold ">
                            1,500 元
                        </span>
                        <span className=" text-xs text-gray-500 ">
                            10/31 收盤價
                        </span>
                    </div>
                </div>
                    
                    
                <hr className=" my-2 text-gray-200 " />
            </div>
            
            <div>
                <span className=" ">
依客戶之訂單與其提供之產品設計說明，以從事製造與銷售積體電路 以及其他晶圓半導體裝置。提供前述產品之封裝與測試服務、積體電 路之電腦輔助設計技術服務。提供製造光罩及其設計服務。
                </span>
            </div>

            <div>
                <br />
                <span className=" text-sm text-gray-500 ">本估值模型僅供參考，不構成任何投資建議。</span>
            </div>
        </div>
    )
};


export default CompanyProfile;



/*
<div>
    <span className=" rounded-full bg-red-600 text-white text-sm px-2 py-1 ">買</span>
    <span className=" ml-2 rounded-full bg-yellow-400 text-white text-sm px-2 py-1 ">持有</span>
    <span className=" ml-2 rounded-full bg-green-600 text-white text-sm px-2 py-1 ">賣</span>
</div>
*/


















