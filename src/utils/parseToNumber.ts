


/**
 * @description 安全地將 API 返回的字串（可能包含千分位逗號）轉換為數字。
 * @param value value 欲轉換的原始字串值 (可能是 null, undefined, 或包含逗號)
 * @param defaultValue defaultValue 如果轉換失敗或輸入無效時返回的預設數字 (預設為 0)
 * @returns 轉換後的數字 (number)
 */
export const parseToNumber = (value: string | number | null | undefined, defaultValue: number = 0): number => {
    // 1. 檢查輸入是否為 null 或 undefined
    if (value === null || value === 'undefined' || value === undefined) {
        return defaultValue;
    }

    // 2. 確保輸入是字串，並移除前後空白
    const strValue = String(value).trim();

    // 3. 移除千分位逗號 (e.g., "1,234,567" -> "1234567")
    const cleanedValue = strValue.replace(/,/g, '');

    // 4. 使用 parseFloat 嘗試解析數字
    const parsedNumber = parseFloat(cleanedValue);

    // 5. 檢查解析結果是否為 NaN (Not a Number)
    if (isNaN(parsedNumber)) {
        return defaultValue;
    }
    
    // 6. 返回解析後的數字
    const parsed = Number(value);
    return isNaN(parsed) ? defaultValue : parsed;
}



/*

function parseNumberField(raw: string): number {
    if (raw == null) return 0;

    const s = String(raw).trim();
    if (s === '' || s === '-' || s === '—' || s.toLowerCase() === 'na' || s.toLowerCase() === 'null') {
        return 0;
    }

    // handle parentheses as negative numbers: "(1,234)" -> -1234
    let negative = false;
    let cleaned = s;
    if (/^\(.*\)$/.test(cleaned)) {
        negative = true;
        cleaned = cleaned.slice(1, -1);
    }

    // remove common thousands separators (both western and Chinese comma)
    cleaned = cleaned.replace(/[,，\s]/g, '');

    // strip any non-digit/dot/minus characters (currency symbols, unit labels, etc.)
    cleaned = cleaned.replace(/[^\d.\-]/g, '');

    // protect against lone dot or lone minus
    if (cleaned === '' || cleaned === '.' || cleaned === '-' || cleaned === '-.') return 0;

    const num = Number(cleaned);
    if (Number.isNaN(num)) return 0;

    return negative ? -num : num;
}

*/
























