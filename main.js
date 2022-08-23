//Bài 1 : Tính lương nhân viên


var btnTinhLuong = document.getElementById("btnTinhLuong");
btnTinhLuong.onclick = function() { 
    //Đầu vào : lấy thông tin user nhập
    const LUONG_NGAY =100000;
    var soNgayLam = document.getElementById("soNgayLam").value * 1;

    //Xử lý :
    var tongLuong = LUONG_NGAY * soNgayLam;
    //format VND
    var curentFormat = new Intl.NumberFormat("VN-vn");
    var ketQua = "<p>Tổng lương là: " + curentFormat.format(tongLuong) + "VND</p>";

    //Đầu ra :
    document.getElementById("showInfoLuongNV").innerHTML = ketQua;
};

//Bài 2 :
document.getElementById("btnTinhTrungBinh").onclick = function() {

    // Đầu vào : 
    var so1 = document.getElementById("so1").value * 1;
    var so2 = document.getElementById("so2").value * 1; 
    var so3 = document.getElementById("so3").value * 1;
    var so4 = document.getElementById("so4").value * 1;
    var so5 = document.getElementById("so5").value * 1;
    // Xử lý :
    var trungBinh = ( so1 + so2 + so3 + so4 + so5 ) / 5;
    // Đầu ra :
    var ketQua1 = "<p>Giá trị trung bình của 5 số là : " + trungBinh + "</p>";
    document.getElementById("ketQua1").innerHTML = ketQua1;
    
    };

//Bài 3 : Quy đổi tiền
document.getElementById("btnTienQuyDoi").onclick = function (){
    //Đầu vào:
    var num_usd = document.getElementById("num_usd").value;
    const usd = 23500;
    //Xử lý:
    var vnd = num_usd * usd;
     //format VND
     var curentFormat = new Intl.NumberFormat("VN-vn");
    //Đầu ra:
    var quyDoi = "<p>Tiền sau quy đổi: " + curentFormat.format(vnd) + " VND</p>"
    document.getElementById("quyDoi").innerHTML = quyDoi;
}

//Bài 4 :
document.getElementById("btnCvDt").onclick = function(){
    // Đàu vào:
    var cd = document.getElementById("cd").value * 1;
    var cr = document.getElementById("cr").value * 1;
    // Xử lý:
    var chuVi = cd * cr * 2;
    var dienTich = cd * cr;
    // Đầu ra:
    var cv_dt = "<p>Chu vi HCN là : " + chuVi + "</p>";
    cv_dt += "<p>Diện tích HCN là : " + dienTich + " </p>";
    document.getElementById("cv_dt").innerHTML = cv_dt;
}


//Bài 5 :
document.getElementById("btnTong").onclick = function (){
    //Đầu vào:
    var nhapSo = document.getElementById("nhapSo").value * 1;
    //Xử lý:
    var hangChuc = Math.floor(nhapSo / 10);
    var hangDV = nhapSo % 10;
    var Tong = hangChuc + hangDV;
    //Đầu ra:
    var result = "<p>Tổng 2 ký số là: " + Tong + "</p>";
    document.getElementById("2KySo").innerHTML = result;
};
