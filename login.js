// ===============================
// LOGIN.JS – BẢN KHÔNG DÙNG FETCH
// Fix lỗi khi chạy local 127.0.0.1
// ===============================

// Giáo viên
const teachers = {
    "gv_damanhtuan03": "123456789",
    "gv_nguyenducthuong03": "123456789",
    "gv_lovanchinh03": "123456789",
    "gv_lochikien03": "123456789",
    "gv_nguyenthiphuong03": "123456789",
    "gv_duongquangngoc03": "123456789",
    "gv_quangvanhien03": "123456789",
    "gv_nguyenphuonglan03": "123456789",
    "gv_nguyenvanthang03": "123456789",
    "gv_nguyenvanloi03": "123456789",
    "gv_hoangthithinh03": "123456789"
};

// Học sinh – gộp tất cả lớp
const students = {
    "lau_tuan_anh": "123456",
    "sung_duy_anh": "123456",
    "lau_thi_cha": "123456",
    "mua_thi_chu": "123456",
    "giang_thi_do": "123456",

    "lau_thi_bia": "123456",
    "vang_a_cho": "123456",
    "vang_a_da": "123456",
    "lau_thi_dua": "123456",

    "mua_thi_chua": "123456",
    "mua_a_cong": "123456",
    "vang_thi_de": "123456",

    "lau_a_cuong": "123456",
    "lau_a_da": "123456",
    "mua_a_de": "123456"
};

// Mapping học sinh → lớp
const studentClasses = {
    "lau_tuan_anh": 6,
    "sung_duy_anh": 6,
    "lau_thi_cha": 6,

    "lau_thi_bia": 7,
    "vang_a_cho": 7,

    "mua_thi_chua": 8,
    "mua_a_cong": 8,

    "lau_a_cuong": 9,
    "mua_a_de": 9,
    "lau_a_da": 9
};


// ===============================
// FUNCTION LOGIN
// ===============================

function login() {
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();
    const error = document.getElementById("errorMsg");

    if (!user || !pass) {
        error.textContent = "⚠️ Vui lòng nhập đầy đủ thông tin!";
        return;
    }

    if (currentRole === "") {
        error.textContent = "⚠️ Vui lòng chọn loại tài khoản!";
        return;
    }

    // --------- GIÁO VIÊN ----------
    if (currentRole === "teacher") {
        if (teachers[user] && teachers[user] === pass) {
            sessionStorage.setItem("teacher", user);
            window.location.href = "teacher_dashboard.html";
            return;
        } else {
            error.textContent = "❌ Sai tài khoản giáo viên!";
            return;
        }
    }

    // --------- HỌC SINH ----------
    if (currentRole === "student") {
        if (students[user] && students[user] === pass) {
            const grade = studentClasses[user] || "0";

            sessionStorage.setItem("student", user);
            sessionStorage.setItem("grade", grade);

            window.location.href = "student_dashboard.html";
            return;
        } else {
            error.textContent = "❌ Sai tài khoản học sinh!";
            return;
        }
    }

    error.textContent = "❌ Lỗi không xác định!";
}