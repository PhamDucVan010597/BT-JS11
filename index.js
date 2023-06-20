// Bài 1
function tongluong() {
  var luong1Ngay = 100000;
  var ngayLam = document.getElementById("ngaylam").value;
  var tienLuong = document.getElementById("tienluong");
  tienLuong.innerHTML = (luong1Ngay * ngayLam).toLocaleString();
}

// Bài 2
function giatritrungbinh() {
  var n1 = 5;
  n2 = 8;
  n3 = 9;
  n4 = 2;
  n5 = 6;
  ketQua = (n1 + n2 + n3 + n4 + n5) / 5;
  document.getElementById("ketqua").innerHTML = ketQua;
}

// Bài 3
function quydoi() {
  var menhGia = 23500;
  var usdEl = document.getElementById("usd").value;
  var xuatRa = document.getElementById("xuatra");
  xuatRa.innerHTML = (menhGia * usdEl).toLocaleString();
}

// Bài 4
var c1 = 4;
var c2 = 6;
function chuvi() {
  document.getElementById("chuvi").innerHTML = (c1 + c2) * 2;
}
function dientich() {
  document.getElementById("dientich").innerHTML = c1 * c2;
}

// Bài 5
function tinhsum() {
  var n = 68;
  var sum = 0;
  var unit = n % 10;
  var ten = Math.floor(n / 10);
  sum = ten + unit;
  document.getElementById("sum").innerHTML = sum;
}
