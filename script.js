let tasks = [];

function add() {
  const n = document.getElementById("n").value;
  const big = document.getElementById("big");
  const alert = document.getElementById("alert");

  if (
    n == "" ||
    n.charAt(0) == " " ||
    n.charAt(n.length - 1) == " " ||
    n == " " ||
    tasks.indexOf(n) >= 0
  ) {
    alert.style.display = "block";

    setTimeout(() => {
      alert.style.display = "none";
    }, 2000);

    document.getElementById("n").value = "";
  } else {
    tasks.push(n);

    big.innerHTML = "";

    tasks.forEach((item) => {
      big.innerHTML += `<div class="note">
              <a href="#" onclick="del(${item})"> <img class="close" id="${item}" src="https://cdn-icons-png.flaticon.com/128/2976/2976286.png"></a>
              <p>${item}</p>          
          </div>`;
    });

    document.getElementById("n").value = "";
  }
}

function changemood() {

  const mode = document.getElementById("mode");

  const header = document.querySelector("header");
  const body = document.querySelector("body");
  const inputspace = document.getElementById("space");

  header.classList.toggle("headerdark");
  inputspace.classList.toggle("headerdark");
  body.classList.toggle("bodydark");

  if (mode.src == "https://cdn-icons-png.flaticon.com/128/12301/12301305.png") {
    mode.src = "https://cdn-icons-png.flaticon.com/128/2280/2280469.png";
  } else {
    mode.src = "https://cdn-icons-png.flaticon.com/128/12301/12301305.png";
  }
}

function del(n) {
  const big = document.getElementById("big");
  tasks.splice(tasks.indexOf(n.id), 1);
  big.innerHTML = "";
  tasks.forEach((item) => {
    big.innerHTML += `<div class="note">
              <a href="#" onclick="del(${item})"> <img class="close" id="${item}" src="https://cdn-icons-png.flaticon.com/128/2976/2976286.png"></a>
              <p>${item}</p>          
          </div>`;
  });
}
