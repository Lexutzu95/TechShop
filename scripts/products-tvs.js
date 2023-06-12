const products = [
  {
    image: "img/LG 43UQ70003LB.jpg",
    name: "LG 43UQ70003LB",
    priceCents: 32999,
  },
  {
    image: "img/Samsung 32T5372.jpg",
    name: "Samsung 32T5372",
    priceCents: 47499,
  },
  {
    image: "img/TV Sony OLED 55A83J.jpg",
    name: "TV Sony OLED 55A83J",
    priceCents: 41999,
  },
  {
    image: "img/TV Samsung 43AU7092.jpg",
    name: "TV Samsung 43AU7092",
    priceCents: 56499,
  },
  {
    image: "img/TV  Sony LED 43X72K.jpg",
    name: "TV Sony LED 43X72K",
    priceCents: 26499,
  },
  {
    image: "img/TV LED Star-Light 32DM6600.jpg",
    name: "TV LED Star-Light 32DM6600",
    priceCents: 24399,
  },
  {
    image: "img/TV Horizon 32HL6330H.jpg",
    name: "TV Horizon 32HL6330H",
    priceCents: 26799,
  },
  {
    image: "img/TV LED Diamant 32HL4300H.jpg",
    name: "TV LED Diamant 32HL4300H",
    priceCents: 17999,
  },
  {
    image: "img/TV Philips Ambilight LED 43PUS8007.jpg",
    name: "TV Philips Ambilight LED 43PUS8007",
    priceCents: 24999,
  },
  {
    image: "img/TV Samsung QLED 43Q60B.jpg",
    name: "TV Samsung QLED 43Q60B.jpg",
    priceCents: 72999,
  },
  {
    image: "img/TV Legend EE-T22.jpg",
    name: "TV Legend EE-T22",
    priceCents: 19899,
  },
  {
    image: "img/TV LED Smart Tech 50UA10V3.jpg",
    name: "TV LED Smart Tech 50UA10V3",
    priceCents: 22799,
  },
  {
    image: "img/TV Smart LED Allview 40IPLAY6000-F.jpg",
    name: "TV Smart LED Allview 40IPLAY6000-F",
    priceCents: 21999,
  },
  {
    image: "img/TV JVC LED 4VF3000.jpg",
    name: "TV JVC LED 4VF3000",
    priceCents: 34899,
  },
  {
    image: "img/TV Wellington WL32FHD289SW.jpg",
    name: "TV Wellington WL32FHD289SW",
    priceCents: 15899,
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
