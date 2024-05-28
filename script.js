document.addEventListener("DOMContentLoaded", function () {
  const smallImages = document.querySelectorAll(".small-images img");

  const bigImage = document.querySelector(".big-img");

  smallImages.forEach(function (smallImg) {
    smallImg.addEventListener("click", function () {
      bigImage.src = this.src;
    });
  });
});
