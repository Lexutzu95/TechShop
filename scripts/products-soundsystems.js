const products = [
  {
    image: "img/Logitech 5.1 Z906.jpg",
    name: "Logitech 5.1 Z906",
    priceCents: 45999,
  },
  {
    image: "img/Serioux HT5100C.jpg",
    name: "Serioux HT5100C",
    priceCents: 34399,
  },
  {
    image: "img/Trust GXT 635 Rumax.jpg",
    name: "Trust GXT 635 Rumax",
    priceCents: 47699,
  },
  {
    image: "img/Serioux SoundBoost SBHT2100C.jpg",
    name: "Serioux SoundBoost SBHT2100C",
    priceCents: 49999,
  },
  {
    image: "img/Soundbar LED Well BRV04.jpg",
    name: "Soundbar LED Well BRV04",
    priceCents: 39699,
  },
  {
    image: "img/Home Theatre SONY HT-A9.jpg",
    name: "Home Theatre SONY HT-A9",
    priceCents: 49499,
  },
  {
    image: "img/Audiocore AC910 Bluetooth 2.1.jpg",
    name: "Audiocore AC910 Bluetooth 2.1",
    priceCents: 31999,
  },
  {
    image: "img/Microsistem Blaupunkt MS40BT.jpg",
    name: "Microsistem Blaupunkt MS40BT",
    priceCents: 62499,
  },
  {
    image: "img/System micro wi-fi bluetooth, Sharp XL-B512BR.jpg",
    name: "System micro wi-fi bluetooth, Sharp XL-B512BR",
    priceCents: 45999,
  },
  {
    image: "img/Audio Surround Yamaha YHT-4960 5.1.jpg",
    name: "Audio Surround Yamaha YHT-4960 5.1",
    priceCents: 72499,
  },
  {
    image: "img/System Home Theatre LG LHB675.jpg",
    name: "System Home Theatre LG LHB675",
    priceCents: 51999,
  },
  {
    image: "img/Home Cinema Onkyo HT-S5915.jpg",
    name: "Home Cinema Onkyo HT-S5915",
    priceCents: 64499,
  },
  {
    image: "img/Home Cinema 5.1 Canton Movie 265.jpg",
    name: "Home Cinema 5.1 Canton Movie 265",
    priceCents: 42499,
  },
  {
    image: "img/Apple HomePod 2nd generation.jpg",
    name: "Apple HomePod 2nd generation",
    priceCents: 36999,
  },
  {
    image: "img/Amazon Echo Dot 4.jpg",
    name: "Amazon Echo Dot 4",
    priceCents: 46299,
  },
  {
    image: "img/WiFi Bluetooth Bose Home Speaker 300.jpg",
    name: "WiFi Bluetooth Bose Home Speaker 300",
    priceCents: 38199,
  },
  {
    image: "img/Soundbar Sony HT-G700 3.1 Dolby Atmos.jpg",
    name: "Soundbar Sony HT-G700 3.1 Dolby Atmos",
    priceCents: 55699,
  },
  {
    image: "img/Soundbar Samsung HW-Q930B 9.1.4 540W.jpg",
    name: "Soundbar Samsung HW-Q930B 9.1.4 540W",
    priceCents: 52999,
  },
  {
    image: "img/Microsistem audio High Power Panasonic SC-AKX320E-K.jpg",
    name: "Microsistem audio High Power Panasonic SC-AKX320E-K",
    priceCents: 47399,
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
