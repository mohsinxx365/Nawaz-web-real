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

const userInfo = document.querySelector(".userInfo");
const headText = document.querySelector("span");
const header = document.querySelector("header");
const allText = document.querySelector("body");
const userPage = document.querySelector(".user");
const superVersion = document.querySelector(".super");

firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    headText.textContent = "ERROR";
    window.location = "../index.html";
  }
  if (user) {
    headText.innerHTML = user.email;
    yourName = localStorage.getItem("name");
    if (yourName) {
      headText.textContent = yourName;
      superVersion.remove();
      const mode = document.querySelector(".mode");
      mode.textContent = "💡";
      document.body.style.backgroundColor = "#d5dfec";
      mode.onclick = function () {
        mode.textContent = "🌙";
        document.body.style.backgroundColor = "#1e193a";
        header.style.backgroundColor = "#2b207c";
        headText.style.color = "white";
        header.style.boxShadow = "3px 3px black";
      };
    }

    userPage.onclick = function () {
      axios
        .post("https://howto13.loca.lt/profile", {
          email: user.email,
        })
        .then((res) => {
          console.log(res.data);
        });
    };
  }
});

document.onkeydown = function (e) {
  if (e.ctrlKey && e.keyCode === 85) {
    return false;
  }
};

window.oncontextmenu = function () {
  return false;
};

Mousetrap.bind("alt+p", function (e) {
  userInfo.click();
});
Mousetrap.bind("shift+n", function (e) {
  alert("News : Last Updated On 1/09/2022");
});
document.onkeydown = function (e) {
  if (e.ctrlKey && e.keyCode === 85) {
    window.location = "../Source/source.html";
    return false;
  }
};

Mousetrap.bind("r", function (e) {
  location.reload();
});
var val = Math.floor(1000 + Math.random() * 9000);
console.log(val);

superVersion.onclick = function () {
  purchaseCode = prompt("Type your purchase code : " + val);
  purchaseCode == val;

  if (purchaseCode == val) {
    alert("Purchase successful !");
    superVersion.remove();
    yourName = prompt("Enter your name here ...");
    localStorage.setItem("name", yourName);
    headText.textContent = yourName;
    location.reload();
  }
};
