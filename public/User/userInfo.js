const firebaseConfig = {
  apiKey: "AIzaSyAVLvRJO4nNO5jyeVCVd9gZIZKmg5Isaxw",
  authDomain: "m-nawaz.firebaseapp.com",
  databaseURL: "https://m-nawaz-default-rtdb.firebaseio.com",
  projectId: "m-nawaz",
  storageBucket: "m-nawaz.appspot.com",
  messagingSenderId: "1041394850791",
  appId: "1:1041394850791:web:7ad1a6e5fa52b2f14cbb42",
  measurementId: "G-6KX7VW48GW",
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
  var confirmLogOut = confirm("Are You Sure You Want To Log Out ?");
  if (confirmLogOut == true) {
    auth.signOut();
    alert("Logged Out");
    window.location = "../index.html";
  } else {
    window.reload();
  }
}
const back = document.querySelector(".back");

back.onclick = function () {
  window.history.back();
};
if (ipAdress.textContent == "undefined") {
  window.location = "./userInfo.html";
}
Mousetrap.bind("backspace", function (e) {
  window.history.back();
});
Mousetrap.bind("shift+l", function (e) {
  signOut();
});
