const products = [
  {
    image: "img/Allview Viva 803G.jpg",
    name: "Allview Viva 803G",
    priceCents: 18999,
  },
  {
    image: "img/Lenovo Tab P11.jpg",
    name: "Lenovo Tab P11",
    priceCents: 34999,
  },
  {
    image: "img/Samsung Galaxy Tab A8.jpg",
    name: "Samsung Galaxy Tab A8",
    priceCents: 41999,
  },
  {
    image: "img/Lenovo Tab M10 Plus 3nd Gen TB125FU.jpg",
    name: "Lenovo Tab M10 Plus 3nd Gen TB125FU",
    priceCents: 17299,
  },
  {
    image: "img/Lenovo Tab M10 FHD Plus (2nd Gen).jpg",
    name: "Lenovo Tab M10 FHD Plus (2nd Gen)",
    priceCents: 27599,
  },
  {
    image: "img/Apple iPad Pro (2022) 4th Gen.jpg",
    name: "Apple iPad Pro (2022) 4th Gen",
    priceCents: 84199,
  },
  {
    image: "img/YOTOPT G12, Quad core, 10''.jpg",
    name: 'YOTOPT G12, Quad core, 10"',
    priceCents: 21099,
  },
  {
    image: "img/YUMKEM T3,10.1''.jpg",
    name: 'YUMKEM T3, 10.1"',
    priceCents: 14499,
  },
  {
    image: "img/Microsoft Surface Pro 4,12.3''.jpg",
    name: 'Microsoft Surface Pro 4,12.3"',
    priceCents: 24399,
  },
  {
    image: "img/Apple iPad mini 6 (2021).jpg",
    name: "Apple iPad mini 6 (2021)",
    priceCents: 45999,
  },
  {
    image: "img/Lenovo P11 Pro, Octa-Core.jpg",
    name: "Lenovo P11 Pro, Octa-Core",
    priceCents: 32999,
  },
  {
    image: "img/Apple iPad Air 5 (2022).jpg",
    name: "Apple iPad Air 5 (2022)",
    priceCents: 78999,
  },
  {
    image: "img/Blackview, Tab 12 (model 2022).jpg",
    name: "Blackview, Tab 12 (2022)",
    priceCents: 16999,
  },
  {
    image: "img/iHunt Strong Tablet P15000 PRO.jpg",
    name: "iHunt Strong Tablet P15000 PRO",
    priceCents: 12499,
  },
  {
    image: "img/Huawei MatePad 10.4.jpg",
    name: "Huawei MatePad 10.4",
    priceCents: 26999,
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
