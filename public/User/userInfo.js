const firebaseConfig = {
  apiKey: "AIzaSyBP33n_XiR0dHvCU5Y-XrjZy4ARydxdCnk",
  authDomain: "howto13.firebaseapp.com",
  projectId: "howto13",
  storageBucket: "howto13.appspot.com",
  messagingSenderId: "770198464849",
  appId: "1:770198464849:web:a7721ef842090252e8cb70",
  measurementId: "G-M5M1BWGZCW",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();
var ip_address;

const emailID = document.querySelector(".email");
const UID = document.querySelector(".uid");
const createTime = document.querySelector(".createTime");
const ipAdress = document.querySelector(".ipAdress");

function DisplayIP(response) {
  ip_address = response.ip;
}
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    emailID.textContent = "Email : " + user.email;
    UID.textContent = "UID : " + user.uid;
    createTime.textContent =
      "Account Create Time : " + user.metadata.creationTime;
  }
  ipAdress.textContent = "IP adress : " + ip_address;
  if (!user) {
    window.location = "../index.html";
    ipAdress.textContent = "Access denied !";
  }
});
function signOut() {
  const all = document.querySelector(".all");
  var confirmLogOut = confirm("Are You Sure You Want To Log Out ?");
  if (confirmLogOut == true) {
    all.textContent = "";
    h1 = document.createElement("h1");
    document.body.appendChild(h1);
    h1.textContent = "Proccessing ...";
    setTimeout(() => {
      auth.signOut();
      h1.textContent = "Signed Out";
    }, 3500);
  } else {
    window.reload();
  }
}
const back = document.querySelector(".back");

back.onclick = function () {
  window.history.back();
};
if (ipAdress.value == "undefined") {
  location.reload();
}
Mousetrap.bind("backspace", function (e) {
  window.history.back();
});
Mousetrap.bind("shift+l", function (e) {
  signOut();
});
