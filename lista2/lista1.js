function mudar() {
  alert("Executado");
  document.getElementById("result").innerHTML = "mudou!";
  for (let i = 1; i <= 10; i++) {
    alert(`mudou ${i}`);
  }
}

const offImg = "assets/Loff.png";
const onImg = "assets/Lon.png";

function changeStatus(idImg, idBtn) {
  let img = document.getElementById(idImg);
  let btn = document.getElementById(idBtn);

  if (img.src === `http://127.0.0.1:5500/${offImg}`) {
    img.src = onImg;
    btn.textContent = "Desliga";
  } else {
    img.src = offImg;
    btn.textContent = "Liga";
  }
}
