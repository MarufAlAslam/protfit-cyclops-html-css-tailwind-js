const dateRangePickerEl = document.getElementById("dateRangePickerId");
new DateRangePicker(dateRangePickerEl, {
  // options
});

const refuntCostBtn = document.getElementById("refund-cost");
refuntCostBtn.addEventListener("click", () => {
  alert("Refund cost");
});
