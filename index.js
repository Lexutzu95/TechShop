const btnForm = document.querySelectorAll(".form");
const buyBtn = document.createElement("button");
buyBtn.innerHTML = "Buy Item";
buyBtn.type = "submit";
buyBtn.name = "buyBtn";
buyBtn.className = "buy-btn";

for (let i = 0; i < btnForm.length; i++) {
  btnForm[i].appendChild(buyBtn.cloneNode(true));
}

const faqContainer = document.querySelectorAll(".content-container");

for (let i = 0; i < faqContainer.length; i++) {
  faqContainer[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

const dateChange = new Date().getFullYear();
document.querySelectorAll("#footer-date")[0].innerHTML = dateChange;
