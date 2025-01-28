let first = document.getElementById("div1");
let sec = document.getElementById("div2");
let third = document.getElementById("div3");
let four = document.getElementById("div4");
let five = document.getElementById("div5");
let img = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");
let currentExpanded = null;
let loc1 = document.getElementById("imgf");
let loc2 = document.getElementById("imgc");
let loc3 = document.getElementById("imgt");
let btn = document.getElementById("btn");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
function toggleBox(box, img) {
  if (currentExpanded && currentExpanded !== box) {
    currentExpanded.style.height = "92px";
    currentExpanded.querySelector("img").style.transform = "rotate(0deg)";
  }

  if (box.style.height === "300px") {
    box.style.height = "92px";
    img.style.transform = "rotate(0deg)";
    box.style.paddingTop = "30px";

    currentExpanded = null;
  } else {
    box.style.height = "300px";
    box.style.paddingTop = "20px";
    box.style.alignItems = "baseline";
    img.style.transform = "rotate(180deg)";
    currentExpanded = box;
  }
}

first.addEventListener("click", function () {
  toggleBox(first, img);
});
sec.addEventListener("click", function () {
  toggleBox(sec, img2);
});
third.addEventListener("click", function () {
  toggleBox(third, img3);
});
four.addEventListener("click", function () {
  toggleBox(four, img4);
});
five.addEventListener("click", function () {
  toggleBox(five, img5);
});

let hozori = document.getElementById("hozori");
let online = document.getElementById("online");
let h2 = document.getElementById("h2");
let p = document.getElementById("change");
let sec1 = document.getElementById("sec1");
let sec2 = document.getElementById("sec2");
let sec3 = document.getElementById("sec3");
let none = document.getElementById("last");
let none1 = document.getElementById("last1");
let none2 = document.getElementById("last2");
h2.innerHTML = "تامین کنندگان اعتبار";
p.innerHTML = ".یکی از تامین‌کنندگان را برای دریافت اعتبار انتخاب کنید";
loc1.innerHTML = "<img src='./media/tara.svg'/>";
loc1.style.height = "75px";
loc2.innerHTML = "<img src='./media/azki.svg'/>";
loc2.style.height = "75px";
loc2.style.width = "180px";
loc3.innerHTML = "<img src='./media/digipay.png'/>";
loc3.style.height = "75px";
loc3.style.width = "75px";
hozori.addEventListener("click", function () {
  none.style.display = "none";
  none1.style.display = "none";
  none2.style.display = "none";
  btn.style.display = "none";
  btn1.style.display = "none";
  btn2.style.display = "none";
  hozori.style.backgroundColor = "#e10a0a";
  hozori.style.color = "white";
  hozori.style.borderRadius = "24px";
  online.style.backgroundColor = "transparent";
  online.style.color = "#e10a0a";
  hozori.style.borderRadius = "24px";
  hozori.style.overflow = "hidden";
  h2.innerHTML = "شعب دی‌جی‌لند";
  p.innerHTML = "یکی از شعب را برای دریافت اعتبار انتخاب کنید";
  loc1.innerHTML = "<img src='./media/loc.png'/>";
  loc1.style.height = "200px";
  loc1.style.width = "200px";
  loc1.style.cursor = "grab";
  sec1.innerHTML = "دیجی لند بازار موبایل";
  loc2.innerHTML = "<img src='./media/loc2.png'/>";
  loc2.style.height = "200px";
  loc2.style.width = "200px";
  loc2.style.cursor = "grab";
  sec2.innerHTML = "دیجی لند علاالدین ";

  loc3.innerHTML = "<img src='./media/loc3.png'/>";
  loc3.style.height = "200px";
  loc3.style.width = "200px";
  loc3.style.cursor = "grab";
  sec3.innerHTML = "دیجی لند چارسو";

});
online.addEventListener("click", function () {
  none.style.display = "flex";
  none1.style.display = "flex";
  none2.style.display = "flex";
  btn.style.display = "flex";
  btn1.style.display = "flex";
  btn2.style.display = "flex";
  online.style.backgroundColor = "#e10a0a";
  online.style.color = "white";
  online.style.borderRadius = "24px";
  hozori.style.backgroundColor = "transparent";
  hozori.style.color = "#e10a0a";
  online.style.borderRadius = "24px";
  online.style.overflow = "hidden";
  h2.innerHTML = "تامین کنندگان اعتبار";
  p.innerHTML = ".یکی از تامین‌کنندگان را برای دریافت اعتبار انتخاب کنید";
  loc1.innerHTML = "<img src='./media/tara.svg'/>";
  loc1.style.height = "75px";
  sec1.innerHTML = "تا 100 میلیون تومان";

  loc2.innerHTML = "<img src='./media/azki.svg'/>";
  loc2.style.height = "75px";
  sec2.innerHTML = "تا 75 میلیون تومان";

  loc3.innerHTML = "<img src='./media/digipay.png'/>";
  loc3.style.height = "75px";
  loc3.style.width = "75px";
  sec3.innerHTML = "تا 50 میلیون تومان";

});
