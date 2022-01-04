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

function signUp() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  const promise = auth.createUserWithEmailAndPassword(
    email.value,
    password.value
  );

  axios
    .post("https://howto13.loca.lt/register", {
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

ok.onclick = function () {
  ok.onclick = window.location = "./index.html";
};

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    const all = document.querySelector(".all");
    all.remove();
    title.textContent = "Loading ...";
    const h1 = document.createElement("h1");
    h1.style.display = "Flex";
    h1.style.justifyContent = "Center";
    document.body.appendChild(h1);
    h1.textContent = "Authorizing ...";
    setTimeout(() => {
      h1.textContent = "Getting Data ...";
    }, 2500);
    setTimeout(() => {
      h1.textContent = "Ready to proceed !";
    }, 3500);
    setTimeout(() => {
      window.location = "../Inside/inside.html";
    }, 4000);
    h1.style.color = "black";
  }
});

// Update Code

var Update = false;
if (Update == true) {
  container.textContent = "";
  title.textContent = "Update !";
  const body = document.querySelector("body");
  var information = document.querySelector(".info");
  information.style.fontFamily = "Nunito";
  information.style.fontSize = "15px";
  information.style.fontWeight = "bold";
  setTimeout(() => {
    information.textContent =
      "Did you know : Press shift + N , to see web news !";
  }, 1600);
  setTimeout(() => {
    information.textContent =
      "Did you know : Press Alt + S , to click Register button !";
  }, 6000);
  setTimeout(() => {
    information.textContent = "Did you know : Press E , to focus on email";
  }, 10400);
  setTimeout(() => {
    information.textContent = "Did you know : Press P , to focus on Password";
  }, 14800);
  setTimeout(() => {
    information.textContent =
      "Did you know : Press F and P togather , to click on Forgot Password";
  }, 19600);
  setTimeout(() => {
    information.textContent = "Did you know : Press R , to reload";
  }, 24000);
  setTimeout(() => {
    information.textContent =
      "Did you know : Press Ctrl + Z , to show format of email and password";
  }, 28400);
  setTimeout(() => {
    information.textContent =
      "Did you know : Press alt + P , to view your profile";
  }, 32800);
  setTimeout(() => {
    information.textContent = "Did you know : Press shift + L , to LogOut";
  }, 37200);
  setTimeout(() => {
    window.location = "index.html";
  }, 41400);

  ban.textContent = "Update Under Progress !";
  ban_time.textContent = "Estimated Time : Unknown";
  ban_Reason.textContent = "Design Changes and some more ..";
  ban.style.fontSize = "25px";
  ban.style.color = "red";
  ban.style.fontFamily = "Arial";
  ban_time.style.fontFamily = "Nunito";
  ok.textContent = "Reload";
  ok.style.backgroundColor = "#0039BF";
  ok.style.color = "white";
  ok.style.width = "150px";
  ok.style.height = "40px";
  ok.style.borderRadius = "1px";
  ok.style.cursor = "pointer";
}

Mousetrap.bind("shift+n", function (e) {
  alert("News : Last Updated On 1/03/2022");
});

document.onkeydown = function (e) {
  if (e.ctrlKey && e.keyCode === 85) {
    window.location = "../Source/source.html";
    return false;
  }
};
function faceSign() {
  var provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope("user_birthday");
  firebase.auth().languageCode = "it";
  provider.setCustomParameters({
    display: "popup",
  });
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      var user = result.user;

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var accessToken = credential.accessToken;

      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;

      // ...
    });
}

// google SignIn
function gSign() {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  firebase.auth().languageCode = "it";
  provider.setCustomParameters({
    login_hint: "user@example.com",
  });
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
}
