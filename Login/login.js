const email = document.querySelector("#email");
const pass = document.querySelector("#password");
const loginBtn = document.querySelector(".btn");
let data = JSON.parse(localStorage.getItem("user")) || [];
let users = null;
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

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();

  // Function to handle login
  // Sign in with email and password
  var currentUser = null;

  login(email.value, pass.value);
});
async function login(email, password) {
  try {
    // await firebase.auth().onAuthStateChanged((user) => (currentUser = user));
    // Kích hoạt giữ đăng nhập
    await firebase.auth().setPersistence("local");
    console.log("Keep user logged in activated");

    // Đăng nhập
    const userCredential = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    const user = userCredential.user;
    console.log("User logged in:", user.uid);

    console.log(currentUser);
    // localStorage.setItem("currentUser", a);
    // window.location.href = "../Account/acc.html";
  } catch (error) {
    // Xử lý lỗi đăng nhập
    console.error("Login error:", error.message);
  }
}

auth.onAuthStateChanged(function (user) {
  if (user) {
    window.location.href = "../index.html";
  }
  console.log(user);
});
