let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function clock() {
  let date = new Date();
  //   console.log(date);

  hrs.innerHTML = date.getHours();
  min.innerHTML = date.getMinutes();
  sec.innerHTML = date.getSeconds();
}

setInterval(() => {
  clock();
}, 1000);
