# Nodejs-basic
- Là ngôn ngữ bất đồng bộ
- 3 cách xử lý bất đồng bộ: Callback function, promise, async/await

## .env
- Nơi khai báo các biến môi trường -> dễ quản lý các biến được sử dụng ở nhiều nơi
- Giá trị trong file sẽ tự động chuyển sang dạng String
- Để truy cập tới các biến env -> cài đặt gói **dotenv**

## nodemon
- Tự động restart lại ứng dụng node khi phát hiện có sự thay đổi trong file (.js, .mjs, .coffee, .litcoffee)

## mysql 2
- npm install --save mysql2

## View engine
- View engine ra đời để giải quyết bài toán: giúp file html có thể viết các logic trực tiếp (if, for) để hiển thị dữ liệu
- Template engine sử dụng: EJS (giống Blade template trong Laravel)

## HTTP status
- Các status phổ biến:
- 200 OK: Yêu cầu đã thành công.
- 400 Bad Request: Máy chủ không thể hiểu yêu cầu do cú pháp không hợp lệ.
- 401 Unauthorized: không có quyền truy cập.
- 404 Not Found: trang truy cập không tồn tại.
- 501 Not Implemented: server sập.

## Middleware
- Dùng để kiểm tra điều kiện hoặc xử lý logic khi có 1 request tới
- Nếu điều kiện true thì cho request đó đi tiếp tới controller, nếu false thì có thể redirect về trang chủ
- **package morgan** : là 1 middleware để ghi lại log của các request gửi tới server