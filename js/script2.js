// let price = document.getElementById("price");
// let brand = document.getElementById("brand");
// let color = document.getElementById("color");
// let cpu = document.getElementById("cpu");
// let storage = document.getElementById("storage");
// let ram = document.getElementById("ram");
// let sim = document.getElementById("sim");
// let software = document.getElementById("software");
// let ul = document.getElementById("ul");
// let ul1 = document.getElementById("ul1");
// let ul2 = document.getElementById("ul2");
// let ul3 = document.getElementById("ul3");
// let ul4 = document.getElementById("ul4");
// let ul5 = document.getElementById("ul5");
// let ul6 = document.getElementById("ul6");
// let ul7 = document.getElementById("ul7");
// function price1() {
//   if (price.style.height === "50px") {
//     ul.style.display = "flex";
//     ul.style.flexDirection = "column";
//     ul.style.justifyContent = "center";
//     ul.style.gap = "10px";
//     ul.style.transition = "all 300ms linear";
//     price.style.height = "auto";
//     ul.style.padding = "20px";
//     ul.style.alignItems = "end";
//   } else {
//     ul.style.display = "none";
//     price.style.height = "50px";
//   }
// }
// function brand1() {
//   if (brand.style.height === "50px") {
//     ul1.style.display = "flex";
//     ul1.style.flexDirection = "column";
//     ul1.style.justifyContent = "center";
//     ul1.style.gap = "10px";
//     brand.style.height = "auto";
//     ul1.style.padding = "20px";
//     ul1.style.alignItems = "end";
//   } else {
//     ul1.style.display = "none";
//     brand.style.height = "50px";
//   }
// }
// function color1() {
//   if (color.style.height === "50px") {
//     ul2.style.display = "flex";
//     ul2.style.flexDirection = "column";
//     ul2.style.justifyContent = "center";
//     ul2.style.gap = "10px";
//     color.style.height = "auto";
//     ul2.style.padding = "20px";
//     ul2.style.alignItems = "end";
//   } else {
//     ul2.style.display = "none";
//     color.style.height = "50px";
//   }
// }
// function cpu1() {
//   if (cpu.style.height === "50px") {
//     ul4.style.display = "flex";
//     ul4.style.flexDirection = "column";
//     ul4.style.justifyContent = "center";
//     ul4.style.gap = "10px";
//     cpu.style.height = "auto";
//     ul4.style.padding = "20px";
//     ul4.style.alignItems = "end";
//   } else {
//     ul4.style.display = "none";
//     cpu.style.height = "50px";
//   }
// }
// function storage1() {
//   if (storage.style.height === "50px") {
//     ul6.style.display = "flex";
//     ul6.style.flexDirection = "column";
//     ul6.style.justifyContent = "center";
//     ul6.style.gap = "10px";
//     storage.style.height = "auto";
//     ul6.style.padding = "20px";
//     ul6.style.alignItems = "end";
//   } else {
//     ul6.style.display = "none";
//     storage.style.height = "50px";
//   }
// }
// function ram1() {
//   if (ram.style.height === "50px") {
//     ul7.style.display = "flex";
//     ul7.style.flexDirection = "column";
//     ul7.style.justifyContent = "center";
//     ul7.style.gap = "10px";
//     ram.style.height = "auto";
//     ul7.style.padding = "20px";
//     ul7.style.alignItems = "end";
//   } else {
//     ul7.style.display = "none";
//     ram.style.height = "50px";
//   }
// }
// function sim1() {
//   if (sim.style.height === "50px") {
//     ul3.style.display = "flex";
//     ul3.style.flexDirection = "column";
//     ul3.style.justifyContent = "center";
//     ul3.style.gap = "10px";
//     sim.style.height = "auto";
//     ul3.style.padding = "20px";
//     ul3.style.alignItems = "end";
//   } else {
//     ul3.style.display = "none";
//     sim.style.height = "50px";
//   }
// }
// function software1() {
//   if (software.style.height === "50px") {
//     ul5.style.display = "flex";
//     ul5.style.flexDirection = "column";
//     ul5.style.justifyContent = "center";
//     ul5.style.gap = "10px";
//     software.style.height = "auto";
//     ul5.style.padding = "20px";
//     ul5.style.alignItems = "end";
//   } else {
//     ul5.style.display = "none";
//     software.style.height = "50px";
//   }
// }
// price.addEventListener("click", price1);
// brand.addEventListener("click", brand1);
// color.addEventListener("click", color1);
// cpu.addEventListener("click", cpu1);
// storage.addEventListener("click", storage1);
// ram.addEventListener("click", ram1);
// sim.addEventListener("click", sim1);
// software.addEventListener("click", software1);
let elements = {
  price: document.getElementById("price"),
  brand: document.getElementById("brand"),
  color: document.getElementById("color"),
  cpu: document.getElementById("cpu"),
  storage: document.getElementById("storage"),
  ram: document.getElementById("ram"),
  sim: document.getElementById("sim"),
  software: document.getElementById("software"),
};

let lists = {
  ul: document.getElementById("ul"),
  ul1: document.getElementById("ul1"),
  ul2: document.getElementById("ul2"),
  ul3: document.getElementById("ul3"),
  ul4: document.getElementById("ul4"),
  ul5: document.getElementById("ul5"),
  ul6: document.getElementById("ul6"),
  ul7: document.getElementById("ul7"),
};

function toggleVisibility(header, list) {
  if (list.style.display === "none" || list.style.display === "") {
    list.style.display = "flex";
    list.style.flexDirection = "column";
    list.style.justifyContent = "center";
    list.style.gap = "10px";
    header.style.height = "250px";
    list.style.padding = "20px";
    list.style.alignItems = "end";
  } else {
    list.style.display = "none";
    header.style.height = "50px";
  }
}

// Initialize all lists to be hidden
for (let key in lists) {
  lists[key].style.display = "none";
}

elements.price.addEventListener("click", () =>
  toggleVisibility(elements.price, lists.ul)
);
elements.brand.addEventListener("click", () =>
  toggleVisibility(elements.brand, lists.ul1)
);
elements.color.addEventListener("click", () =>
  toggleVisibility(elements.color, lists.ul2)
);
elements.cpu.addEventListener("click", () =>
  toggleVisibility(elements.cpu, lists.ul4)
);
elements.storage.addEventListener("click", () =>
  toggleVisibility(elements.storage, lists.ul6)
);
elements.ram.addEventListener("click", () =>
  toggleVisibility(elements.ram, lists.ul7)
);
elements.sim.addEventListener("click", () =>
  toggleVisibility(elements.sim, lists.ul3)
);
elements.software.addEventListener("click", () =>
  toggleVisibility(elements.software, lists.ul5)
);

let click = document.getElementById("click");
let box = document.getElementById("box");
let closee = document.getElementById("close");
click.addEventListener("click", function () {
  box.style.height = "auto";
  click.style.display = "none";
});
closee.addEventListener("click", function () {
  click.style.display = "flex";
  box.style.height = "60px";
});

// let li = document.getElementsByClassName("li").value;
// let active = document.getElementById("g");
// let deactive = document.getElementById("g0");
// li.addEventListener("click", () => {
//   li.setAttribute("id", "g");
//   console.log(li);

//   active.addEventListener("click", function () {
//     active.setAttribute("class", "active");
//     deactive.removeAttribute("class", "active");
//   });
// });
let liElements = document.getElementsByTagName("li");
for (let li of liElements) {
  li.addEventListener("click", () => {
    for (let item of liElements) {
      item.classList.remove("active");
    }
    li.classList.add("active");
  });
}
