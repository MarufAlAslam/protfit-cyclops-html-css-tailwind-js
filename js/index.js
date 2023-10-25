// const dateRangePickerEl = document.getElementById("dateRangePickerId");
// new DateRangePicker(dateRangePickerEl, {
//   // options
// });

const refuntCostBtn = document.getElementById("refund-cost");
const refundCostTr = document.getElementById("refund-cost-tr");
refuntCostBtn.addEventListener("click", () => {
  refundCostTr.classList.toggle("bg-gray-100")
  const toggleableTrs = document.querySelectorAll(".refund-tr");
  toggleableTrs.forEach((tr) => {
    tr.classList.toggle("show");
    tr.classList.toggle("bg-gray-100");
  });
});

const fulfilment = document.getElementById("fulfilment");
const fulfilmentTr = document.getElementById("fulfilment-tr");
fulfilment.addEventListener("click", () => {
  fulfilmentTr.classList.toggle("bg-gray-100")
  const fulfilmentTrs = document.querySelectorAll(".fulfilment-tr");
  fulfilmentTrs.forEach((tr) => {
    tr.classList.toggle("show");
    tr.classList.toggle("bg-gray-100");
  });
});

const advertFees = document.getElementById("advert-fees");
const advertTr = document.getElementById("advert-tr");
advertFees.addEventListener("click", () => {
  advertTr.classList.toggle("bg-gray-100")
  const advertTrs = document.querySelectorAll(".advert-tr");
  const adCostTr = document.querySelectorAll(".ad-cost-tr");
  advertTrs.forEach((tr) => {
    tr.classList.toggle("show");
    tr.classList.toggle("bg-gray-100");
  });
  adCostTr.forEach((tr) => {
    tr.classList.remove("show");
    tr.classList.toggle("bg-gray-100");
  });
});

const adsCost = document.getElementById("ads-cost");
const adsCostTr = document.getElementById("ads-cost-tr");
adsCost.addEventListener("click", () => {
  adsCostTr.classList.toggle("bg-gray-200")
  const adCostTr = document.querySelectorAll(".ad-cost-tr");
  adCostTr.forEach((tr) => {
    tr.classList.toggle("show");
    tr.classList.toggle("bg-gray-200");
  });
});

const inventoryFees = document.getElementById("inventory-fees");
const inventoryTrr = document.getElementById("inventory-tr");
inventoryFees.addEventListener("click", () => {
  inventoryTrr.classList.toggle("bg-gray-100")
  const inventoryTr = document.querySelectorAll(".inventory-tr");
  inventoryTr.forEach((tr) => {
    tr.classList.toggle("show");
    tr.classList.toggle("bg-gray-100");
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
