// Toggle section visibility
function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

// Confirmation alert for contact
function confirmContact(type) {
    if (type === 'phone') {
        alert('Are you sure you want to call +250793220454?');
    } else if (type === 'email') {
        alert('Are you sure you want to send an email to philbertkuria@gmail.com?');
    }
}

// Scroll to top functionality
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// Toggle Dark Mode
function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    // Change button text based on mode
    var btn = document.getElementById("darkModeToggle");
    if (element.classList.contains("dark-mode")) {
        btn.innerHTML = "Light Mode";
    } else {
        btn.innerHTML = "Dark Mode";
    }
}

