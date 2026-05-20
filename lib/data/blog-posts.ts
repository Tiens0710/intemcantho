export const categoryColors: Record<string, string> = {
  "tem-nhan": "#E6792A",
  "bao-bi": "#2563EB",
  "an-pham": "#059669",
  "thiet-ke": "#7C3AED",
  "mua-in": "#DC2626",
};

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  categoryLabel: string;
  featured?: boolean;
  image: string;
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "in-tem-nhan-chong-nuoc-o-can-tho",
    title: "In tem nhãn chống nước ở Cần Thơ",
    date: "29 Tháng 4, 2024",
    readTime: "5 phút đọc",
    category: "tem-nhan",
    categoryLabel: "Tem nhãn",
    featured: true,
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp",
    excerpt:
      "Tem nhãn chống nước đang trở thành lựa chọn gần như bắt buộc đối với nhiều doanh nghiệp, đặc biệt trong ngành thực phẩm, mỹ phẩm và hàng tiêu dùng.",
    content: `Tem nhãn chống nước đang trở thành lựa chọn gần như bắt buộc đối với nhiều doanh nghiệp, đặc biệt trong ngành thực phẩm, mỹ phẩm và hàng tiêu dùng. Với khả năng chống nước, chống dầu, chống hóa chất, tem nhãn chống nước giúp bảo vệ thông tin sản phẩm và tăng tính chuyên nghiệp.

## Tại sao cần tem nhãn chống nước?

Trong môi trường kinh doanh cạnh tranh hiện nay, việc bảo vệ thương hiệu sản phẩm là cực kỳ quan trọng. Tem nhãn chống nước không chỉ giúp sản phẩm của bạn tồn tại lâu dài trong mọi điều kiện môi trường mà còn tạo sự tin tưởng cho khách hàng.

### Các loại tem nhãn chống nước phổ biến:

1. **Tem nhãn PVC** - Chống nước tuyệt đối, độ bền cao
2. **Tem nhãn decal plastic** - Linh hoạt, đa dạng kích thước
3. **Tem nhãn kim loại** - Sang trọng, phù hợp sản phẩm cao cấp
4. **Tem nhãn inox** - Bền bỉ theo thời gian

## Ưu điểm của tem nhãn chống nước

- **Độ bền cao**: Không bị phai màu hay bong tróc khi tiếp xúc với nước
- **Tính thẩm mỹ**: Giữ được màu sắc và chi tiết in ấn
- **Phù hợp nhiều ngành**: Thực phẩm, mỹ phẩm, hóa chất, dược phẩm
- **Chi phí hợp lý**: Đầu tư một lần, sử dụng lâu dài

Liên hệ ngay với In tem Cần Thơ để được tư vấn và báo giá tốt nhất!`,
  },
  {
    id: 2,
    slug: "thiet-ke-in-an-danh-thiep-o-can-tho",
    title: "Thiết kế in ấn danh thiếp ở Cần Thơ",
    date: "26 Tháng 4, 2024",
    readTime: "4 phút đọc",
    category: "thiet-ke",
    categoryLabel: "Thiết kế",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-labels-luxury-2gNgfReHpRXZq4kdAfZqaT.webp",
    excerpt:
      "Xu hướng thiết kế in ấn danh thiếp giúp tăng giá trị truyền tải doanh nghiệp.",
    content: `Thiết kế in ấn danh thiếp vẫn là một trong những "vũ khí nhỏ nhưng có võ" trong kinh doanh. Giữa thời đại số, nhiều người nghĩ danh thiếp đã lỗi thời, nhưng thực tế, một chiếc danh thiếp được thiết kế chuyên nghiệp vẫn tạo ấn tượng mạnh mẽ.

## Tại sao danh thiếp vẫn quan trọng?

Trong giao tiếp kinh doanh, việc trao đổi danh thiếp tạo ra sự chuyên nghiệp và đáng tin cậy. Một tấm danh thiếp đẹp giúp đối tác nhớ đến bạn lâu hơn.

### Các yếu tố của danh thiếp chuyên nghiệp:

- **Thiết kế đơn giản nhưng tinh tế**: Không quá cầu kỳ nhưng đủ ấn tượng
- **Thông tin đầy đủ**: Tên, chức danh, số điện thoại, email, website
- **Chất liệu giấy tốt**: Tạo cảm giác cao cấp khi cầm
- **Màu sắc hài hòa**: Phù hợp với thương hiệu

## Xu hướng thiết kế danh thiếp 2024

Năm 2024, xu hướng minimalist (tối giản) vẫn chiếm ưu thế. Các thiết kế sạch sẽ, sử dụng nhiều khoảng trắng và typography đẹp đang được ưa chuộng.`,
  },
  {
    id: 3,
    slug: "dich-vu-in-an-an-pham-van-phong",
    title: "Dịch vụ in ấn ấn phẩm văn phòng",
    date: "23 Tháng 4, 2024",
    readTime: "6 phút đọc",
    category: "an-pham",
    categoryLabel: "Ấn phẩm văn phòng",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp",
    excerpt:
      "In ấn, stamp các mẫu ấn phẩm văn phòng sẽ giúp doanh nghiệp thể hiện sự chuyên nghiệp, tạo ấn tượng tốt đối với khách hàng.",
    content: `In ấn ấn phẩm văn phòng là một phần quan trọng trong cách doanh nghiệp thể hiện sự chuyên nghiệp. Từ namecard, hồ sơ năng lực, tiêu đề thư đến các tài liệu khác, tất cả đều cần được in ấn với chất lượng cao.

## Các loại ấn phẩm văn phòng phổ biến

### 1. Namecard (Danh thiếp)
- Kích thước chuẩn: 90 x 55mm
- Chất liệu: Couché 300gsm, giấy mỹ thuật
- In offset hoặc in nhanh

### 2. Hồ sơ năng lực
- Folder bìa cứng
- Trang in màu chất lượng cao
- Đánh bìa, đóng ghim

### 3. Tiêu đề thư & phong bì
- Đồng bộ thương hiệu
- In offset màu chính xác
- Nhiều kích thước

### 4. Tài liệu internal
- Sổ tay nhân viên
- Biểu mẫu
- Ấn phẩm training

## Lợi ích của ấn phẩm văn phòng chuyên nghiệp

- Tạo ấn tượng tốt với đối tác và khách hàng
- Đồng bộ hình ảnh thương hiệu
- Tăng sự tin tưởng và uy tín`,
  },
  {
    id: 4,
    slug: "in-an-ep-nhua-gia-re-theo-yeu-cau",
    title: "In ấn ép nhựa giá rẻ theo yêu cầu",
    date: "20 Tháng 4, 2024",
    readTime: "5 phút đọc",
    category: "mua-in",
    categoryLabel: "Mua in ấn",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp",
    excerpt:
      "In ấn ép nhựa giá rẻ theo yêu cầu đang trở thành lựa chọn quen thuộc của nhiều cá nhân và doanh nghiệp tại Cần Thơ.",
    content: `In ấn ép nhựa giá rẻ theo yêu cầu đang trở thành lựa chọn quen thuộc của nhiều cá nhân và doanh nghiệp tại Cần Thơ. Từ thẻ nhân viên, mẫu vật quảng cáo đến các sản phẩm khác, ép nhựa giúp tăng độ bền và tính thẩm mỹ.

## Các loại sản phẩm ép nhựa

- **Thẻ nhân viên**: PVC, có dải từ, in ảnh màu
- **Thẻ từ**: Thẻ access control, thẻ RFID
- **Card visit nhựa**: Sang trọng, bền bỉ
- **Tem nhãn nhựa**: Chống nước, chống dầu

## Ưu điểm của ép nhựa

1. **Độ bền cao**: Không bị rách, thấm nước
2. **Tính thẩm mỹ**: Màu sắc tươi sáng, chi tiết sắc nét
3. **Đa dạng**: Nhiều loại nhựa, nhiều kỹ thuật ép
4. **Giá cả hợp lý**: Đặc biệt khi in số lượng lớn`,
  },
  {
    id: 5,
    slug: "in-an-standee-cho-doanh-nghiep",
    title: "In ấn standee cho doanh nghiệp",
    date: "17 Tháng 4, 2024",
    readTime: "3 phút đọc",
    category: "tem-nhan",
    categoryLabel: "Tem nhãn",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-labels-luxury-2gNgfReHpRXZq4kdAfZqaT.webp",
    excerpt:
      "Trong các hình thức in ấn standee, standee luôn là sự lựa chọn tối ưu về chi phí và mang lại hiệu quả truyền thông cao.",
    content: `In ấn standee cho doanh nghiệp đang trở thành một trong những giải pháp quảng bá nhanh – gọn – hiệu quả mà rất nhiều đơn vị lựa chọn.

## Standee là gì?

Standee (hay standy) là một dạng giá treo quảng cáo được sử dụng phổ biến trong các sự kiện, triển lãm, hội chợ và cửa hàng.

### Các loại standee phổ biến:

- **Standee đế sắt**: Chắc chắn, phù hợp ngoài trời
- **Standee đế nhựa**: Nhẹ, dễ di chuyển
- **Standee kéo co**: Thuận tiện, dễ lắp đặt
- **Standee chữ X**: Phổ biến nhất, giá rẻ

## Ưu điểm của standee

- Dễ dàng di chuyển và lắp đặt
- Chi phí thấp, hiệu quả cao
- Thông tin quảng cáo trực quan
- Phù hợp nhiều không gian`,
  },
  {
    id: 6,
    slug: "thiet-ke-in-an-bao-bi-theo-yeu-cau-tai-can-tho",
    title: "Thiết kế in ấn bao bì theo yêu cầu tại Cần Thơ",
    date: "14 Tháng 4, 2024",
    readTime: "4 phút đọc",
    category: "bao-bi",
    categoryLabel: "Bao bì",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp",
    excerpt:
      "Giới thiệu 5 ý tưởng in bao bì giúp sản phẩm bán chạy tại Cần Thơ.",
    content: `Thiết kế in ấn bao bì theo yêu cầu tại Cần Thơ hiện đang là lựa chọn quen thuộc của nhiều shop và doanh nghiệp địa phương khi muốn đầu tư vào hình ảnh thương hiệu.

## Tại sao bao bì quan trọng?

Bao bì không chỉ có chức năng bảo vệ sản phẩm mà còn là "người bán hàng thầm lặng". Một thiết kế bao bì ấn tượng có thể thu hút khách hàng ngay từ cái nhìn đầu tiên.

### 5 ý tưởng thiết kế bao bì hiệu quả:

1. **Đơn giản hóa**: Thông điệp rõ ràng, dễ nhớ
2. **Sử dụng màu sắc thương hiệu**: Tạo nhận diện
3. **Thêm yếu tố tương tác**: QR code, gamification
4. **Thân thiện môi trường**: Giấy tái chế, mực thực vật
5. **Kể chuyện**: Truyền tải giá trị thương hiệu

## Chất liệu bao bì phổ biến

- Giấy Ivory, Couché
- Carton sóng
- Giấy Kraft
- Nhôm, nhựa`,
  },
  {
    id: 7,
    slug: "in-tem-nhan-can-tho-giai-phap-tem-nhan-gia-re",
    title: "In tem nhãn Cần Thơ - Giải pháp tem nhãn giá rẻ",
    date: "12 Tháng 4, 2024",
    readTime: "5 phút đọc",
    category: "tem-nhan",
    categoryLabel: "Tem nhãn",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-brochure-luxury-DDmwtYLkufziWByNSE9fSY.webp",
    excerpt:
      "In tem Cần Thơ là đơn vị cung cấp dịch vụ in tem nhãn theo yêu cầu giá rẻ với quy trình linh hoạt.",
    content: `In tem Cần Thơ là đơn vị cung cấp dịch vụ in tem nhãn theo yêu cầu giá rẻ với quy trình linh hoạt, đáp ứng đa dạng nhu cầu từ cá nhân đến doanh nghiệp.

## Dịch vụ in tem nhãn tại Cần Thơ

### Các loại tem nhãn:

- **Tem nhãn sản phẩm**: Nhãn dán bao bì, nhãn phụ
- **Tem nhãn bảo hành**: Tem date, tem số serial
- **Tem nhãn decal**: Đa dạng hình dáng, kích thước
- **Tem nhãn chống giả**: Tem hologram, tem bảy màu

### Quy trình đặt hàng:

1. Liên hệ tư vấn
2. Thiết kế mẫu
3. Duyệt mẫu
4. In ấn
5. Giao hàng

## Cam kết chất lượng

- Màu sắc chính xác
- Giao hàng đúng hẹn
- Giá cả cạnh tranh
- Hỗ trợ thiết kế miễn phí`,
  },
  {
    id: 8,
    slug: "in-nhanh-lay-lien-tai-can-tho",
    title: "In nhanh lấy liền tại Cần Thơ – Duky Printing",
    date: "10 Tháng 4, 2024",
    readTime: "6 phút đọc",
    category: "mua-in",
    categoryLabel: "Mua in ấn",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-labels-luxury-2gNgfReHpRXZq4kdAfZqaT.webp",
    excerpt:
      "In tem Cần Thơ là đơn vị chuyên cung cấp dịch vụ in nhanh lấy liền tại Cần Thơ bao gồm in tem nhãn, in ấn theo yêu cầu và thiết kế ấn phẩm.",
    content: `In tem Cần Thơ là đơn vị chuyên cung cấp dịch vụ in nhanh lấy liền tại Cần Thơ bao gồm in tem nhãn, in ấn theo yêu cầu và thiết kế ấn phẩm.

## Dịch vụ in nhanh lấy liền

### Khi nào cần in nhanh?

- Cần ấn phẩm gấp cho sự kiện
- Hết hàng in sẵn
- Thay đổi thông tin sản phẩm
- Quảng cáo ngắn hạn

### Ưu điểm in nhanh tại Duky Printing:

- **Thời gian nhanh**: In lấy liền trong ngày
- **Chất lượng đảm bảo**: Máy in offset hiện đại
- **Giá cả hợp lý**: Không phụ phí gấp
- **Tư vấn miễn phí**: Hỗ trợ thiết kế`,
  },
  {
    id: 9,
    slug: "in-menu-gia-re-can-tho",
    title: "In menu giá rẻ Cần Thơ cho các quán ăn, quán cà phê",
    date: "08 Tháng 4, 2024",
    readTime: "4 phút đọc",
    category: "bao-bi",
    categoryLabel: "Bao bì",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/90078694/ERMxTyYJFnFBQeNjeF6P4w/service-packaging-luxury-RYsTx6Y8m5SoyfySkzLoUA.webp",
    excerpt:
      "Nhu cầu in menu giá rẻ Cần Thơ ngày càng tăng cao, đặc biệt với các quán ăn, quán cà phê, trà sữa hay nhà hàng mới mở.",
    content: `Nhu cầu in menu giá rẻ Cần Thơ ngày càng tăng cao, đặc biệt với các quán ăn, quán cà phê, trà sữa hay nhà hàng mới mở. Nếu đang tìm một đơn vị in menu uy tín, Duky Printing là lựa chọn tốt.

## Các loại menu phổ biến

### 1. Menu đơn (Single card)
- Kích thước A4, A5
- Giấy Couché 300gsm
- In 2 mặt, cán màng

### 2. Menu gập đôi
- Gấp đôi, 4 mặt
- Phù hợp quán nhỏ
- Tiết kiệm chi phí

### 3. Menu booklet
- Nhiều trang
- Phù hợp nhà hàng lớn
- Đa dạng nội dung

### 4. Menu nhựa
- Chống nước
- Dễ lau chùi
- Bền bỉ

## Tips chọn menu phù hợp

- Xem xét không gian quán
- Chọn chất liệu phù hợp
- Thiết kế đồng bộ thương hiệu
- Cập nhật thường xuyên`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}