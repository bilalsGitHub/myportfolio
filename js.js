// Get the modal
var modal = document.getElementById("imageModal");

// Get the modal image element
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");

// Get all images with the class "project-image"
var images = document.getElementsByClassName("project-image");

// Loop through all images and add click event listener
for (let i = 0; i < images.length; i++) {
  images[i].onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// Close modal when the user presses the "Esc" key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modal.style.display = "none";
  }
});
