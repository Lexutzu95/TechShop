const products = [
  {
    image: "img/Asus VivoBook 15 X1500EA.jpg",
    name: "Asus VivoBook 15 X1500EA",
    priceCents: 57999,
  },
  {
    image: "img/Lenovo IdeaPad 3 15ITL6.jpg",
    name: "Lenovo IdeaPad 3 15ITL6",
    priceCents: 37499,
  },
  {
    image: "img/HP Pavilion 15-eg0031nq.jpg",
    name: "HP Pavilion 15-eg0031nq",
    priceCents: 28899,
  },
  {
    image: "img/Acer Nitro 5 AN517-54.jpg",
    name: "Acer Nitro 5 AN517-54",
    priceCents: 31299,
  },
  {
    image: "img/Lenovo V15 G2 ITL.jpg",
    name: "Lenovo V15 G2 ITL",
    priceCents: 36799,
  },
  {
    image: "img/Acer Aspire 5 A515-56G.jpg",
    name: "Acer Aspire 5 A515-56G",
    priceCents: 21699,
  },
  {
    image: "img/ASUS TUF F15 FX506HE.jpg",
    name: "ASUS TUF F15 FX506HE",
    priceCents: 42999,
  },
  {
    image: "img/Lenovo IdeaPad 3 15IHU6.jpg",
    name: "Lenovo IdeaPad 3 15IHU6",
    priceCents: 51299,
  },
  {
    image: "img/ASUS Vivobook S14 S433EA.jpg",
    name: "ASUS Vivobook S14 S433EA",
    priceCents: 52799,
  },
  {
    image: "img/HP 15s-fq3018nq.jpg",
    name: "HP 15s-fq3018nq",
    priceCents: 41899,
  },
  {
    image: "img/ASUS ROG Strix SCAR 15 G533ZM.jpg",
    name: "ASUS ROG Strix SCAR 15 G533ZM",
    priceCents: 62199,
  },
  {
    image: "img/Lenovo IdeaPad 5 15ABA7.jpg",
    name: "Lenovo IdeaPad 5 15ABA7",
    priceCents: 53899,
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
