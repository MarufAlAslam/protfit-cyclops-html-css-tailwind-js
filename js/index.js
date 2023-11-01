// const dateRangePickerEl = document.getElementById("dateRangePickerId");
// new DateRangePicker(dateRangePickerEl, {
//   // options
// });

const refuntCostBtn = document.getElementById("refund-cost");
const refundCostTr = document.getElementById("refund-cost-tr");
refuntCostBtn.addEventListener("click", () => {
  refundCostTr.classList.toggle("active-bg")
  const toggleableTrs = document.querySelectorAll(".refund-tr");
  toggleableTrs.forEach((tr) => {
    tr.classList.toggle("show");
    tr.classList.toggle("active-bg");
  });
});

const fulfilment = document.getElementById("fulfilment");
const fulfilmentTr = document.getElementById("fulfilment-tr");
fulfilment.addEventListener("click", () => {
  fulfilmentTr.classList.toggle("active-bg")
  const fulfilmentTrs = document.querySelectorAll(".fulfilment-tr");
  fulfilmentTrs.forEach((tr) => {
    tr.classList.toggle("show");
    tr.classList.toggle("active-bg");
  });
});

const advertFees = document.getElementById("advert-fees");
const advertTr = document.getElementById("advert-tr");
advertFees.addEventListener("click", () => {
  advertTr.classList.toggle("active-bg")
  const advertTrs = document.querySelectorAll(".advert-tr");
  const adCostTr = document.querySelectorAll(".ad-cost-tr");
  advertTrs.forEach((tr) => {
    tr.classList.toggle("show");
    tr.classList.toggle("active-bg");
  });
  adCostTr.forEach((tr) => {
    tr.classList.remove("show");
    tr.classList.toggle("active-bg");
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
  inventoryTrr.classList.toggle("active-bg")
  const inventoryTr = document.querySelectorAll(".inventory-tr");
  inventoryTr.forEach((tr) => {
    tr.classList.toggle("show");
    tr.classList.toggle("active-bg");
  });
});
const otherFees = document.getElementById("other-fees");
const otherTrr = document.getElementById("other-tr");
otherFees.addEventListener("click", () => {
  otherTrr.classList.toggle("active-bg")
  const otherTr = document.querySelectorAll(".other-tr");
  otherTr.forEach((tr) => {
    tr.classList.toggle("show");
    tr.classList.toggle("active-bg");
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


const datepicker = document.getElementsByClassName('datepicker')

// datepicker will be hidden once user starts scrolling
window.addEventListener('scroll', function () {
  for (let i = 0; i < datepicker.length; i++) {
    datepicker[i].classList.add('hidden')
  }
})

const dropdownHelperRadioButton = document.getElementById('dropdownHelperRadioButton')
const dropdownHelperRadioButtonx = document.getElementById('dropdownHelperRadioButtonx')
const dropdownHelperRadioButtony = document.getElementById('dropdownHelperRadioButtony')
const dropdownHelperRadioButtonz = document.getElementById('dropdownHelperRadioButtonz')
const overlay = document.getElementById('overlay')
const overlayx = document.getElementById('overlayx')
const overlayy = document.getElementById('overlayy')
const overlayz = document.getElementById('overlayz')

// clicking on dropdownHelperRadioButton, the icon inside will change direction
dropdownHelperRadioButton.addEventListener('click', function () {
  const dropdownHelperIcon = document.getElementById('dropdownHelperIcon')
  dropdownHelperIcon.classList.toggle('rotate-180')
  overlay.classList.toggle('show')
})
// clicking on dropdownHelperRadioButton, the icon inside will change direction
dropdownHelperRadioButtonx.addEventListener('click', function () {
  const dropdownHelperIcon = document.getElementById('dropdownHelperIconx')
  dropdownHelperIcon.classList.toggle('rotate-180')
  overlayx.classList.toggle('show')
})
// clicking on dropdownHelperRadioButton, the icon inside will change direction
dropdownHelperRadioButtony.addEventListener('click', function () {
  const dropdownHelperIcon = document.getElementById('dropdownHelperIcony')
  dropdownHelperIcon.classList.toggle('rotate-180')
  overlayy.classList.toggle('show')
})
// clicking on dropdownHelperRadioButton, the icon inside will change direction
dropdownHelperRadioButtonz.addEventListener('click', function () {
  const dropdownHelperIcon = document.getElementById('dropdownHelperIconz')
  dropdownHelperIcon.classList.toggle('rotate-180')
  overlayz.classList.toggle('show')
})

// clicking on overlay, the icon inside will change direction
overlay.addEventListener('click', function () {
  const dropdownHelperIcon = document.getElementById('dropdownHelperIcon')
  // const dropdownHelperIcony = document.getElementById('dropdownHelperIcony')
  dropdownHelperIcon.classList.toggle('rotate-180')
  // dropdownHelperIcony.classList.toggle('rotate-180')
  overlay.classList.toggle('show')
})
// clicking on overlay, the icon inside will change direction
overlayx.addEventListener('click', function () {
  const dropdownHelperIconx = document.getElementById('dropdownHelperIconx')
  // const dropdownHelperIcony = document.getElementById('dropdownHelperIcony')
  dropdownHelperIconx.classList.toggle('rotate-180')
  // dropdownHelperIcony.classList.toggle('rotate-180')
  overlayx.classList.toggle('show')
})
overlayy.addEventListener('click', function () {
  const dropdownHelperIcony = document.getElementById('dropdownHelperIcony')
  // const dropdownHelperIcony = document.getElementById('dropdownHelperIcony')
  dropdownHelperIcony.classList.toggle('rotate-180')
  // dropdownHelperIcony.classList.toggle('rotate-180')
  overlayy.classList.toggle('show')
})
overlayz.addEventListener('click', function () {
  const dropdownHelperIcony = document.getElementById('dropdownHelperIconz')
  // const dropdownHelperIcony = document.getElementById('dropdownHelperIcony')
  dropdownHelperIconz.classList.toggle('rotate-180')
  // dropdownHelperIcony.classList.toggle('rotate-180')
  overlayz.classList.toggle('show')
})


const headcol = document.getElementsByClassName('headcol')

