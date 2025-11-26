// cursor.js - Custom cursor for portfolio
document.addEventListener("DOMContentLoaded", function () {
  // Check if device supports hover (not touch)
  if (window.matchMedia("(hover: none)").matches) {
    return;
  }

  // Create cursor elements if they don't exist
  if (!document.querySelector(".cursor")) {
    const cursor = document.createElement("div");
    cursor.className = "cursor";
    document.body.appendChild(cursor);
  }

  if (!document.querySelector(".cursor-follower")) {
    const follower = document.createElement("div");
    follower.className = "cursor-follower";
    document.body.appendChild(follower);
  }

  const cursor = document.querySelector(".cursor");
  const follower = document.querySelector(".cursor-follower");

  // Add class to body to enable custom cursor
  document.body.classList.add("has-custom-cursor");

  let mouseX = 0,
    mouseY = 0;
  let followerX = 0,
    followerY = 0;

  // Initialize cursor positions
  function initCursor() {
    cursor.style.opacity = "1";
    follower.style.opacity = "1";
  }

  // Mouse move event
  document.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Update main cursor immediately
    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
  });

  // Smooth animation for follower
  function animate() {
    // Smooth follow effect
    followerX += (mouseX - followerX - 20) * 0.15;
    followerY += (mouseY - followerY - 20) * 0.15;

    follower.style.left = followerX + "px";
    follower.style.top = followerY + "px";

    requestAnimationFrame(animate);
  }

  // Start animation
  animate();

  // Hover effects for interactive elements
  const interactiveElements = document.querySelectorAll(
    "a, button, .nav-toggle, .nav-link, .work-item, .resume-header, .style-switcher-color, .btn, input, textarea, .social-link, .link"
  );

  interactiveElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      cursor.classList.add("hover");
      follower.classList.add("hover");
    });

    element.addEventListener("mouseleave", () => {
      cursor.classList.remove("hover");
      follower.classList.remove("hover");
    });
  });

  // Special hover for navigation menu when open
  const navMenu = document.getElementById("nav-menu");
  if (navMenu) {
    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.attributeName === "class") {
          if (navMenu.classList.contains("show-menu")) {
            cursor.classList.add("hover");
            follower.classList.add("hover");
          } else {
            cursor.classList.remove("hover");
            follower.classList.remove("hover");
          }
        }
      });
    });

    observer.observe(navMenu, { attributes: true });
  }

  // Click effects
  document.addEventListener("mousedown", () => {
    cursor.classList.add("click");
    follower.classList.add("click");
  });

  document.addEventListener("mouseup", () => {
    cursor.classList.remove("click");
    follower.classList.remove("click");
  });

  // Hide cursor when leaving window
  document.addEventListener("mouseleave", () => {
    cursor.style.opacity = "0";
    follower.style.opacity = "0";
  });

  document.addEventListener("mouseenter", () => {
    cursor.style.opacity = "1";
    follower.style.opacity = "1";
  });

  // Initialize
  initCursor();

  // console.log("Custom cursor initialized");
});
