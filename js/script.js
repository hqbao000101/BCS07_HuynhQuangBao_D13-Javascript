// BT1: Tính tiền lương nhân viên
/*
  input: lương 1 ngày (100.000), số ngày làm (người dùng nhập vào)
  xử lý:
    - Lấy giá trị lương 1 ngày từ form - 100.000
    - Người dùng nhập vào số ngày làm trong form
    - Người dùng nhấn submit thì sẽ lấy giá trị số ngày người dùng vừa nhập ở trên
    - Tính lương nhân viên theo công thức:
      Lương nhân viên = lương 1 ngày * số ngày làm
  output: Lương nhân viên
*/

var salaryPerDay = document.getElementById("hidden_data").value;
document
  .querySelector(".ex1 form button")
  .addEventListener("click", function () {
    var workingDay = document.getElementById("day").value;
    var result = salaryPerDay * workingDay;
    var formatResult = result.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    document.querySelector(".ex1 form #footer1 span").innerHTML = formatResult;
  });

// BT2: Tính giá trị trung bình
/*
  input: 5 số thực (người dùng nhập vào)
  xử lý:
    - Người dùng lần lượt nhập 5 số thực vào form
    - Người dùng nhấn nút "calculate"
    - Lấy giá trị của 5 số thực mà người dùng vừa nhập vào form
    - Tính giá trị trung bình theo công thức:
      Trung bình = tổng 5 số thực / 5
  output: Giá trị trung bình của 5 số thực ở trên
*/

document.getElementById("average").onclick = function () {
  var first = +document.getElementById("firstNumber").value;
  var second = +document.getElementById("secondNumber").value;
  var third = +document.getElementById("thirdNumber").value;
  var fourth = +document.getElementById("fourthNumber").value;
  var fifth = +document.getElementById("fifthNumber").value;
  var result = (first + second + third + fourth + fifth) / 5;
  document.querySelector(".ex2 form #footer2 span").innerHTML = result;
};

// BT3: Quy đổi tiền
/*
  input: giá USD hiện nay, số tiền USD 
  xử lý:
    - Người dùng nhập vào  số đô muốn đổi
    - Người dùng nhấn "exchange"
    - Lấy số đô người dùng vừa nhập
    - Quy đổi qua VND theo công thức:
      Tiền Việt = tiền Đô * giá USD hiện nay
  output: số tiền Việt được quy đổi
*/

const usdToVND = 23500;
document.getElementById("toVND").onclick = function () {
  var numberUSD = document.getElementById("usd").value;
  var result = numberUSD * usdToVND;
  var formatResult = result.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  document.querySelector(".ex3 form #footer3 span").innerHTML = formatResult;
};

// BT4: Tính chu vi và diện tích của hình chữ nhật
/*
  input: chiều dài, chiều rộng (người dùng nhập vào)
  xử lý:
    - Người dùng nhập vào chiều dài và chiều rộng
    - Người dùng nhấn "Calculate"
    - Lấy giá trị chiều dài và chiều rộng người dùng vừa nhập
    - Tính chu vi và diện tích tương ứng:
      chu vi = (dài + rộng)*2
      diện tích = (dài * rộng)
  output: chu vi và diện tích tương ứng của hình chữ nhật
*/

document.getElementById("rectangle").onclick = function () {
  var width = document.getElementById("width").value * 1;
  var height = document.getElementById("height").value * 1;
  var perimeter = (width + height) * 2;
  var acreage = width * height;
  document.querySelector(".ex4 form #perimeter span").innerHTML = perimeter;
  document.querySelector(".ex4 form #acreage span").innerHTML = acreage;
};

// BT5: Tính tổng 2 ký số
/*
  input: 1 số có 2 chữ số (Người dùng nhập vào)
  xử lý:
    - Người dùng nhập vào một số có 2 chữ số
    - Người dùng nhấn "sum"
    - Kiểm tra dữ liệu đầu vào có đúng là 1 số có 2 chữ số hay không (10 <= số <= 99)
    - Nếu không đúng thì thông báo để người dùng nhập lại
    - Nếu đúng thì bắt đầu xử lý dữ liệu
      + Lấy số hàng chục: số / 10 rồi dùng Math.floor()
      + Lấy số hàng đơn vị: số % 10
    - Tính tổng = hàng chục + hàng đơn vị
  output: Tổng 2 ký số của số người dùng nhập vào
*/

document.getElementById("sum").onclick = function () {
  var twoDigit = document.getElementById("twoDigitNumber").value * 1;
  if (10 <= twoDigit && twoDigit <= 99) {
    var firstNumber = Math.floor(twoDigit / 10);
    var secondNumber = twoDigit % 10;
    var result = firstNumber + secondNumber;
    document.querySelector(".ex5 form #footer5 span").innerHTML = result;
  } else {
    alert("BT5 - Số bạn vừa nhập không hợp lệ");
  }
};
