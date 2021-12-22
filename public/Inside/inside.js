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
    window.location = "../index.html";
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
  alert("News : Last Updated On 12/21/2021");
});
document.onkeydown = function (e) {
  if (e.ctrlKey && e.keyCode === 85) {
    window.location = "../Source/source.html";
    return false;
  }
};

const Myname = document.querySelector(".name");
const Thing = document.querySelector(".thing");
const q1 = document.querySelector(".q1");
const q2 = document.querySelector(".q2");
const q3 = document.querySelector(".q3");
const q4 = document.querySelector(".q4");
const QuestionNo = document.querySelector(".questionNo");
const ToEmail = document.querySelector(".ToEmail");
const sendBtn = document.querySelector(".send");
const nameVal = document.querySelector(".nameVal");
const Qval = document.querySelector(".Qval");
const EmailVal = document.querySelector(".EmailVal");
const ThingVal = document.querySelector(".ThingVal");

sendBtn.onclick = function () {
  if (Myname.value == "") {
    alert("Enter your Name");
  }
  if (Thing.value == "") {
    alert("Write the thing you thought");
  }
  if (ToEmail.value == "") {
    alert("Write the email to which you want to send ...");
  }

  nameVal.textContent = "Name : " + Myname.value;
  ThingVal.textContent = "Thing : " + Thing.value;
  Qval.textContent = "Questions Allowed : " + QuestionNo.value;
  EmailVal.textContent = "To email : " + ToEmail.value;
};
