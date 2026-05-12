export interface PriceTier {
  qty: number;
  price: number; // VND per unit at standard size 50x50mm
}

export interface MaterialConfig {
  label: string;
  tiers: PriceTier[];
}

// Bảng giá theo chất liệu → bậc số lượng
// Giá cơ bản tính theo kích thước chuẩn 50×50mm
export const materials: Record<string, MaterialConfig> = {
  "decal-giay": {
    label: "Decal Giấy",
    tiers: [
      { qty: 100, price: 420 },
      { qty: 200, price: 350 },
      { qty: 500, price: 292 },
      { qty: 1000, price: 267 },
      { qty: 2000, price: 253 },
      { qty: 3000, price: 249 },
    ],
  },
  "decal-trong": {
    label: "Decal Trong",
    tiers: [
      { qty: 100, price: 500 },
      { qty: 200, price: 420 },
      { qty: 500, price: 350 },
      { qty: 1000, price: 320 },
      { qty: 2000, price: 300 },
      { qty: 3000, price: 290 },
    ],
  },
  "decal-sua": {
    label: "Decal Sữa",
    tiers: [
      { qty: 100, price: 540 },
      { qty: 200, price: 375 },
      { qty: 500, price: 292 },
      { qty: 1000, price: 267 },
      { qty: 2000, price: 253 },
      { qty: 3000, price: 249 },
    ],
  },
  "decal-xi-bac": {
    label: "Decal Xi Bạc",
    tiers: [
      { qty: 100, price: 700 },
      { qty: 200, price: 580 },
      { qty: 500, price: 450 },
      { qty: 1000, price: 400 },
      { qty: 2000, price: 370 },
      { qty: 3000, price: 355 },
    ],
  },
  "decal-xi-vang": {
    label: "Decal Xi Vàng",
    tiers: [
      { qty: 100, price: 750 },
      { qty: 200, price: 620 },
      { qty: 500, price: 480 },
      { qty: 1000, price: 430 },
      { qty: 2000, price: 400 },
      { qty: 3000, price: 385 },
    ],
  },
  "decal-nhu-vang": {
    label: "Decal Nhũ Vàng",
    tiers: [
      { qty: 100, price: 800 },
      { qty: 200, price: 660 },
      { qty: 500, price: 520 },
      { qty: 1000, price: 470 },
      { qty: 2000, price: 440 },
      { qty: 3000, price: 420 },
    ],
  },
  "decal-7-mau": {
    label: "Decal 7 Màu",
    tiers: [
      { qty: 100, price: 850 },
      { qty: 200, price: 700 },
      { qty: 500, price: 560 },
      { qty: 1000, price: 500 },
      { qty: 2000, price: 470 },
      { qty: 3000, price: 450 },
    ],
  },
  "decal-be": {
    label: "Decal Bể",
    tiers: [
      { qty: 100, price: 900 },
      { qty: 200, price: 750 },
      { qty: 500, price: 600 },
      { qty: 1000, price: 540 },
      { qty: 2000, price: 500 },
      { qty: 3000, price: 480 },
    ],
  },
};

// Phí cán màng (VND/sp)
export const laminationFees: Record<string, number> = {
  "khong": 0,
  "bong": 30,
  "mo": 40,
};

export const laminationOptions = [
  { value: "khong", label: "Không cán màng" },
  { value: "bong", label: "Cán màng bóng" },
  { value: "mo", label: "Cán màng mờ" },
];

// Kích thước chuẩn dùng để tính hệ số diện tích
export const STANDARD_WIDTH = 50; // mm
export const STANDARD_HEIGHT = 50; // mm

// Danh sách quantity presets
export const quantityPresets = [100, 200, 500, 1000, 2000, 3000];