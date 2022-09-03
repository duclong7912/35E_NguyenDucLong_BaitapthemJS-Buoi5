                // Tính thuế thu nhập cá nhân

/**
 * - Đầu vào:
 * 
 * đặt biến lấy thông tin user
 * 
 * - Xử lý:
 * 
 *  công thức tính thu nhập trước thuế:
 * Tổng thu nhập năm - 4tr - Số người phụ thuộc * 1.6tr
 * 
 * tùy từng điều kiện sẽ tính thu nhập sau thuế:
 * dưới 60tr -> * 5%
 * từ 60tr -> 120tr -> * 10%
 * từ 120tr -> 210tr -> * 15%
 * từ 210tr -> 384tr -> * 20%
 * từ 384tr -> 624tr -> * 25%
 * từ 624tr -> 960tr -> * 30%
 * trên 960tr -> * 35%
 * 
 * đặt biến để hiển thị kết quả
 * var tongThue = ''
 * 
 * - Đầu ra:
 * 
 * tongThue = ?
 * 
 */


function xetThue(a,b) {

    var truocThue =  a - 4000000 - b * 1600000;
    var sauThue = "";

    if(truocThue > 0 && truocThue <= 60000000) {
        sauThue = truocThue * 0.05;
    } else if (truocThue > 60000000 && truocThue <= 120000000) {
        sauThue = truocThue * 0.1;
    } else if (truocThue > 120000000 && truocThue <= 210000000) {
        sauThue = truocThue * 0.15;
    } else if (truocThue > 210000000 && truocThue <= 384000000) {
        sauThue = truocThue * 0.2;
    } else if (truocThue > 384000000 && truocThue <= 624000000) {
        sauThue = truocThue * 0.25;
    } else if (truocThue > 624000000 && truocThue <= 960000000) {
        sauThue = truocThue * 0.3;
    } else if (truocThue > 960000000) {
        sauThue = truocThue * 0.35;
    } else {
        sauThue = "";
    }

    return sauThue;
}


function thueCaNhan() {

    // Đầu vào:

    var hoTen = document.getElementById("hoTen").value;
    var thuNhapNam = document.getElementById("thuNhapNam").value * 1;
    var soNguoi = document.getElementById("soNguoi").value * 1;

    // Xử lý

    if ((thuNhapNam - 4000000 - (soNguoi * 1600000)) < 0) {
        alert("Vui lòng nhập số tiền tổng thu nhập hợp lệ !")
        tongThue = '';
    }

    var sauThue = xetThue(thuNhapNam, soNguoi);
    var currentFormat = new Intl.NumberFormat("VN-vn");
    var tongThue = 'Họ tên: ' + hoTen + ' - Tiền thuế thu nhập cá nhân: ' + currentFormat.format(sauThue) + 'đ';

    // Đầu ra:

    document.getElementById("showThue").innerHTML = tongThue;
}