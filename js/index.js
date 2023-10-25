// const dateRangePickerEl = document.getElementById("dateRangePickerId");
// new DateRangePicker(dateRangePickerEl, {
//   // options
// });

const refuntCostBtn = document.getElementById("refund-cost");
refuntCostBtn.addEventListener("click", () => {
  //   by clicking on it, show all of it's sibling with class toggleable-tr
  const toggleableTrs = document.querySelectorAll(".refund-tr");
  toggleableTrs.forEach((tr) => {
    tr.classList.toggle("show");
  });
});

const fulfilment = document.getElementById("fulfilment");
fulfilment.addEventListener("click", () => {
  //   by clicking on it, show all of it's sibling with class toggleable-tr
  const fulfilmentTrs = document.querySelectorAll(".fulfilment-tr");
  fulfilmentTrs.forEach((tr) => {
    tr.classList.toggle("show");
  });
});

const advertFees = document.getElementById("advert-fees");
advertFees.addEventListener("click", () => {
  //   by clicking on it, show all of it's sibling with class toggleable-tr
  const advertTrs = document.querySelectorAll(".advert-tr");
  advertTrs.forEach((tr) => {
    tr.classList.toggle("show");
  });
});

const adsCost = document.getElementById("ads-cost");
adsCost.addEventListener("click", () => {
  //   by clicking on it, show all of it's sibling with class toggleable-tr
  const adCostTr = document.querySelectorAll(".ad-cost-tr");
  adCostTr.forEach((tr) => {
    tr.classList.toggle("show");
  });
});

const inventoryFees = document.getElementById("inventory-fees");
inventoryFees.addEventListener("click", () => {
  //   by clicking on it, show all of it's sibling with class toggleable-tr
  const inventoryTr = document.querySelectorAll(".inventory-tr");
  inventoryTr.forEach((tr) => {
    tr.classList.toggle("show");
  });
});

const sidebar = document.getElementById("sidebar");
const sidebarToggler = document.getElementById("sidebar-toggler");
const sidebarBg = document.getElementById("sidebar-bg");

sidebarToggler.addEventListener("click", () => {
  sidebar.classList.toggle("show");
});

sidebarBg.addEventListener("click", () => {
  sidebar.classList.remove("show");
});
