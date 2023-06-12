const products = [
  {
    image: "img/Allview A30 Max.jpg",
    name: "Allview A30 Max",
    priceCents: 14999,
  },
  {
    image: "img/Huawei Nova 10.jpg",
    name: "Huawei Nova 10",
    priceCents: 12999,
  },
  {
    image: "img/Huawei Y90.jpg",
    name: "Huawei Y90",
    priceCents: 15899,
  },
  {
    image: "img/Nokia G11.jpg",
    name: "Nokia G11",
    priceCents: 11899,
  },
  {
    image: "img/Realme C33.jpg",
    name: "Realme C33",
    priceCents: 32999,
  },
  {
    image: "img/Samsung Galaxy A04s.jpg",
    name: "Samsung Galaxy A04s",
    priceCents: 42899,
  },
  {
    image: "img/Apple iPhone 14 Pro.jpg",
    name: "Apple iPhone 14 Pro",
    priceCents: 84099,
  },
  {
    image: "img/OnePlus 11 Dual SIM.jpg",
    name: "OnePlus 11 Dual SIM",
    priceCents: 21799,
  },
  {
    image: "img/OnePlus Nord 2T.jpg",
    name: "OnePlus Nord 2T",
    priceCents: 21499,
  },
  {
    image: "img/OUKITEL WP12 Pro.jpg",
    name: "OUKITEL WP12 Pro",
    priceCents: 13499,
  },
  {
    image: "img/Motorola Moto E32s.jpg",
    name: "Motorola Moto E32s",
    priceCents: 19999,
  },
  {
    image: "img/Apple iPhone 11.jpg",
    name: "Apple iPhone 11",
    priceCents: 53499,
  },
  {
    image: "img/Samsung Galaxy Z Flip4.jpg",
    name: "Samsung Galaxy Z Flip4",
    priceCents: 72499,
  },
  {
    image: "img/Samsung Galaxy S10+.jpg",
    name: "Samsung Galaxy S10+",
    priceCents: 68999,
  },
  {
    image: "img/Samsung Galaxy Z Fold4.jpg",
    name: "Samsung Galaxy Z Fold4",
    priceCents: 85999,
  },
  {
    image: "img/Oppo Reno 6 Pro Plus.jpg",
    name: "Oppo Reno 6 Pro Plus",
    priceCents: 36799,
  },
  {
    image: "img/Motorola Edge 30.jpg",
    name: "Motorola Edge 30",
    priceCents: 24199,
  },
  {
    image: "img/Motorola G22.jpg",
    name: "Motorola G22",
    priceCents: 28499,
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
