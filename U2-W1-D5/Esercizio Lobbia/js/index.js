window.onscroll = function () {
  // Controlla se lo scroll ha raggiunto il punto di trigger
  const header = document.querySelector("header");
  const button = document.getElementById("getStartedButton");
  if (window.scrollY >= 400) {
    header.classList.add("modifiedHeader");
    button.classList.add("ModifiedGetStartedButton");
  } else if (window.scrollY < 400) {
    header.classList.remove("modifiedHeader");
    button.classList.remove("ModifiedGetStartedButton");
  }
};
