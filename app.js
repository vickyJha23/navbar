// console.log("har har mahadev");
const toggleBtn = document.querySelector(".toggle_btn");
// console.log(toggleBtn);
const link = document.querySelector(".links");
toggleBtn.addEventListener("click", () => {
      link.classList.toggle("show-links");
})