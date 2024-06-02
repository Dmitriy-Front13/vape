var button = document.querySelector(".but-filtr");
var div = document.querySelector(".filters");

button.addEventListener("click", function() {
  if (div.style.display === "none") {
    
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
});