const products = [
  {
    image: "img/PC Gaming Serioux PBXF000I5550W.jpg",
    name: "PC Gaming Serioux PBXF000I5550W",
    priceCents: 71999,
  },
  {
    image: "img/PC Gaming Serioux PBXF000I5165016W.jpg",
    name: "PC Gaming Serioux PBXF000I5165016W",
    priceCents: 43999,
  },
  {
    image: "img/PC Gaming Serioux Intel Core i5-10400F.jpg",
    name: "PC Gaming Serioux Intel Core i5-10400F",
    priceCents: 74999,
  },
  {
    image: "img/PC Gaming VI-34 Vibox PRO 300GE.jpg",
    name: "PC Gaming VI-34 Vibox PRO 300GE",
    priceCents: 34999,
  },
  {
    image: "img/PC Gaming Lenovo Legion T7 34IAZ7.jpg",
    name: "PC Gaming Lenovo Legion T7 34IAZ7",
    priceCents: 16999,
  },
  {
    image:
      "img/PC Gaming Expert Gaming Zen Intel Quad Core i5-6500 3.60 Ghz TURBO.jpg",
    name: "PC Gaming Expert Gaming Zen Intel Quad Core i5-6500 3.60 Ghz TURBO",
    priceCents: 45999,
  },
  {
    image: "img/PC Gaming Serioux ASUS Intel Core i5-10400F.jpg",
    name: "PC Gaming Serioux ASUS Intel Core i5-10400F",
    priceCents: 60999,
  },
  {
    image: "img/PC Junior ZenGaming+.jpg",
    name: "PC Junior ZenGaming+ Octa-Core Ryzen7-2700",
    priceCents: 52999,
  },
  {
    image: "img/PC Serioux AMD Ryzen 7 5700G.jpg",
    name: "PC Serioux AMD Ryzen 7 5700G",
    priceCents: 44999,
  },
  {
    image: "img/PC Gaming Serioux Intel Core i5-10400E.jpg",
    name: "PC Gaming Serioux Intel Core i5-10400E",
    priceCents: 38999,
  },
];

let productsHTML = "";

products.forEach((product) => {
  productsHTML += `
  <div class="card">
      <img src="${product.image}" />
      <div class="product-name">
        <h3>${product.name}</h3>
      </div>
      <div class="desc">
        <ul>
          <li>Lorem, ipsum dolor sit amet consectetur</li>
          <li>Alias delectus tempore veritatis</li>
          <li>Velit ipsam officiis molestiae id aliquam</li>
          <li>Dolor quidem voluptates accusamus nulla</li>
          <li>Quisquam minus cupiditate ipsam iste porro</li>
        </ul>
      </div>
      <div class="product-price">
        $${product.priceCents / 100}
      </div>
      <form class="form" action="confirmation form.html"></form>
    </div>
  `;
});

document.querySelector(".main-container").innerHTML = productsHTML;
