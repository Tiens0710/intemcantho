import { PriceTier, laminationFees, STANDARD_WIDTH, STANDARD_HEIGHT } from "./PricingData";

export interface PriceResult {
  baseUnitPrice: number;
  sizeFactor: number;
  unitPriceWithSize: number;
  laminationFee: number;
  unitPrice: number;
  totalPrice: number;
  vatAmount: number;
  grandTotal: number;
}

/**
 * Tìm đơn giá bậc thang: lấy bậc có qty lớn nhất mà ≤ quantity.
 */
function findBasePrice(tiers: PriceTier[], quantity: number): number {
  if (!tiers.length) return 0;
  const sorted = [...tiers].sort((a, b) => a.qty - b.qty);
  if (quantity < sorted[0].qty) return sorted[0].price;
  let matched = sorted[0];
  for (const tier of sorted) {
    if (quantity >= tier.qty) matched = tier;
  }
  return matched.price;
}

/**
 * Tính hệ số diện tích dựa trên kích thước nhập so với chuẩn 50x50mm
 */
function calculateSizeFactor(width: number, height: number): number {
  const standardArea = STANDARD_WIDTH * STANDARD_HEIGHT;
  const actualArea = width * height;
  return actualArea / standardArea;
}

/**
 * Tính giá đầy đủ: base → nhân hệ số diện tích → cộng cán màng → VAT 8%
 */
export function calculatePrice(
  tiers: PriceTier[],
  quantity: number,
  width: number,
  height: number,
  laminationType: string
): PriceResult {
  const baseUnitPrice = findBasePrice(tiers, quantity);
  const sizeFactor = calculateSizeFactor(width, height);
  const unitPriceWithSize = Math.round(baseUnitPrice * sizeFactor);
  const laminationFee = laminationFees[laminationType] || 0;
  const unitPrice = unitPriceWithSize + laminationFee;
  const totalPrice = unitPrice * quantity;
  const vatAmount = Math.round(totalPrice * 0.08);
  const grandTotal = totalPrice + vatAmount;

  return {
    baseUnitPrice,
    sizeFactor: Math.round(sizeFactor * 100) / 100,
    unitPriceWithSize,
    laminationFee,
    unitPrice,
    totalPrice,
    vatAmount,
    grandTotal,
  };
}