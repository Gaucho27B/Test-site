

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
function openModal(image){
  modal = document.getElementById("myModal");
  console.log(image);
  modal.style.display = "block";
  modalImg.src = image.src;
  captionText.innerHTML = image.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
