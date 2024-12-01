window.addEventListener("load", function () {
  // Change the text after 5 seconds
  setTimeout(function () {
    document.querySelector(".toast-body").textContent =
      " Enjoy exploring. This will auto close in 5 seconds!";
  }, 5000); // 5 seconds

  // Remove the "show" class after another 5 seconds
  setTimeout(function () {
    document.querySelector(".toast").classList.remove("show");
  }, 10000); // 10 seconds
});
