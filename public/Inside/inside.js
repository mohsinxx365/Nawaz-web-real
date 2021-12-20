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
const logs = document.querySelector(".logs");

const headText = document.querySelector("span");
const allText = document.querySelector("body");
firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    headText.textContent = "ERROR";
    window.open = "../index.html";
  }
  if (user.email == "admin@gmail.com") {
    db.ref("logs").on("value", function (snapshot) {
      console.log(snapshot.val());
      headText.textContent = "Logs";
      logs.innerText = snapshot.val();
    });
    allText.style.userSelect = "auto";
  }
  const allTopics = document.querySelector(".allTopics");

  allTopics.textContent = "";
});

document.onkeydown = function (e) {
  if (e.ctrlKey && e.keyCode === 85) {
    return false;
  }
};

window.oncontextmenu = function () {
  return false;
};
$(document).keydown(function (event) {
  if (event.keyCode == 123) {
    return false;
  }
});

var Update = false;

if (Update == true) {
  auth.signOut();
  alert("Connection Lost");
}

const userInfo = document.querySelector(".userInfo");

userInfo.onclick = function () {
  window.location = "../User/userInfo.html";
};
