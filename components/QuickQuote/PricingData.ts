export interface PriceTier {
  qty: number;
  noLamination: number;
  glossyLamination: number;
}

export interface MaterialConfig {
  label: string;
  types: string[];
  tiers: PriceTier[];
}

// Bảng giá gốc tem nhãn 40x40mm, đã bao gồm VAT 8%.
// Giá bán được tính trong calculatePrice.ts bằng cách nhân hệ số SALE_PRICE_MULTIPLIER.
export const SALE_PRICE_MULTIPLIER = 1.5;

export const materials: Record<string, MaterialConfig> = {
  "decal-giay": {
    label: "Decal Giấy",
    types: ["Decal Giấy"],
    tiers: [
      { qty: 100, noLamination: 520, glossyLamination: 520 },
      { qty: 200, noLamination: 350, glossyLamination: 350 },
      { qty: 500, noLamination: 212, glossyLamination: 212 },
      { qty: 1000, noLamination: 178, glossyLamination: 178 },
      { qty: 2000, noLamination: 160, glossyLamination: 160 },
      { qty: 3000, noLamination: 153, glossyLamination: 153 },
    ],
  },
  "decal-trong": {
    label: "Decal Trong",
    types: ["Decal Trong"],
    tiers: [
      { qty: 100, noLamination: 450, glossyLamination: 480 },
      { qty: 200, noLamination: 330, glossyLamination: 355 },
      { qty: 500, noLamination: 216, glossyLamination: 236 },
      { qty: 1000, noLamination: 192, glossyLamination: 209 },
      { qty: 2000, noLamination: 179, glossyLamination: 196 },
      { qty: 3000, noLamination: 173, glossyLamination: 190 },
    ],
  },
  "decal-sua": {
    label: "Decal Sữa",
    types: ["Decal Sữa"],
    tiers: [
      { qty: 100, noLamination: 450, glossyLamination: 480 },
      { qty: 200, noLamination: 330, glossyLamination: 355 },
      { qty: 500, noLamination: 216, glossyLamination: 236 },
      { qty: 1000, noLamination: 192, glossyLamination: 209 },
      { qty: 2000, noLamination: 179, glossyLamination: 196 },
      { qty: 3000, noLamination: 173, glossyLamination: 190 },
    ],
  },
  "decal-xi-bac": {
    label: "Decal Xi Bạc",
    types: ["Decal Xi Bạc"],
    tiers: [
      { qty: 100, noLamination: 610, glossyLamination: 650 },
      { qty: 200, noLamination: 450, glossyLamination: 475 },
      { qty: 500, noLamination: 296, glossyLamination: 314 },
      { qty: 1000, noLamination: 262, glossyLamination: 280 },
      { qty: 2000, noLamination: 245, glossyLamination: 262 },
      { qty: 3000, noLamination: 237, glossyLamination: 254 },
    ],
  },
  "decal-xi-vang": {
    label: "Decal Xi Vàng",
    types: ["Decal Xi Vàng"],
    tiers: [
      { qty: 100, noLamination: 610, glossyLamination: 650 },
      { qty: 200, noLamination: 450, glossyLamination: 475 },
      { qty: 500, noLamination: 296, glossyLamination: 314 },
      { qty: 1000, noLamination: 262, glossyLamination: 280 },
      { qty: 2000, noLamination: 245, glossyLamination: 262 },
      { qty: 3000, noLamination: 237, glossyLamination: 254 },
    ],
  },
  "decal-nhu-vang": {
    label: "Decal Nhũ Vàng",
    types: ["Decal Nhũ Vàng"],
    tiers: [
      { qty: 100, noLamination: 1050, glossyLamination: 1050 },
      { qty: 200, noLamination: 835, glossyLamination: 835 },
      { qty: 500, noLamination: 578, glossyLamination: 578 },
      { qty: 1000, noLamination: 531, glossyLamination: 531 },
      { qty: 2000, noLamination: 505, glossyLamination: 505 },
      { qty: 3000, noLamination: 494, glossyLamination: 494 },
    ],
  },
  "decal-7-mau": {
    label: "Decal 7 màu",
    types: ["Decal 7 màu"],
    tiers: [
      { qty: 100, noLamination: 610, glossyLamination: 650 },
      { qty: 200, noLamination: 450, glossyLamination: 475 },
      { qty: 500, noLamination: 296, glossyLamination: 314 },
      { qty: 1000, noLamination: 262, glossyLamination: 280 },
      { qty: 2000, noLamination: 245, glossyLamination: 262 },
      { qty: 3000, noLamination: 237, glossyLamination: 254 },
    ],
  },
  "decal-be": {
    label: "Decal Bể",
    types: ["Decal Bể"],
    tiers: [
      { qty: 100, noLamination: 1050, glossyLamination: 1050 },
      { qty: 200, noLamination: 835, glossyLamination: 835 },
      { qty: 500, noLamination: 578, glossyLamination: 578 },
      { qty: 1000, noLamination: 531, glossyLamination: 531 },
      { qty: 2000, noLamination: 505, glossyLamination: 505 },
      { qty: 3000, noLamination: 494, glossyLamination: 494 },
    ],
  },
};

export const laminationOptions = [
  { value: "khong", label: "Không cán màng" },
  { value: "bong", label: "Cán màng bóng" },
  { value: "mo", label: "Cán màng mờ" },
];

export const STANDARD_WIDTH = 40; // mm
export const STANDARD_HEIGHT = 40; // mm

export const quantityPresets = [100, 200, 500, 1000, 2000, 3000];
