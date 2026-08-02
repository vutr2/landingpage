# C&T Technology — Website công ty (cttech.ltd)

Website tĩnh đa trang, tiếng Việt, chuẩn SEO, cho công ty C&T Technology Co., Ltd. (Bắc Ninh).
Mục tiêu: khách xem dịch vụ → tin tưởng → bấm "Nhận báo giá" (Zalo/email). Không có backend.

## Trạng thái hiện tại

- `index.html` (trang chủ) — **HOÀN CHỈNH**. Đây là design reference duy nhất. Mọi trang khác phải nhìn giống hệt về style.
- `assets/css/main.css` — design system dùng chung, đã có đủ class. **Ưu tiên dùng class có sẵn**, chỉ thêm CSS mới khi thực sự cần (thêm vào cuối file, có comment).
- Các trang con — đã có SEO head + nav + footer + hero + comment `TODO(claude-code)` mô tả nội dung cần viết. Nhiệm vụ của bạn là hoàn thiện chúng.

## Design system (KHÔNG thay đổi)

- Màu: nền `--paper #F6F7F4`, chữ `--ink #10231F`, chính `--pine #0E5C4A`, đậm `--pine-deep #083D31`, nhấn `--amber #E8A020`, viền `--line #D9DED8`.
- Font: Sora (heading), Be Vietnam Pro (body), IBM Plex Mono (giá/nhãn kỹ thuật). Đã load qua Google Fonts trong head từng trang.
- Signature: con dấu tròn nét đứt màu amber "36 THÁNG BẢO HÀNH" (class `.stamp`, `.mini-stamp`). Mỗi trang dịch vụ nên có `.warranty-line` trước CTA cuối.
- Class chính: `.wrap .eyebrow .btn .btn-primary .btn-ghost .svc .svc-grid .pc .price-cards .pc.pop .badge .steps .step .warranty-line .contact-card`.
- FAQ dùng `<details>/<summary>` như trang chủ.

## Giọng văn (quan trọng)

- Tiếng Việt tự nhiên, xưng "chúng tôi", gọi khách là "bạn". Câu ngắn, cụ thể, không sáo rỗng.
- So sánh bằng thứ chủ doanh nghiệp nhỏ hiểu: lương nhân viên, tiền quảng cáo, đơn hàng — không dùng thuật ngữ kỹ thuật trừ khi giải thích ngay.
- KHÔNG bịa: không bịa số liệu khách hàng, dự án, testimonial, thành viên đội ngũ. Chỗ nào cần dữ liệu thật thì để comment `<!-- TODO(Trung): ... -->`.
- Định vị giá: "giá công ty tinh gọn, thấp hơn agency 20–40%, chất lượng cam kết bằng hợp đồng + bảo hành 36 tháng". Không nói "giá rẻ".

## Bảng giá chính thức (dùng thống nhất mọi trang)

| Gói | Giá |
|---|---|
| Landing Page chuẩn SEO | từ 1.900.000đ trọn gói |
| Website Tăng Doanh Số | từ 5.900.000đ trọn gói (badge: Được chọn nhiều nhất) |
| Website Doanh Nghiệp | từ 8.900.000đ trọn gói |
| AI Agent CSKH | từ 6.900.000đ triển khai + 1.490.000đ/tháng |
| AI Agent Kho & Đơn hàng | từ 12.900.000đ + 2.490.000đ/tháng |
| Bộ AI Agents Toàn Diện | từ 17.900.000đ + 3.490.000đ/tháng |
| App/Web theo yêu cầu | từ 14.900.000đ, báo giá sau tư vấn miễn phí 45 phút |
| Dán nhãn / chuẩn bị dữ liệu AI | giá đàm phán theo dự án, dán nhãn thử miễn phí 200 mẫu |

- Mọi gói: bảo hành 36 tháng (lỗi kỹ thuật, bảo mật, khôi phục dữ liệu — tính năng mới báo giá riêng).
- Thanh toán: 40% ký hợp đồng / 40% duyệt demo / 20% nghiệm thu. Gói >15 triệu chia nhỏ theo tiến độ được.

## Liên hệ

- Email: tvu051225@gmail.com
- Zalo/Hotline: `0356993205`

## SEO checklist mỗi trang

1. Đúng 1 thẻ `<h1>`, heading phân cấp đúng thứ tự.
2. Title ≤ 65 ký tự chứa từ khoá chính; meta description 140–160 ký tự có giá + CTA.
3. Canonical + OG đã có sẵn trong head — giữ nguyên, cập nhật nếu đổi nội dung.
4. JSON-LD theo TODO từng trang (Service/Offer/FAQPage/ContactPage). Trang chủ đã có Organization + FAQPage.
5. Ảnh (nếu thêm): có `alt` tiếng Việt, dùng `loading="lazy"`, ưu tiên webp trong `/assets/img/`.
6. Internal link: mỗi trang dịch vụ link tới `/bang-gia/` và `/lien-he/`; blog link tới trang dịch vụ liên quan.
7. Cập nhật `sitemap.xml` khi thêm trang mới (vd bài blog).

## Việc cần làm (thứ tự ưu tiên)

1. Hoàn thiện 4 trang dịch vụ trong `dich-vu/` theo TODO trong từng file.
2. Hoàn thiện `bang-gia/` (bảng so sánh chi tiết hạng mục các gói).
3. Hoàn thiện `lien-he/` (thêm form tĩnh — đề xuất Formspree, để endpoint là TODO).
4. Hoàn thiện `quy-trinh/`, `du-an/` (không bịa dự án), `blog/` (viết 2–3 bài đầu theo gợi ý trong file).
5. Thêm hamburger menu mobile vào `assets/js/main.js` + CSS tương ứng (hiện nav-links bị ẩn bớt trên mobile).
6. Kiểm tra responsive 380px / 768px / 1280px và focus-visible cho mọi phần tử tương tác.

## Deploy

Site tĩnh thuần — deploy Cloudflare Pages hoặc Vercel, root = thư mục này, không cần build step.
URL dạng thư mục (`/dich-vu/ai-agents/`) hoạt động nhờ `index.html` trong mỗi folder.
