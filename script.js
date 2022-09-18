let products = [
  [1, "Tomato", 5],
  [2, "Cucumber", 10],
  [3, "Onion", 15],
];

let cartItems = [];

function addToCart(productID) {
  cartItems.push(products[productID - 1]);
  console.log(cartItems);
  renderCart();
}

function renderCart() {
  document.getElementById("shoppingCart").innerText = "";
  for (let i = 0; i < cartItems.length; i += 1) {
    let productElement = document.createElement("div");

    let nameSpan = document.createElement("span");
    nameSpan.innerText = cartItems[i][1];
    nameSpan.setAttribute("class", "productName");
    productElement.appendChild(nameSpan);

    let priceSpan = document.createElement("span");
    priceSpan.innerText = cartItems[i][2];
    priceSpan.setAttribute("class", "productPrice");
    productElement.appendChild(priceSpan);

    let removeBtn = document.createElement("button");
    removeBtn.setAttribute("onclick", "removeProduct(" + cartItems[i][0] + ")");
    removeBtn.innerText = "Remove product";
    productElement.appendChild(removeBtn);

    document.getElementById("shoppingCart").appendChild(productElement);
  }
  myCheck();
}

function removeProduct(product) {
  let x = 0;
  for (let i = 0; i < cartItems.length && x < 1; i++) {
    if (cartItems[i][0] == product) {
      cartItems.splice(i, 1);
      renderCart();
      x++;
    }
  }
}
function myCheck() {
  let totalPrice = document.getElementById("productPrice");
  let fullPrice = 0;
  for (let i = 0; i < cartItems.length; i++) {
    fullPrice += cartItems[i][2];
  }

  totalPrice.innerHTML =
    "Total Price :" + fullPrice + "<br/>" + "Data:" + " " + Date();
  totalPrice.style.cssText = `border: 5px double #000;
  margin : 1.5%;
  padding: 2.5%;
  width : 300px;
  height : 250px;
  background-color: rgba(110, 201, 202, 1);
  font-size: 25px;
  color: rgb(114, 75, 44);
  font-weight: 700;
  text-align: center;
  `;
}
