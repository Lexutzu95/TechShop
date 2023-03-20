const btnForm = document.getElementsByClassName("form");
const buyBtn = document.createElement("button");
buyBtn.innerHTML = "Buy Item";
buyBtn.type = "submit";
buyBtn.name = "buyBtn";
buyBtn.className = "buy-btn";

for (let i = 0; i < btnForm.length; i++) {
  btnForm[i].appendChild(buyBtn.cloneNode(true));
}

document.getElementById("confirm-btn").addEventListener("click", () => {
  alert("Thank you for buying from us!");
});

const faqContainer = document.getElementsByClassName("content-container");

for (let i = 0; i < faqContainer.length; i++) {
  faqContainer[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

const dateChange = new Date().getFullYear();
document.querySelectorAll("#footer-date")[0].innerHTML = dateChange;
