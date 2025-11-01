

export interface CompanyInfo {
    reportDate: string; // "出表日期"
    companyId: string; // "公司代號"
    companyName: string; // "公司名稱"
    companyAbbr: string; // "公司簡稱"
    foreignRegistrationCountry: string; // "外國企業註冊地國"
    industryCategory: string; // "產業別"
    address: string; // "住址"
    taxId: string; // "營利事業統一編號"
    chairman: string; // "董事長"
    generalManager: string; // "總經理"
    spokesperson: string; // "發言人"
    spokespersonTitle: string; // "發言人職稱"
    actingSpokesperson: string; // "代理發言人"
    mainPhone: string; // "總機電話"
    dateEstablished: string; // "成立日期"
    dateListed: string; // "上市日期"
    parValueDescription: string; // "普通股每股面額" (保留原始描述字串)
    paidInCapital: number; // "實收資本額" (轉換為數字，更適合計算)
    privatePlacementShares: number; // "私募股數" (轉換為數字)
    preferredShares: number; // "特別股" (轉換為數字)
    financialReportType: string; // "編制財務報表類型"
    stockTransferAgent: string; // "股票過戶機構"
    transferPhone: string; // "過戶電話"
    transferAddress: string; // "過戶地址"
    auditorFirm: string; // "簽證會計師事務所"
    auditor1: string; // "簽證會計師1"
    auditor2: string; // "簽證會計師2"
    englishAbbr: string; // "英文簡稱"
    englishAddress: string; // "英文通訊地址"
    faxNumber: string; // "傳真機號碼"
    email: string; // "電子郵件信箱"
    website: string; // "網址"
    outstandingShares: number; // "已發行普通股數或TDR原股發行股數" (轉換為數字)
}















