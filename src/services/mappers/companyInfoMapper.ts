
import type { CompanyInfo } from '../../types/companyInfo';
import type { RawCompanyInfo } from '../../types/api/rawCompanyInfo';
import { parseToNumber } from '../../utils/parseToNumber';

export const mapRawCompanyInfoToCompanyInfo = (raw: RawCompanyInfo): CompanyInfo => {
    return {
        reportDate: raw['出表日期'],
        companyId: raw['公司代號'],
        companyName: raw['公司名稱'],
        companyAbbr: raw['公司簡稱'],
        foreignRegistrationCountry: raw['外國企業註冊地國'],
        industryCategory: raw['產業別'],
        address: raw['住址'],
        taxId: raw['營利事業統一編號'],
        chairman: raw['董事長'],
        generalManager: raw['總經理'],
        spokesperson: raw['發言人'],
        spokespersonTitle: raw['發言人職稱'],
        actingSpokesperson: raw['代理發言人'],
        mainPhone: raw['總機電話'],
        dateEstablished: raw['成立日期'],
        dateListed: raw['上市日期'],
        parValueDescription: raw['普通股每股面額'],
        paidInCapital: parseToNumber(raw['實收資本額']),
        privatePlacementShares: parseToNumber(raw['私募股數']),
        preferredShares: parseToNumber(raw['特別股']),
        financialReportType: raw['編制財務報表類型'],
        stockTransferAgent: raw['股票過戶機構'],
        transferPhone: raw['過戶電話'],
        transferAddress: raw['過戶地址'],
        auditorFirm: raw['簽證會計師事務所'],
        auditor1: raw['簽證會計師1'],
        auditor2: raw['簽證會計師2'],
        englishAbbr: raw['英文簡稱'],
        englishAddress: raw['英文通訊地址'],
        faxNumber: raw['傳真機號碼'],
        email: raw['電子郵件信箱'],
        website: raw['網址'],
        outstandingShares: parseToNumber(raw['已發行普通股數或TDR原股發行股數']),
    };
}
















