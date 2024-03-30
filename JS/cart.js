const prsEl = document.getElementById("Shopping-Cart");
const billEl = document.getElementById("max");
let basket = JSON.parse(localStorage.getItem("Cart")) || [];

function renderCart() {
  let totalBill = null;
  prsEl.innerHTML = null;
  for (let i in basket) {
    for (key in ShopItemsData) {
      if (basket[i].ID == ShopItemsData[key].id) {
        totalBill += ShopItemsData[key].price * basket[i].item;
        prsEl.innerHTML += `
                <div class="single-prs-bill">
                <div id="product-id-${
                  ShopItemsData[key].id
                }" class="single-product">
                  <img src="${ShopItemsData[key].image}" />
                  <div class="pr-content">
                    <h5 class="product-name">${
                      ShopItemsData[key].name
                    }<span>(x${basket[i].item})</span></h5>
    
                    <h5>${convertVND(ShopItemsData[key].price)}</h5>
                    <div class="buttons">
                      <i onclick="decrement(${
                        basket[i].ID
                      })" class="fa-solid fa-minus"></i>
                      <div id="${basket[i].ID}" class="quantity">${
          basket[i].item
        }</div>
                      <i onclick="increment(${
                        basket[i].ID
                      })" class="fa-solid fa-plus"></i>
                    </div>
                    <div class="Delete">
                      <i class="fa-solid fa-x"></i>
                      <p onclick="removeItems(${basket[i].ID})">Delete</p>
                    </div>
                  </div>
                </div>
              </div>
                `;
      }
    }
  }
  if (totalBill == null) {
    const totalEl = document.getElementById("total");
    totalEl.innerHTML = `<h1>Giỏ hàng trống</h1>`;
  } else {
    billEl.innerText = convertVND(totalBill);
  }
}
renderCart();

function decrement(id) {
  const quantity = document.getElementById(id);
  let search = basket.find((x) => x.ID === id);

  if (quantity.innerText > 0) {
    quantity.innerText--;
    search.item -= 1;
    basket = basket.filter((x) => x.item !== 0);
    localStorage.setItem("Cart", JSON.stringify(basket));
    renderCart();
    CountCartQT();
  }
}

function increment(id) {
  const quantity = document.getElementById(id);
  let search = basket.find((x) => x.ID === id);
  quantity.innerText++;
  search.item += 1;
  basket = basket.filter((x) => x.item !== 0);
  localStorage.setItem("Cart", JSON.stringify(basket));
  renderCart();
  CountCartQT();
}

//Count Cart Quantity
CountCartQT();
function CountCartQT() {
  const cartAmount = document.getElementById("cartAmount");
  let totalQuantity = null;
  for (let i in basket) {
    totalQuantity += basket[i].item;
  }
  cartAmount.innerText = totalQuantity;
}

//Delete
function removeItems(id) {
  const cfm = confirm("Bạn có chắc chắn muốn xóa sản phẩm này ko???");
  if (cfm) {
    basket = basket.filter((x) => x.ID !== id);
    localStorage.setItem("Cart", JSON.stringify(basket));
    renderCart();
    CountCartQT();
  }
}
