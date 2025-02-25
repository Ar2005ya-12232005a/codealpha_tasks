// // Create a modal dynamically
// const modal = document.createElement("div");
// modal.id = "imageModal";
// modal.innerHTML = `
//   <div class="modal-content">
//     <span class="close">&times;</span>
//     <img id="modalImg" src="" alt="Image Preview">
//     <div class="nav-buttons">
//       <button id="prevBtn">&#10094;</button>
//       <button id="nextBtn">&#10095;</button>
//     </div>
//   </div>
// `;
// document.body.appendChild(modal);

// const modalImg = document.getElementById("modalImg");
// const modalBox = document.getElementById("imageModal");
// const closeBtn = document.querySelector(".close");
// const prevBtn = document.getElementById("prevBtn");
// const nextBtn = document.getElementById("nextBtn");

// const galleryBoxes = document.querySelectorAll(".box");
// let currentIndex = 0;

// // Function to open the modal with the clicked image
// function openModal(index) {
//     const bgImage = galleryBoxes[index].style.backgroundImage;
//     if (bgImage) {
//         modalImg.src = bgImage.slice(5, -2); // Extract URL from background-image
//         modalBox.style.display = "flex";
//         currentIndex = index;
//     }
// }

// galleryBoxes.forEach((box, index) => {
//     box.addEventListener("click", () => openModal(index));
// });

// // Close modal when clicking outside the image or pressing ESC key
// closeBtn.addEventListener("click", () => modalBox.style.display = "none");
// modalBox.addEventListener("click", (e) => {
//     if (e.target === modalBox) modalBox.style.display = "none";
// });
// document.addEventListener("keydown", (e) => {
//     if (e.key === "Escape") modalBox.style.display = "none";
//     if (e.key === "ArrowRight") nextImage();
//     if (e.key === "ArrowLeft") prevImage();
// });

// // Navigate to next and previous images
// function nextImage() {
//     currentIndex = (currentIndex + 1) % galleryBoxes.length;
//     openModal(currentIndex);
// }
// function prevImage() {
//     currentIndex = (currentIndex - 1 + galleryBoxes.length) % galleryBoxes.length;
//     openModal(currentIndex);
// }
// nextBtn.addEventListener("click", nextImage);
// prevBtn.addEventListener("click", prevImage);
