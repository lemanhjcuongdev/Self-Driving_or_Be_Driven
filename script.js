const fuel = document.querySelector("#fuel");
const avg = document.querySelector("#avg");
const distance = document.querySelector("#distance");
const bus = document.querySelector("#busprice");
const park = document.querySelector("#park");

bus.addEventListener("change", function () {
  var fuelPrice = parseFloat(fuel.value.trim());
  var avgUse = parseFloat(avg.value.trim());
  var distanceAtoB = parseFloat(distance.value.trim());
  var busprice = parseFloat(bus.value.trim());
  var parkprice = parseFloat(park.value.trim());

  var result = (distanceAtoB / avgUse) * fuelPrice + parkprice;
  if (result.toFixed(0) > busprice.toFixed(0)) {
    alert(
      "Đi xe máy hết tận " +
        result.toFixed(0) +
        " đ mà đi xe bus hết có mỗi " +
        busprice.toFixed(0) +
        " đ thôi\n➡️ Vote nên đi xe bus cho tiết kiệm và bảo vệ môi trường 😑"
    );
  } else if (result.toFixed(0) < busprice.toFixed(0)) {
    alert(
      "Đi xe máy hết có mỗi " +
        result.toFixed(0) +
        " đ mà đi xe bus hết tận " +
        busprice.toFixed(0) +
        " đ \n➡️ Vote nên đi xe máy cho tự do và thoải mái 😚"
    );
  } else if (result.toFixed(0) === busprice.toFixed(0)) {
    alert(
      "Đi xe máy hết " +
        result.toFixed(0) +
        " đ mà đi xe bus hết " +
        busprice.toFixed(0) +
        " đ \n➡️ Tùy you chọn :>"
    );
  }
  console.log(result.toFixed(0));
});
