const firebaseConfig = {
  apiKey: "AIzaSyB6hgH7Bf5mjwXg0Kv0U6D5mBBgdAHtUiY",
  authDomain: "bright-velocity-418001.firebaseapp.com",
  projectId: "bright-velocity-418001",
  storageBucket: "bright-velocity-418001.appspot.com",
  messagingSenderId: "936582477834",
  appId: "1:936582477834:web:b93e4882ee1ea57c0487f3",
  measurementId: "G-TFXFGZ1KBX",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

const ShopItemsData = [
  {
    id: "1",
    name: "MATRIX 1999 DECK",
    price: 780000,
    image: "img/matrix-1999-1.jpg",
  },

  {
    id: "2",
    name: "RAEDA DECK",
    price: 1470000,
    image: "img/Raeda-Deck.jpg",
  },

  {
    id: "3",
    name: "MUSTY DECK",
    price: 2470000,
    image: "img/Musty-Deck.jpg",
  },

  {
    id: "4",
    name: "TRISTIQUE DECK",
    price: 2470000,
    image: "img/Tristique-deck.jpg",
  },

  {
    id: "5",
    name: "FIELD TRIP DECK",
    price: 1470000,
    image: "img/Fied-Trip-deck.jpg",
  },

  {
    id: "6",
    name: "TARO RAINBOW LOGO DECK",
    price: 880000,
    image: "img/web-5.jpg",
  },

  {
    id: "7",
    name: "NEON RAINBOW LOGO DECK",
    price: 980000,
    image: "img/web-1.jpg",
  },

  {
    id: "8",
    name: "ORANAGE RAINBOW LOGO DECK",
    price: 3670000,
    image: "img/web-2.jpg",
  },

  {
    id: "9",
    name: "BLUE RAINBOW LOGO DECK",
    price: 1670000,
    image: "img/web-3.jpg",
  },

  {
    id: "10",
    name: "WHITE RAINBOW LOGO DECK",
    price: 780000,
    image: "img/web-4.jpg",
  },

  {
    id: "11",
    name: "CUTIS MODEL DECK",
    price: 580000,
    image: "img/cutis.jpg",
  },

  {
    id: "12",
    name: "CAM VU MODEL DECK",
    price: 4670000,
    image: "img/cam-vu.jpg",
  },

  {
    id: "13",
    name: "SON NGUYEN MODEL DECK",
    price: 5670000,
    image: "img/son-nguyen.jpg",
  },
];
const products = document.getElementById("products");
// let basket = JSON.parse(localStorage.getItem("Cart")) || [];
function convertVND(money) {
  let x = money;
  x = x.toLocaleString("it-IT", { style: "currency", currency: "VND" });
  return x;
}

async function createDocument(collectionName, data) {
  try {
    const docRef = await db.collection(collectionName).add(data);
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

// createDocument("products", { ShopItemsData });
// Đọc toàn bộ dữ liệu từ một bộ sưu tập (collection)
async function getAllDocuments(collectionName) {
  try {
    const querySnapshot = await db.collection(collectionName).get();
    querySnapshot.forEach((doc) => {
      // dataFromDB += doc.data().ShopItemsData;
      let dataFromDB = doc.data().ShopItemsData;
      for (let i in dataFromDB) {
        // console.log();
        products.innerHTML += `
        <div id="product-id-1" class="single-product">
        <img src="${dataFromDB[i].image}" />
        <div class="pr-content">
          <h5 class="product-name">${dataFromDB[i].name}</h5>
          <h6><b>Price:</b>${dataFromDB[i].price} đ</h6>
          <div class="buttons">
            <i onclick="decrement(${dataFromDB[i].id})" class="fa-solid fa-minus"></i>
            <div id="" class="quantity">0</div>
            <i onclick="increment()" class="fa-solid fa-plus"></i>
          </div>
          <button onclick="increment()">Thêm vào giỏ hàng</button>
        </div>
      </div>
          `;
      }
    });
  } catch (error) {
    console.error("Error getting documents: ", error);
  }
}

// Ví dụ sử dụng
getAllDocuments("products");

function decrement(id) {
  console.log(id);
}
const btnLogin = document.getElementById("users");
auth.onAuthStateChanged(function (user) {
  if (user) {
    btnLogin.parentElement.href = "../Account/acc.html";
  }
});
