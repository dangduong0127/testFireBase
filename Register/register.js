const email = document.querySelector("#email");
const numberPhone = document.querySelector("#numberPhone");
const pass = document.querySelector("#password");
const re_pass = document.querySelector("#re_password");
const resBtn = document.querySelector("#btn_register");
let acc = JSON.parse(localStorage.getItem("user")) || [];

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

resBtn.addEventListener("click", function (e) {
  e.preventDefault();
  signUp(
    email.value,
    pass.value,
    "Nguyen Van A",
    numberPhone.value,
    "Hai Phong"
  );
});

async function signUp(email, password, displayName, phoneNumber, address) {
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(
      email,
      password
    );
    // console.log(userCredential.user.uid);
    await db.collection("users").doc(userCredential.user.uid).set({
      displayName: displayName,
      phoneNumber: phoneNumber,
      address: address,
    });
  } catch (err) {
    alert(err.message);
  }
}
