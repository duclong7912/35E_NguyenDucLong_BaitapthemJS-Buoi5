                // Tính tiền cáp

/**
 * - Đầu vào:
 * 
 * đặt biến lấy thông tin user
 * 
 * - Xử lý: 
 * 
 * * Nếu khách hàng là nhà dân:
 *  + Phí xử lý hóa đơn: 4.5$
 *  + Phí dịch vụ cơ bản: 20.5$
 *  + Thuê kênh cao cấp: 7.5$ / kênh
 *  => tiền cáp = phí xử lý hóa đơn + phí dịch vụ + 7.5 * số kênh
 * 
 * * Nếu khách hàng là doanh nghiệp:
 * + Phí xử lý hóa đơn: 15$
 * + Phí dịch vụ cơ bản: 75$ / 10 kết nối đầu - trên 10 kết nối -> thêm 5$ / kết nối
 * + Thuê kênh cao cấp: 50$ / kênh
 * - dưới 10 kết nối:
 * => Tiền cáp = phí hóa đơn + phí dịch vụ + phí thuê kênh * số kênh
 * - trên 10 kết nối:
 * => Tiền cáp = phí hóa đơn + phí dịch vụ + phí thuê kênh * số kênh + (số kết nối - 10)  * 5
 * đặt biến để hiển thị kết quả
 * var tongTienCap = ''
 * 
 * - Đầu ra:
 * 
 * tongTienCap = ?
 * 
 */



function tienCap(a,b){
    var tinhTienCap = 0;
    if (a === 'nhaDan') {
        tinhTienCap = 4.5 + 20.5 + 7.5 * b;
    } else if (a === 'doanhNghiep'){
        var soKetNoi = document.getElementById("soKetNoi").value * 1;
    } else{
        alert('Vui lòng chọn loại khách hàng !');
    }

    if (a === 'doanhNghiep' && soKetNoi <= 10) {
        tinhTienCap = 15 + 75 + 50 * b;
    } else if ((a === 'doanhNghiep') && (soKetNoi > 10)){
        tinhTienCap = 15 + 75 + 50 * b + (soKetNoi - 10) * 5;
    } 
    
    return tinhTienCap;
}

function tinhTienCap() {

    // Đầu vào:

    var chonLoai = document.getElementById("chonLoai").value;
    var maKhachHang = document.getElementById("khachHang").value;
    var soKenh = document.getElementById("soKenh").value * 1;

    // Xử lý:

    var tinhTienCap = tienCap(chonLoai,soKenh);
    var currentFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    var tongTienCap = "Mã khách hàng: " + maKhachHang + ' - Tổng tiền cáp: ' + currentFormat.format(tinhTienCap);


    document.getElementById("showTienCap").innerHTML = tongTienCap;

}
   
function taoInput() {
    var t = document.getElementById("chonLoai").value;
    if (t === 'doanhNghiep') {
        document.getElementById("taoInput").innerHTML = "<input id='soKetNoi' type='number' placeholder='Số kết nối'>";
    } else {
        document.getElementById("taoInput").innerHTML = "";
    }
}

