
import axios from 'axios';
import type { CompanyInfo } from '../types/companyInfo';
import { mapRawCompanyInfoToCompanyInfo } from '../services/mappers/companyInfoMapper';



/**
 * Fetches all company information from the Taiwan Stock Exchange Open Data API.
 * @returns An array of company information objects or null if an error occurs.
 * @throws An error if the fetch operation fails.
 */
export const fetchCompanyInfo = async (): Promise<CompanyInfo[] | null> =>{
    try{
        // 1. 取得原始 API 數據
        //const response = await axios.get('https://openapi.twse.com.tw/v1/opendata/t187ap03_L');
        const response = await axios.get('/api/twse/v1/opendata/t187ap03_L');   // 使用本地代理(因為有CORS問題)

        // 2. 執行數據轉換
        const transformedData:CompanyInfo[] = response.data.map((rawCompanyInfo: any) => mapRawCompanyInfoToCompanyInfo(rawCompanyInfo));

        // 3. 返回轉換後的數據
        return transformedData || null;
    } catch (error: any) {
        //console.error('Error fetching company info:', error);
        //return null;
        throw new Error('Error fetching company info: ' + error.message);
    }
}






/**
 * Fetches company information from the Taiwan Stock Exchange Open Data API.
 * @param ticker The stock ticker symbol of the company.
 * @returns The company information object or null if not found.
 * @throws An error if the fetch operation fails.
 */
/*
export const fetchCompanyInfo = async (ticker: string): Promise<CompanyInfo[] | null> =>{
    try{
        const response = await axios.get('https://openapi.twse.com.tw/v1/opendata/t187ap03_L');
        const companies = response.data;
        const company = companies.find((comp: any) => comp['公司代號'] === ticker);
        return company || null;
    } catch (error: any) {
        //console.error('Error fetching company info:', error);
        //return null;
        throw new Error('Error fetching company info: ' + error.message);
    }
}
*/








