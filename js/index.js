const button = document.getElementById("button");

button.addEventListener("click", function () {
  const max = parseInt(document.getElementById("max").value);

  const min = parseInt(document.getElementById("min").value);

  const answer = document.getElementById("result");

  answer.innerHTML = Math.floor(Math.random() * (max - min + 1) + min);
});