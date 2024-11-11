function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    if (sidebar.style.width === '250px') {
        sidebar.style.width = '50px';
        mainContent.style.marginLeft = '50px';
    } else {
        sidebar.style.width = '250px';
        mainContent.style.marginLeft = '250px';
    }
}

function showSummary(type) {
    console.log(`Showing ${type} summary`);
    // Add your logic here to display the summary for the selected type
}

function handleGoogleSignIn() {
    console.log('Google sign-in clicked');
    // Implement Google Sign-In logic here
}

document.addEventListener('DOMContentLoaded', function() {
    // This function runs when the DOM is fully loaded
    console.log('DOM fully loaded and parsed');
    // You can initialize any necessary data or set up event listeners here
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
      });window.addEventListener('load', function() {
        document.body.classList.add('loaded');
      });
});
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  
    // Save the mode to local storage so it persists across page reloads
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.setItem("darkMode", "disabled");
    }
  }
  
  // Load the mode from local storage on page load
  window.addEventListener("load", () => {
    if (localStorage.getItem("darkMode") === "enabled") {
      document.body.classList.add("dark-mode");
    }
  });
  // Navbar title hover animation
document.querySelector('.navbar h1').addEventListener('mouseover', function() {
  this.style.transition = "transform 0.5s ease";
  this.style.transform = "scale(1.1)";
});
document.querySelector('.navbar h1').addEventListener('mouseout', function() {
  this.style.transform = "scale(1)";
});
// Flash effect on dark mode toggle button
document.querySelector('.toggle-dark-mode-btn').addEventListener('mouseover', function() {
  this.style.transition = "box-shadow 0.4s ease";
  this.style.boxShadow = "0 0 15px rgba(255, 215, 0, 0.6)";
});
document.querySelector('.toggle-dark-mode-btn').addEventListener('mouseout', function() {
  this.style.boxShadow = "none";
});

// Subtle rotation effect on cards when hovered
document.querySelectorAll('.card').forEach(function(card) {
  card.addEventListener('mouseover', function() {
      this.style.transition = "transform 0.3s ease";
      this.style.transform = "rotate(2deg)";
  });
  card.addEventListener('mouseout', function() {
      this.style.transform = "rotate(0)";
  });
});
// Wiggle effect on sidebar icon click
document.querySelector('.sidebar').addEventListener('click', function() {
  this.classList.add('wiggle');
  setTimeout(() => this.classList.remove('wiggle'), 500); // Remove after wiggle
});

// Flip effect on card click
document.querySelectorAll('.card').forEach(function(card) {
  card.addEventListener('click', function() {
      this.style.transition = "transform 0.6s ease";
      this.style.transform = this.style.transform === "rotateY(180deg)" ? "rotateY(0deg)" : "rotateY(180deg)";
  });
});

// Bounce effect on profile picture on page load
window.addEventListener('load', function() {
  const profilePic = document.querySelector('.profile-pic');
  profilePic.classList.add('bounce');
  setTimeout(() => profilePic.classList.remove('bounce'), 1000);
});
// Highlight row on click
document.querySelectorAll('tbody tr').forEach(function(row) {
  row.addEventListener('click', function() {
      this.classList.toggle('highlight-row');
  });
});

// Scale up icons on click
document.querySelectorAll('.icon').forEach(function(icon) {
  icon.addEventListener('click', function() {
      this.style.transition = "transform 0.2s ease";
      this.style.transform = "scale(1.2)";
      setTimeout(() => this.style.transform = "scale(1)", 200); // Reset after scaling
  });
});



