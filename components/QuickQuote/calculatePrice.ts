import { PriceTier, SALE_PRICE_MULTIPLIER, STANDARD_WIDTH, STANDARD_HEIGHT } from "./PricingData";

export interface PriceResult {
  baseUnitPrice: number;
  sizeFactor: number;
  unitPriceWithSize: number;
  laminationType: string;
  unitPrice: number;
  totalPrice: number;
}

/**
 * Tìm đơn giá bậc thang: lấy bậc có qty lớn nhất mà ≤ quantity.
 * Trả về { noLamination, glossyLamination } tại bậc đó.
 */
function findBasePrice(tiers: PriceTier[], quantity: number): { noLamination: number; glossyLamination: number } {
  if (!tiers.length) return { noLamination: 0, glossyLamination: 0 };
  const sorted = [...tiers].sort((a, b) => a.qty - b.qty);
  if (quantity < sorted[0].qty) return { noLamination: sorted[0].noLamination, glossyLamination: sorted[0].glossyLamination };
  let matched = sorted[0];
  for (const tier of sorted) {
    if (quantity >= tier.qty) matched = tier;
  }
  return { noLamination: matched.noLamination, glossyLamination: matched.glossyLamination };
}

/**
 * Tính hệ số diện tích dựa trên kích thước nhập so với kích thước chuẩn.
 */
function calculateSizeFactor(width: number, height: number): number {
  const standardArea = STANDARD_WIDTH * STANDARD_HEIGHT;
  const actualArea = width * height;
  return actualArea / standardArea;
}

/**
 * Tính giá đầy đủ: giá gốc → nhân hệ số diện tích → nhân hệ số bán.
 * - "khong" → dùng giá noLamination
 * - "bong" → dùng giá glossyLamination
 */
export function calculatePrice(
  tiers: PriceTier[],
  quantity: number,
  width: number,
  height: number,
  laminationType: string
): PriceResult {
  const basePrices = findBasePrice(tiers, quantity);
  const sizeFactor = calculateSizeFactor(width, height);

  // Chọn giá theo loại cán màng (cán màng bóng & mờ dùng chung giá)
  const baseUnitPrice = (laminationType === "bong" || laminationType === "mo") ? basePrices.glossyLamination : basePrices.noLamination;
  const unitPriceWithSize = Math.round(baseUnitPrice * sizeFactor);

  const unitPrice = Math.round(unitPriceWithSize * SALE_PRICE_MULTIPLIER);
  const totalPrice = unitPrice * quantity;

  return {
    baseUnitPrice,
    sizeFactor: Math.round(sizeFactor * 100) / 100,
    unitPriceWithSize,
    laminationType,
    unitPrice,
    totalPrice,
  };
}
