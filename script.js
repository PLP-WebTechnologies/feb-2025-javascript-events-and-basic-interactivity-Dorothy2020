// Event Handling
document.getElementById("magicBtn").addEventListener("click", () => {
  alert("You clicked the magic button!");
});

document.getElementById("hoverBox").addEventListener("mouseenter", () => {
  document.getElementById("hoverBox").style.transform = "scale(1.1)";
});
document.getElementById("hoverBox").addEventListener("mouseleave", () => {
  document.getElementById("hoverBox").style.transform = "scale(1)";
});

document.getElementById("keyInput").addEventListener("keyup", (e) => {
  document.getElementById("keyOutput").textContent = `You typed: ${e.key}`;
});

// Bonus: Double-click event
document.getElementById("magicBtn").addEventListener("dblclick", () => {
  document.body.style.backgroundColor = "#f0f8ff";
});

// Interactive Elements - Image Gallery
const images = [
  "https://via.placeholder.com/300?text=First",
  "https://via.placeholder.com/300?text=Second",
  "https://via.placeholder.com/300?text=Third"
];
let currentImage = 0;

document.getElementById("nextImage").addEventListener("click", () => {
  currentImage = (currentImage + 1) % images.length;
  document.getElementById("galleryImage").src = images[currentImage];
});

// Accordion
const toggleBtn = document.querySelector(".accordion-toggle");
const content = document.querySelector(".accordion-content");

toggleBtn.addEventListener("click", () => {
  content.classList.toggle("open");
});

// Form Validation
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const feedback = document.getElementById("formFeedback");

  if (!email.includes("@")) {
    feedback.textContent = "Please enter a valid email.";
    return;
  }

  if (password.length < 8) {
    feedback.textContent = "Password must be at least 8 characters.";
    return;
  }

  feedback.textContent = "Form submitted successfully! 🎉";
});
