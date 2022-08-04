///// 1. Viết một chương trình JavaScript đơn giản để nối tất
//     cả các phần tử của mảng sau thành một chuỗi.

// myColor = ["Red", "Green", "White", "Black"];
// let a = myColor.join(",");
// let b = myColor.join("+");
// alert(a);
// alert(b);

//// 2.  Viết chương trình JavaScript chấp nhận một số làm đầu vào
//// và chèn dấu gạch ngang (-) vào giữa hai số chẵn. Ví dụ: nếu bạn chấp
////  nhận 025468, đầu ra phải là 0-2-5-4-6-8.

// let n = prompt("Nhập vào một dãy số liền nhau bất kỳ").split("");
// let rong = [];
// for (let i = 0; i < n.length; i++) {
//   rong.push(n[i]);
// }
// let p = rong.join("-");
// console.log(p);

/// 3. Viết một chương trình JavaScript chấp nhận một chuỗi làm đầu vào
///    và hoán đổi trường hợp của mỗi ký tự. Ví dụ: nếu bạn nhập 'The Quick Brown Fox',
///    đầu ra phải là 'tHE qUICK bROWN fOX'.

/// 4.Viết kịch bản yêu cầu người dùng nhập một dãy số,
//   Các số được phân tách bằng dấu phẩy, tính tổng các số
//   và hiển thị cho người dùng

// let nummber = prompt(
//   "Bạn hãy nhập một dãy số được ngăn cách nhau bởi dấu phẩy (,)"
// ).split(",");
// let arr = 0;

// for (let i = 0; i < nummber.length; i++) {
//   arr = arr + Number(nummber[i]);
// }
// alert(` Dãy số có tổng = ${arr}`);

////   5.Viết script yêu cầu người dùng nhập một dãy số,
//      các số được phân tách bằng dấu phẩy,
//      tìm số nhỏ nhất và đăng xuất cho người dùng

// let nummmber = prompt(
//   "Bạn hãy nhập một dãy số bất kỳ ngăn cách nhau bởi dấu phẩy (,)"
// ).split(",");
// let min = Number(nummmber[0]);
// for (let i = 0; i <= nummmber.length - 1; i++) {
//   if (min >= Number(nummmber[i])) {
//     min = Number(nummmber[i]);
//   }
// }
// console.log(`Số nhỏ nhất là : ${min}`);

/////  6.Tạo một mảng chứa ít nhất 5 số, sau đó yêu cầu người dùng nhập một số,
/////   thực hiện tìm kiếm để tìm số trong mảng, nếu số được tìm thấy, hãy cho người
////    dùng biết rằng với chỉ số của nó trong mảng, nếu không, cũng nói với họ như vậy

// let array = [12, -9, 32, 68, 86, 98];
// let a = Number(prompt("Nhập số bạn muốn kiểm tra"));
// let findindex = -1;
// for (let i = 0; i < array.length; i++) {
//   if (a === array[i]) {
//     findindex = i;
//   }
// }
// if (findindex === -1) {
//   alert(` Số ${a} không có trong mảng`);
// } else {
//   alert(` Số ${a} có trong mảng và chỉ số là ${findindex}`);
// }

///// 7 .

//// 7.1 ạo một mảng để thể hiện kích thước đàn của bạn và ghi
//   lại tất cả kích thước đàn của bạn, đầu ra màn hình dự kiến:

// let aa = [5, 7, 300, 90, 24, 50, 75];
// alert(`Xin chào, Đây là kích thước đàn cừu nhà tôi :[${aa}]`);

// /// 7.2

// let maxx = Math.max.apply(null, aa);
// alert(`Con cừu lớn nhất của tôi có kích thước ${maxx}, hãy cạo nó`);

// /// 7.3

// aa[aa.indexOf(maxx)] = 8;
// console.log("sau khi cạo lông đây là đàn cừu của tôi");
// console.log(aa);
// let t1 = 0;
// for (let i = 0; i < 3; i++) {
//   t1++;
//   for (let i = 0; i < aa.length; i++) {
//     aa[i] = aa[i] + 50;
//   }
//   console.log("1month" + t1);
//   console.log(
//     "Sau 1 tháng bầy cừu của tôi đã lớn, đây là kích thước đàn cừu của tôi"
//   );
//   console.log(aa);
//   let maxx = Math.max.apply(null, aa);
//   console.log(`Con cừu lớn nhất của tôi có kích thước ${maxx}, hãy cạo nó`);
//   aa[aa.indexOf(maxx)] = 8;
//   console.log("Sau khi cạo lông đây là đàn cừu của tôi");
//   console.log(aa);
// }
// let c = 0;
// for (let i = 0; i < aa.length; i++) {
//   c += aa[i];
// }
// console.log(`Đàn của tôi  tổng kích thước ${c}`);
// let tien = c * 2;
// console.log(`Tôi sẽ lấy ${c} x 2$ = ${tien}`);

//// 8 ..
// let aaa = prompt("Nhập tên tất cả mọi người trong lớp");
// let bb = aaa.split(",");
// let cv = [];
// for (let i = 0; i < bb.length; i++) {
//   cv.push(`<${bb[i]}>`);
// }
// console.log(`${bb}=>  ${cv}`);

/// 9.

// let ab = prompt("nhập dãy số");
// let bc = ab.split(",");
// let ca = [];
// for (let i = 0; i < bc.length; i++) {
//   if (Number(bc[i]) % 2 == 1) {
//     ca.push(bc[i]);
//   }
// }
// console.log(`${bc} => ${ca}`);
