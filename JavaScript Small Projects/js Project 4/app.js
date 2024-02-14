(function () {
  const pictures = [
    "img-1",
    "img-2",
    "img-3",
    "img-4",
    "img-5",
    "img-6",
  ];

  const buttons = document.querySelectorAll(".btn");
  const imgDiv = document.querySelector(".img-container");
  let count = 0;

  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      if (button.classList.contains("btn-left")) {
        count--;

        if (count < 0) {
          count = pictures.length - 1;
        }
        imgDiv.style.background = `url('img/${pictures[count]}.jpg')`;
      }

      if (button.classList.contains("btn-right")) {
        count++;

        if (count > pictures.length - 1) {
          count = 0;
        }
        imgDiv.style.background = `url('img/${pictures[count]}.jpg')`;
      }
    });
  });
})();
