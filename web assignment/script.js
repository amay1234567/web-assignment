// Function to handle showing/hiding sections
function toggleSection(targetSelector) {
    // 1. Hide all main sections quickly
    $("main section").hide();

    // 2. Show only the target section with a fade effect
    $(targetSelector).fadeIn(400); 
}

$(document).ready(function () {
  
  // 1. Sidebar Navigation Links
  $(".nav-links a").on("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      const hash = this.hash;
      toggleSection(hash);
    }
  });
  
  // 2. Hero Section Buttons (using the new class and data-target)
  $(".scroll-btn").on("click", function() {
    const target = $(this).data("target"); // Get the value from data-target="#section"
    toggleSection(target);
  });
  
  // 3. Form Submission Feedback
  $(".contact-form").on("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent successfully.");
    this.reset();
  });
});