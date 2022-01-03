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
const logs = document.querySelector(".logs");

const headText = document.querySelector("span");
const header = document.querySelector("header");
const allText = document.querySelector("body");
firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    headText.textContent = "ERROR";
    window.location = "../index.html";
  }
  if (user) {
    headText.innerHTML = user.email;
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
Mousetrap.bind("alt+p", function (e) {
  userInfo.click();
});
Mousetrap.bind("shift+n", function (e) {
  alert("News : Last Updated On 1/02/2022");
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
