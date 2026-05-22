# Rule clone trang Menu thành trang mới

Mục tiêu: tạo một landing page mới dựa trên cấu trúc trang `menu`, nhưng không để sót chữ, route, ảnh hoặc dữ liệu sản phẩm của trang cũ.

## 1. Đặt tên và slug thống nhất

Chọn một slug duy nhất, ví dụ `voucher`.

Quy ước cần dùng cùng một slug ở mọi nơi:

- Route: `app/tiep-thi/<slug>/page.tsx`
- Category data: `slug: "<slug>"`
- Template condition: `data.slug === "<slug>"`
- Product category: `category: "<slug>"`
- Product detail href: `/san-pham/<product-id>`

Không trộn slug tiếng Việt có dấu trong route hoặc id sản phẩm.

## 2. Tạo route page

Tạo file:

```tsx
app/tiep-thi/<slug>/page.tsx
```

Mẫu:

```tsx
import CategoryPageClient from "@/components/category/CategoryPageClient";
import { getProducts } from "@/lib/wordpress";

export default async function NewPage() {
  const products = await getProducts();
  return <CategoryPageClient slug="<slug>" products={products} />;
}
```

## 3. Thêm category data

Trong `lib/category-data.ts`:

- Import icon nếu cần.
- Thêm object mới vào `CATEGORY_DATA`.
- Nội dung phải đổi toàn bộ sang trang mới:
  - `categoryLabel`
  - `hero.title`
  - `hero.subtitle`
  - `pricing.title`
  - `gallery.title`
  - `caseStudy`
  - `testimonials`

Rule quan trọng: sau khi thêm, search trong object mới để chắc không còn chữ `Menu`, `menu`, `MENU` nếu trang mới không phải menu.

## 4. Tạo Hero riêng bằng component reusable

Dùng:

```tsx
components/category/CategoryMarketingHeroBanner.tsx
```

Tạo file mới:

```tsx
components/category/<Name>HeroBanner.tsx
```

Hero mới chỉ nên chứa data/config, không copy nguyên layout.

Cần đổi:

- `backgroundSrc`
- `backgroundAlt`
- `ariaLabel`
- `breadcrumbs`
- `title`
- `accentTitle`
- `tagline`
- `description`
- `price`
- `highlights`
- `actions`

Nếu có asset riêng, ưu tiên dùng:

```txt
public/anphamtiepthi/<slug>/background.jpeg
public/anphamtiepthi/<slug>/anh1.png
public/anphamtiepthi/<slug>/anh2.png
public/anphamtiepthi/<slug>/anh3.png
```

## 5. Tạo bảng giá bằng component reusable

Dùng:

```tsx
components/category/CategoryProductPriceGrid.tsx
```

Tạo file:

```tsx
components/category/<Name>PricingTable.tsx
```

Mỗi product cần đủ:

```tsx
{
  category: "...",
  name: "...",
  detail: "...",
  price: "...",
  image: "/...",
  href: "/san-pham/...",
}
```

Rule quan trọng: mỗi `href` trong pricing card phải có product tương ứng trong `lib/wordpress.ts`, nếu không bấm vào sẽ 404.

## 6. Thêm product detail records

Trong `lib/wordpress.ts`, thêm các product mới vào `PRODUCTS`.

Mỗi item cần:

```tsx
{
  id: "<product-id>",
  title: "...",
  description: "...",
  category: "<slug>",
  image: "/...",
  price: "...",
  personas: [...],
  featured: false,
}
```

`id` phải khớp với URL:

```txt
href: "/san-pham/<product-id>"
```

## 7. Nối vào CategoryLandingTemplate

Trong `components/category/CategoryLandingTemplate.tsx`:

- Import hero/pricing/section mới.
- Thêm nhánh hero:

```tsx
) : data.slug === "<slug>" ? (
  <NewHeroBanner />
) : (
```

- Thêm section riêng:

```tsx
{data.slug === "<slug>" && (
  <>
    <NewPricingTable />
    ...
  </>
)}
```

- Thêm slug vào điều kiện loại trừ generic sections:

```tsx
data.slug !== "<slug>"
```

Rule quan trọng: không dùng lại `MenuComparison`, `MenuGallery`, `MenuFAQ`, `MenuBannerCTA`, `MenuFileAndFeedback` nếu nội dung bên trong vẫn ghi `Menu`. Nếu copy, đổi thành component riêng cho trang mới.

## 8. Cập nhật navigation

Trong `lib/navigation.ts`:

- Cập nhật link menu/mega menu sang route mới.
- Thêm route vào `activePaths` nếu thuộc cùng nhóm.

Ví dụ:

```tsx
{ label: "Voucher / thẻ tích điểm", href: "/tiep-thi/voucher" }
```

## 9. Rà chữ sót

Sau khi clone, chạy search:

```powershell
rg -n "Menu|menu|MENU" components\category -g "<Name>*.tsx"
```

Nếu trang mới không phải menu thì các file `<Name>*.tsx` không nên còn match chữ `Menu`.

Rà ảnh sót:

```powershell
rg -n "anphamtiepthi/menu|danhmuc[0-9]\.png" components\category -g "<Name>*.tsx"
```

Nếu có asset riêng cho trang mới, không nên dùng nhầm ảnh menu.

## 10. Kiểm tra lint

Chạy lint cho các file mới/sửa:

```powershell
npm.cmd run lint -- app/tiep-thi/<slug>/page.tsx components/category/<Name>HeroBanner.tsx components/category/<Name>PricingTable.tsx components/category/CategoryLandingTemplate.tsx lib/category-data.ts lib/navigation.ts lib/wordpress.ts
```

Nếu tạo thêm component phụ, thêm chúng vào command lint.

## 11. Checklist trước khi xong

- Route mới mở đúng URL.
- Hero không còn chữ/ảnh của trang cũ.
- Breadcrumb đúng.
- Pricing card bấm được sang product detail.
- Product detail không 404.
- Navigation trỏ đúng route mới.
- Search không còn chữ cũ trong component mới.
- Lint không có error.
