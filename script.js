function Discount() {
  var crossOutPrice = parseInt(document.getElementsByClassName('cross-out')[0].textContent, 10);
  var finalPrice = parseInt(document.getElementsByClassName('price')[0].textContent, 10);
  var discountPercent = ((crossOutPrice - finalPrice) / crossOutPrice) * 100;
  document.getElementsByClassName('discount')[0].innerHTML = discountPercent.toFixed(2) + '%';
}

// Call the Discount function when the page has loaded
window.onload = function() {
  Discount();
};

