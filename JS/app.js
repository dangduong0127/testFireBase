// const products = document.getElementById("products");
// let basket = JSON.parse(localStorage.getItem("Cart")) || [];
// function genderCart() {
//   for (let i in ShopItemsData) {
//     products.innerHTML += `
//     <div id="product-id-1" class="single-product">
//     <img src="${ShopItemsData[i].image}" />
//     <div class="pr-content">
//       <h5 class="product-name">${ShopItemsData[i].name}</h5>
//       <h6><b>Price:</b>${ShopItemsData[i].price} đ</h6>
//       <div class="buttons">
//         <i onclick="decrement(${ShopItemsData[i].id})" class="fa-solid fa-minus"></i>
//         <div id="${ShopItemsData[i].id}" class="quantity">0</div>
//         <i onclick="increment(${ShopItemsData[i].id})" class="fa-solid fa-plus"></i>
//       </div>
//       <button onclick="AddToCart(${ShopItemsData[i].id})">Thêm vào giỏ hàng</button>
//     </div>
//   </div>
//     `;
//   }
// }

// genderCart();

// // Giam so luong
// function decrement(id) {
//   const quantity = document.getElementById(id);
//   if (quantity.innerText > 0) {
//     quantity.innerText--;
//   }
// }

// // Tang so luong
// function increment(id) {
//   const quantity = document.getElementById(id);
//   quantity.innerText++;
// }

// //Them vao gio hang
// function AddToCart(id) {
//   const quantity = document.getElementById(id);
//   let search = basket.find((x) => x.ID === id);

//   if (quantity.innerText != 0) {
//     if (search == undefined) {
//       basket.push({
//         ID: id,
//         item: Number(quantity.innerText),
//       });
//     } else {
//       search.item += Number(quantity.innerText);
//     }
//     localStorage.setItem("Cart", JSON.stringify(basket));
//     alert("Thêm vào giỏ hàng thành công!!!");
//     quantity.innerText = 0;
//   } else {
//     alert("Vui lòng thêm số lượng!!!");
//   }
//   CountCartQT();
// }

// //Count Cart Quantity
// CountCartQT();
// function CountCartQT() {
//   const cartAmount = document.getElementById("cartAmount");
//   let totalQuantity = null;
//   for (let i in basket) {
//     totalQuantity += basket[i].item;
//   }
//   cartAmount.innerText = totalQuantity;
// }
