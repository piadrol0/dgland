let click = document.getElementById("click");
let box = document.getElementById("box");
let closee = document.getElementById("close");
let section = document.getElementById("section");
let sub = document.getElementById("sub");
let li1 = document.getElementById("li1");
let li2 = document.getElementById("li2");
let li3 = document.getElementById("li3");
let li4 = document.getElementById("li4");
let li5 = document.getElementById("li5");
let li6 = document.getElementById("li6");
let li7 = document.getElementById("li7");
let li8 = document.getElementById("li8");
let a = document.getElementById("fill");
let titre1 = document.getElementById("co1");
let titre2 = document.getElementById("co2");
let titre3 = document.getElementById("co3");
let sartitre1 = document.getElementById("c");
let sartitre2 = document.getElementById("c2");
let sartitre3 = document.getElementById("c3");
let op1 = document.getElementById("op1");
let op2 = document.getElementById("op2");
let op3 = document.getElementById("op3");
let op4 = document.getElementById("op4");
let op5 = document.getElementById("op5");
let op6 = document.getElementById("op6");
let op7 = document.getElementById("op7");
let op8 = document.getElementById("op8");
let op9 = document.getElementById("op9");
let op10 = document.getElementById("op10");
let op11 = document.getElementById("op11");
let op12 = document.getElementById("op12");
let op13 = document.getElementById("op13");
let op14 = document.getElementById("op14");
let op15 = document.getElementById("op15");
let op16 = document.getElementById("op16");
let op17 = document.getElementById("op17");
let op18 = document.getElementById("op18");
let op19 = document.getElementById("op19");
let op20 = document.getElementById("op20");
let op21 = document.getElementById("op21");
let op22 = document.getElementById("op22");
let op23 = document.getElementById("op23");
let op24 = document.getElementById("op24");
let op25 = document.getElementById("op25");
let op26 = document.getElementById("op26");
let op27 = document.getElementById("op27");
let op29 = document.getElementById("op29");
let op30 = document.getElementById("op30");
let op31 = document.getElementById("op31");
let op32 = document.getElementById("op32");
let op28 = document.getElementById("op28");
let op33 = document.getElementById("op33");
let op34 = document.getElementById("op34");
const bodyElem = document.body;
section.addEventListener("mouseenter", () => {
  sub.style.display = "flex";
  sub.style.transition="all 300ms linear";
});
sub.addEventListener("mouseleave", () => {
  sub.style.display = "none";
  sub.style.transition="all 300ms linear";
});

li1.addEventListener("mouseenter",()=>{
  a.innerHTML=" <img src='./media/تیر آبی.svg'> همه محصولات موبایل  "
  sartitre1.innerHTML="موبایل بر اساس قیمت <span>|</span>";
  op1.innerHTML="موبایل ارزان ";
  op2.innerHTML="موبایل تا 2 میلیون";
  op3.innerHTML="موبایل تا 5 میلیون";
  op4.innerHTML="موبایل تا 10 میلیون";
  op5.innerHTML="موبایل تا 15 میلیون";
  op6.innerHTML="موبایل تا 20 میلیون";
  op7.innerHTML="موبایل تا 30 میلیون";
  op8.innerHTML="موبایل تا 35 میلیون";
  op9.innerHTML="موبایل تا 40 میلیون";
  op10.innerHTML="موبایل تا 45 میلیون";
  op11.innerHTML="موبایل تا 50 میلیون";
  sartitre2.innerHTML="موبایل بر اساس کاربرد <span>|</span>";
  op12.innerHTML="موبایل ساده";
  op13.innerHTML="موبایل گیمینگ ";
  op14.innerHTML="موبایل عکاسی ";
  op15.innerHTML="موبایل پرچمدار";
  op16.innerHTML="موبایل ضدآب";
  op17.innerHTML= "";
  op18.innerHTML="موبایل ساده";
  op19.innerHTML="موبایل ساده";
  op20.innerHTML="موبایل ساده";
  op21.innerHTML="موبایل ساده";
  op22.innerHTML="موبایل ساده";
  sartitre3.innerHTML="موبایل بر اساس برند <span>|</span>";
  op23.innerHTML="موبایل ریلمی";
  op24.innerHTML="موبایل ساده";
  op25.innerHTML="موبایل ساده";
  op26.innerHTML="موبایل ساده";
  op27.innerHTML="موبایل ساده";
  op28.innerHTML="موبایل ساده";
  op29.innerHTML="موبایل ساده";
  op30.innerHTML="موبایل ساده";
  op31.innerHTML="موبایل ساده";
  op32.innerHTML="موبایل ساده";
  op33.innerHTML="موبایل ساده";
  op34.innerHTML="موبایل ساده";

})
li2.addEventListener("mouseenter",()=>{
  a.innerHTML="<img src='./media/تیر آبی.svg'> همه محصولات لوازم جانبی ";
  sartitre1.innerHTML="شارژر بر اساس برند <span>|</span>";
  op1.innerHTML="موبایل ارزان ";
  op2.innerHTML="موبایل تا 2 میلیون";
  op3.innerHTML="موبایل تا 5 میلیون";
  op4.innerHTML="موبایل تا 10 میلیون";
  op5.innerHTML="موبایل تا 15 میلیون";
  op6.innerHTML="موبایل تا 20 میلیون";
  sartitre2.innerHTML="پاوربانک بر اساس برند <span>|</span>";
  op7.innerHTML="موبایل ساده";
  op8.innerHTML="موبایل گیمینگ ";
  op9.innerHTML="موبایل عکاسی ";
  op10.innerHTML="موبایل پرچمدار";
  op11.innerHTML="موبایل ضدآب";
  op12.innerHTML="";
  sartitre3.innerHTML="کابل شارژ و مبدل <span>|</span>";
  op13.innerHTML="موبایل سامسونگ";
  op14.innerHTML="موبایل آیفون";
  op15.innerHTML="موبایل شیایومی";
  op16.innerHTML="موبایل نوکیا";
  op17.innerHTML="موبایل هوآوی";
  op18.innerHTML="موبایل آنر";
  op19.innerHTML="موبایل اپو";
  op20.innerHTML="موبایل موتورولا";
  op21.innerHTML="موبایل ریلمی";

})
li3.addEventListener("mouseenter",()=>{
  a.innerHTML=" <img src='./media/تیر آبی.svg'> همه محصولات هدفون ";
  sartitre1.innerHTML="موبایل بر اساس قیمت <span>|</span>";
  op1.innerHTML="موبایل ارزان ";
  op2.innerHTML="موبایل تا 2 میلیون";
  op3.innerHTML="موبایل تا 5 میلیون";
  op4.innerHTML="موبایل تا 10 میلیون";
  op5.innerHTML="موبایل تا 15 میلیون";
  op6.innerHTML="موبایل تا 20 میلیون";
  sartitre2.innerHTML="موبایل بر اساس کاربرد <span>|</span>";
  op7.innerHTML="موبایل ساده";
  op8.innerHTML="موبایل گیمینگ ";
  op9.innerHTML="موبایل عکاسی ";
  op10.innerHTML="موبایل پرچمدار";
  op11.innerHTML="موبایل ضدآب";
  op12.innerHTML="";
  sartitre3.innerHTML="موبایل بر اساس برند <span>|</span>";
  op13.innerHTML="موبایل سامسونگ";
  op14.innerHTML="موبایل آیفون";
  op15.innerHTML="موبایل شیایومی";
  op16.innerHTML="موبایل نوکیا";
  op17.innerHTML="موبایل هوآوی";
  op18.innerHTML="موبایل آنر";
  op19.innerHTML="موبایل اپو";
  op20.innerHTML="موبایل موتورولا";
  op21.innerHTML="موبایل ریلمی";
})
li4.addEventListener("mouseenter",()=>{
  a.innerHTML="<img src='./media/تیر آبی.svg'> همه محصولات لپتاب ";
  sartitre1.innerHTML="شارژر بر اساس برند <span>|</span>";
  op1.innerHTML="موبایل ارزان ";
  op2.innerHTML="موبایل تا 2 میلیون";
  op3.innerHTML="موبایل تا 5 میلیون";
  op4.innerHTML="موبایل تا 10 میلیون";
  op5.innerHTML="موبایل تا 15 میلیون";
  op6.innerHTML="موبایل تا 20 میلیون";
  sartitre2.innerHTML="پاوربانک بر اساس برند <span>|</span>";
  op7.innerHTML="موبایل ساده";
  op8.innerHTML="موبایل گیمینگ ";
  op9.innerHTML="موبایل عکاسی ";
  op10.innerHTML="موبایل پرچمدار";
  op11.innerHTML="موبایل ضدآب";
  op12.innerHTML="";
  sartitre3.innerHTML="کابل شارژ و مبدل <span>|</span>";
  op13.innerHTML="موبایل سامسونگ";
  op14.innerHTML="موبایل آیفون";
  op15.innerHTML="موبایل شیایومی";
  op16.innerHTML="موبایل نوکیا";
  op17.innerHTML="موبایل هوآوی";
  op18.innerHTML="موبایل آنر";
  op19.innerHTML="موبایل اپو";
  op20.innerHTML="موبایل موتورولا";
  op21.innerHTML="موبایل ریلمی";
})
li5.addEventListener("mouseenter",()=>{
  a.innerHTML="<img src='./media/تیر آبی.svg'> همه محصولات کامپیوتر ";
  sartitre1.innerHTML="موبایل بر اساس قیمت <span>|</span>";
  op1.innerHTML="موبایل ارزان ";
  op2.innerHTML="موبایل تا 2 میلیون";
  op3.innerHTML="موبایل تا 5 میلیون";
  op4.innerHTML="موبایل تا 10 میلیون";
  op5.innerHTML="موبایل تا 15 میلیون";
  op6.innerHTML="موبایل تا 20 میلیون";
  sartitre2.innerHTML="موبایل بر اساس کاربرد <span>|</span>";
  op7.innerHTML="موبایل ساده";
  op8.innerHTML="موبایل گیمینگ ";
  op9.innerHTML="موبایل عکاسی ";
  op10.innerHTML="موبایل پرچمدار";
  op11.innerHTML="موبایل ضدآب";
  op12.innerHTML="";
  sartitre3.innerHTML="موبایل بر اساس برند <span>|</span>";
  op13.innerHTML="موبایل سامسونگ";
  op14.innerHTML="موبایل آیفون";
  op15.innerHTML="موبایل شیایومی";
  op16.innerHTML="موبایل نوکیا";
  op17.innerHTML="موبایل هوآوی";
  op18.innerHTML="موبایل آنر";
  op19.innerHTML="موبایل اپو";
  op20.innerHTML="موبایل موتورولا";
  op21.innerHTML="موبایل ریلمی";
})
li6.addEventListener("mouseenter",()=>{
  a.innerHTML="<img src='./media/تیر آبی.svg'> همه محصولات گیمینگ ";
  sartitre1.innerHTML="شارژر بر اساس برند <span>|</span>";
  op1.innerHTML="موبایل ارزان ";
  op2.innerHTML="موبایل تا 2 میلیون";
  op3.innerHTML="موبایل تا 5 میلیون";
  op4.innerHTML="موبایل تا 10 میلیون";
  op5.innerHTML="موبایل تا 15 میلیون";
  op6.innerHTML="موبایل تا 20 میلیون";
  sartitre2.innerHTML="پاوربانک بر اساس برند <span>|</span>";
  op7.innerHTML="موبایل ساده";
  op8.innerHTML="موبایل گیمینگ ";
  op9.innerHTML="موبایل عکاسی ";
  op10.innerHTML="موبایل پرچمدار";
  op11.innerHTML="موبایل ضدآب";
  op12.innerHTML="";
  sartitre3.innerHTML="کابل شارژ و مبدل <span>|</span>";
  op13.innerHTML="موبایل سامسونگ";
  op14.innerHTML="موبایل آیفون";
  op15.innerHTML="موبایل شیایومی";
  op16.innerHTML="موبایل نوکیا";
  op17.innerHTML="موبایل هوآوی";
  op18.innerHTML="موبایل آنر";
  op19.innerHTML="موبایل اپو";
  op20.innerHTML="موبایل موتورولا";
  op21.innerHTML="موبایل ریلمی";
})
li7.addEventListener("mouseenter",()=>{
  a.innerHTML="<img src='./media/تیر آبی.svg'> همه محصولات صوتی ";
  sartitre1.innerHTML="موبایل بر اساس قیمت <span>|</span>";
  op1.innerHTML="موبایل ارزان ";
  op2.innerHTML="موبایل تا 2 میلیون";
  op3.innerHTML="موبایل تا 5 میلیون";
  op4.innerHTML="موبایل تا 10 میلیون";
  op5.innerHTML="موبایل تا 15 میلیون";
  op6.innerHTML="موبایل تا 20 میلیون";
  sartitre2.innerHTML="موبایل بر اساس کاربرد <span>|</span>";
  op7.innerHTML="موبایل ساده";
  op8.innerHTML="موبایل گیمینگ ";
  op9.innerHTML="موبایل عکاسی ";
  op10.innerHTML="موبایل پرچمدار";
  op11.innerHTML="موبایل ضدآب";
  op12.innerHTML="";
  sartitre3.innerHTML="موبایل بر اساس برند <span>|</span>";
  op13.innerHTML="موبایل سامسونگ";
  op14.innerHTML="موبایل آیفون";
  op15.innerHTML="موبایل شیایومی";
  op16.innerHTML="موبایل نوکیا";
  op17.innerHTML="موبایل هوآوی";
  op18.innerHTML="موبایل آنر";
  op19.innerHTML="موبایل اپو";
  op20.innerHTML="موبایل موتورولا";
  op21.innerHTML="موبایل ریلمی";
})
li8.addEventListener("mouseenter",()=>{
  a.innerHTML="<img src='./media/تیر آبی.svg'> همه محصولات ذخیره سازی ";
  sartitre1.innerHTML="شارژر بر اساس برند <span>|</span>";
  op1.innerHTML="موبایل ارزان ";
  op2.innerHTML="موبایل تا 2 میلیون";
  op3.innerHTML="موبایل تا 5 میلیون";
  op4.innerHTML="موبایل تا 10 میلیون";
  op5.innerHTML="موبایل تا 15 میلیون";
  op6.innerHTML="موبایل تا 20 میلیون";
  sartitre2.innerHTML="پاوربانک بر اساس برند <span>|</span>";
  op7.innerHTML="موبایل ساده";
  op8.innerHTML="موبایل گیمینگ ";
  op9.innerHTML="موبایل عکاسی ";
  op10.innerHTML="موبایل پرچمدار";
  op11.innerHTML="موبایل ضدآب";
  op12.innerHTML="";
  sartitre3.innerHTML="کابل شارژ و مبدل <span>|</span>";
  op13.innerHTML="موبایل سامسونگ";
  op14.innerHTML="موبایل آیفون";
  op15.innerHTML="موبایل شیایومی";
  op16.innerHTML="موبایل نوکیا";
  op17.innerHTML="موبایل هوآوی";
  op18.innerHTML="موبایل آنر";
  op19.innerHTML="موبایل اپو";
  op20.innerHTML="موبایل موتورولا";
  op21.innerHTML="موبایل ریلمی";
})





click.addEventListener("click", function () {
  box.style.height = "auto";
  click.style.display = "none";
});
closee.addEventListener("click", function () {
  click.style.display = "flex";
  box.style.height = "298px";
});
const images = [];
for (let i = 0; i <= 9; i++) {
  images.push(document.getElementById(`img${i}`));
}
const stopp = document.getElementById("sc17");
images.forEach((img) => {
  if (img) {
    img.addEventListener("mouseenter", function () {
      stopp.style.animationPlayState = "paused";
    });
    img.addEventListener("mouseleave", function () {
      stopp.style.animationPlayState = "running";
    });
  }
});
//page2 javascript

// first.addEventListener("click", function () {
//     if (!isExpanded) {
//         first.style.height = "300px";
//         first.style.alignItems = "baseline";
//         first.style.paddingTop = "20px";
//         img.style.transform = "rotate(180deg)";
//     } else {
//         first.style.height = "92px";
//         img.style.transform = "rotate(0deg)";
//     }
//     isExpanded = !isExpanded;
// });
// sec.addEventListener("click", function () {
//   if (!isExpanded) {
//       sec.style.height = "300px";
//       sec.style.alignItems = "baseline";
//       sec.style.paddingTop = "20px";
//       img2.style.transform = "rotate(180deg)";
//   } else {
//       sec.style.height = "92px";
//       img2.style.transform = "rotate(0deg)";
//   }
//   isExpanded = !isExpanded;
// });
// third.addEventListener("click", function () {
//   if (!isExpanded) {
//       third.style.height = "300px";
//       third.style.alignItems = "baseline";
//       third.style.paddingTop = "20px";
//       img3.style.transform = "rotate(180deg)";
//   } else {
//       third.style.height = "92px";
//       img3.style.transform = "rotate(0deg)";
//   }
//   isExpanded = !isExpanded;
// });
// four.addEventListener("click", function () {
//   if (!isExpanded) {
//       four.style.height = "300px";
//       four.style.alignItems = "baseline";
//       four.style.paddingTop = "20px";
//       img4.style.transform = "rotate(180deg)";
//   } else {
//       four.style.height = "92px";
//       img4.style.transform = "rotate(0deg)";
//   }
//   isExpanded = !isExpanded;
// });
// five.addEventListener("click", function () {
//   if (!isExpanded) {
//       five.style.height = "300px";
//       five.style.alignItems = "baseline";
//       five.style.paddingTop = "20px";
//       img5.style.transform = "rotate(180deg)";
//   } else {
//       five.style.height = "92px";
//       img5.style.transform = "rotate(0deg)";
//   }
//   isExpanded = !isExpanded;
// });
