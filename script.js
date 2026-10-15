document.addEventListener("DOMContentLoaded", function() {
    const consoleLog = document.getElementById("console-log");
    const fileContainer = document.getElementById("file-container");

    setTimeout(() => {
        consoleLog.innerHTML = ">>> Kết nối cơ sở dữ liệu thành công.\n>>> Đang quét phân vùng dữ liệu ẩn...";
    }, 1000);

    setTimeout(() => {
        consoleLog.innerHTML += "\n>>> Đã tìm thấy danh sách tệp lưu trữ [DỰ ÁN: BEHIND]:";

        // MẢNG CHỨA DANH SÁCH HỒ SƠ - THÊM CÁC HỒ SƠ KHÁC TẠI ĐÂY
        const danhSachHoSo = [
            { ten: "behind-5", matKhau: "wve" }
            // { ten: "behind-6", matKhau: "Mật khẩu tiếp theo" } <-- Bỏ dấu // ở đầu để thêm hồ sơ mới
        ];

        // Tạo nút tự động dựa trên danh sách dữ liệu
        danhSachHoSo.forEach(hoSo => {
            const fileButton = document.createElement("button");
            fileButton.className = "btn-file";
            fileButton.innerText = `hồ sơ ${hoSo.ten}\nmật khẩu:${hoSo.matKhau}`;
            
            fileButton.onclick = function() {
                alert(`Đang truy cập hồ sơ mật của đối tượng ${hoSo.ten}...`);
            };
            
            fileContainer.appendChild(fileButton);
        });

    }, 2500);
});
