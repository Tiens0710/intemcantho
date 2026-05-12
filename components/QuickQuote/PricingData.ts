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

// Bảng giá theo chất liệu → bậc số lượng
// Giá cơ bản tính theo kích thước chuẩn 50×50mm
export const materials: Record<string, MaterialConfig> = {
  "decal-giay": {
    label: "Decal Giấy",
    types: ["Decal Giấy"],
    tiers: [
      { qty: 100, noLamination: 690, glossyLamination: 900 },
      { qty: 200, noLamination: 465, glossyLamination: 585 },
      { qty: 500, noLamination: 354, glossyLamination: 414 },
      { qty: 1000, noLamination: 320, glossyLamination: 362 },
      { qty: 2000, noLamination: 300, glossyLamination: 333 },
      { qty: 3000, noLamination: 296, glossyLamination: 324 },
    ],
  },
  "decal-nhua-tieu-chuan": {
    label: "Decal Nhựa Tiêu Chuẩn",
    types: ["Decal Trong", "Decal Sữa"],
    tiers: [
      { qty: 100, noLamination: 810, glossyLamination: 885 },
      { qty: 200, noLamination: 563, glossyLamination: 608 },
      { qty: 500, noLamination: 438, glossyLamination: 480 },
      { qty: 1000, noLamination: 401, glossyLamination: 440 },
      { qty: 2000, noLamination: 380, glossyLamination: 417 },
      { qty: 3000, noLamination: 374, glossyLamination: 411 },
    ],
  },
  "decal-kim-loai-7-mau": {
    label: "Decal Kim Loại & 7 Màu",
    types: ["Decal Xi Bạc", "Decal Xi Vàng", "Decal 7 Màu"],
    tiers: [
      { qty: 100, noLamination: 1125, glossyLamination: 1185 },
      { qty: 200, noLamination: 773, glossyLamination: 818 },
      { qty: 500, noLamination: 603, glossyLamination: 645 },
      { qty: 1000, noLamination: 552, glossyLamination: 591 },
      { qty: 2000, noLamination: 522, glossyLamination: 560 },
      { qty: 3000, noLamination: 515, glossyLamination: 552 },
    ],
  },
  "decal-dac-biet": {
    label: "Decal Đặc Biệt",
    types: ["Decal Nhũ Vàng", "Decal Bể"],
    tiers: [
      { qty: 100, noLamination: 2025, glossyLamination: 2025 },
      { qty: 200, noLamination: 1463, glossyLamination: 1463 },
      { qty: 500, noLamination: 1218, glossyLamination: 1218 },
      { qty: 1000, noLamination: 1146, glossyLamination: 1146 },
      { qty: 2000, noLamination: 1100, glossyLamination: 1100 },
      { qty: 3000, noLamination: 1089, glossyLamination: 1089 },
    ],
  },
};

// Lamination options
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