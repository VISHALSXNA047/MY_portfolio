//  const modal = document.getElementById("imageModal");
//     const modalImg = document.getElementById("fullImage");
//     const closeBtn = document.getElementById("closeBtn");
//     const previewButtons = document.querySelectorAll(".preview-btn");

//     previewButtons.forEach((btn) => {
//       btn.addEventListener("click", () => {
//         const img = btn.closest('.project-card').querySelector('.design-img');
//         modal.style.display = "flex";
//         modalImg.src = img.src;

//         modalImg.style.animation = "none";
//         void modalImg.offsetWidth;
//         modalImg.style.animation = "zoomIn 0.4s ease forwards";
//       });
//     });

//     closeBtn.addEventListener("click", () => {
//       modal.style.display = "none";
//     });

//     modal.addEventListener("click", (e) => {
//       if (e.target === modal) {
//         modal.style.display = "none";
//       }
//     });

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("fullImage");
const closeBtn = document.getElementById("closeBtn");
const previewButtons = document.querySelectorAll(".preview-btn");

previewButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const img = btn.closest(".project-card").querySelector("img");
    modal.style.display = "flex";
    modalImg.src = img.src;

    // Restart animation
    modalImg.style.animation = "none";
    void modalImg.offsetWidth;
    modalImg.style.animation = "zoomIn 0.4s ease forwards";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});


  document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const sidebar = document.getElementById("sidebar");

    hamburger.addEventListener("click", function () {
      sidebar.classList.toggle("open");
    });
  });


