
document.addEventListener('DOMContentLoaded', function() {
    var navbarToggle = document.getElementById('navbarToggle');
    var navbarMenu = document.getElementById('navbarMenu');
  
    navbarToggle.addEventListener('click', function() {
      if (navbarMenu.style.display === 'block') {
        navbarMenu.style.display = 'none';
      } else {
        navbarMenu.style.display = 'block';
      }
    });
  });
  