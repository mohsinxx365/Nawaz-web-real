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
const title = document.querySelector("title");
const version = document.querySelector(".version");

function DisplayIP(response) {
  ip_address = response.ip;
}
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    emailID.textContent = "Email : " + user.email;
    UID.textContent = "UID : " + user.uid;
    createTime.textContent =
      "Account Create Time : " + user.metadata.creationTime;
    ipAdress.textContent = "IP adress : " + ip_address;
    del.onclick = function () {
      title.textContent = "Delete Account";
      all.remove();
      confirmMSG = document.createElement("h1");
      document.body.appendChild(confirmMSG);
      confirmMSG.textContent = "Type CONFIRM to delete your account";
      confirmInput = document.createElement("input");
      confirmDIV = document.createElement("div");
      document.body.appendChild(confirmDIV);
      confirmDIV.appendChild(confirmInput);
      confirmDIV.style.display = "Flex";
      confirmDIV.style.justifyContent = "center";
      confirmDIV.style.alignItems = "center";
      confirmInput.style.marginTop = "30px";
      confirmInput.style.width = "400px";
      confirmInput.style.height = "50px";
      confirmInput.style.fontSize = "25px";
      confirmInput.style.fontWeight = "bold";
      confirmBTN = document.createElement("button");
      confirmDIV.appendChild(confirmBTN);
      confirmBTN.textContent = "Submit";
      confirmDIV.style.flexDirection = "column";
      confirmBTN.style.marginTop = "30px";
      confirmBTN.style.width = "200px";
      confirmBTN.style.height = "40px";
      confirmBTN.style.cursor = "pointer";
      confirmBTN.style.backgroundColor = "#1EAF1E";
      confirmBTN.style.border = "none";
      confirmBTN.style.color = "white";
      confirmBTN.onclick = function () {
        if (confirmInput.value == "CONFIRM") {
          var confirmMessage = confirm(
            "Are you sure that you want to delete your account ? It is not reversable "
          );
          if (confirmMessage == true) {
            axios
              .post("https://howto13.loca.lt/delete", {
                email: user.email,
              })
              .then((res) => {
                console.log(res.data);
              });
            firebase.auth().currentUser.delete();
            alert("Your account has been deleted successfully");
          } else {
            location.reload();
          }
        } else {
          alert("Type CONFIRM in capital letters and give no spacing");
        }
      };
    };

    if (user.email == "nawazxx333@gmail.com") {
      version.textContent = "Version : Premium";
    }
  }
  if (!user) {
    window.location = "../index.html";
    ipAdress.textContent = "ERROR";
    createTime.textContent = "ERROR";
    version.textContent = "ERROR";
    UID.textContent = "ERROR";
    emailID.textContent = "ERROR";
  }
});
function signOut() {
  const all = document.querySelector(".all");
  var confirmLogOut = confirm("Are You Sure You Want To Log Out ?");
  if (confirmLogOut == true) {
    all.textContent = "";
    h1 = document.createElement("h1");
    document.body.appendChild(h1);
    title.textContent = "Processing ...";
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

const del = document.querySelector(".delete");
const all = document.querySelector(".all");

// del.onclick = function () {
//   title.textContent = "Delete Account";
//   all.remove();
//   confirmMSG = document.createElement("h1");
//   document.body.appendChild(confirmMSG);
//   confirmMSG.textContent = "Type CONFIRM to delete your account";
//   confirmInput = document.createElement("input");
//   confirmDIV = document.createElement("div");
//   document.body.appendChild(confirmDIV);
//   confirmDIV.appendChild(confirmInput);
//   confirmDIV.style.display = "Flex";
//   confirmDIV.style.justifyContent = "center";
//   confirmDIV.style.alignItems = "center";
//   confirmInput.style.marginTop = "30px";
//   confirmInput.style.width = "400px";
//   confirmInput.style.height = "50px";
//   confirmInput.style.fontSize = "25px";
//   confirmInput.style.fontWeight = "bold";
//   confirmBTN = document.createElement("button");
//   confirmDIV.appendChild(confirmBTN);
//   confirmBTN.textContent = "Submit";
//   confirmDIV.style.flexDirection = "column";
//   confirmBTN.style.marginTop = "30px";
//   confirmBTN.style.width = "200px";
//   confirmBTN.style.height = "40px";
//   confirmBTN.style.cursor = "pointer";
//   confirmBTN.style.backgroundColor = "#1EAF1E";
//   confirmBTN.style.border = "none";
//   confirmBTN.style.color = "white";
//   confirmBTN.onclick = function () {
//     if (confirmInput.value == "CONFIRM") {
//       var confirmMessage = confirm(
//         "Are you sure that you want to delete your account ? It is not reversable "
//       );
//       if (confirmMessage == true) {
//         axios
//           .post("https://howto13.loca.lt/delete", {
//             email: emailID.value,
//           })
//           .then((res) => {
//             console.log(res.data);
//           });
//         firebase.auth().currentUser.delete();
//         alert("Your account has been deleted successfully");
//       } else {
//         location.reload();
//       }
//     } else {
//       alert("Type CONFIRM in capital letters");
//     }
//   };
// };
