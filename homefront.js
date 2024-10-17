<!-- Add this button for mobile navigation (optional) -->
<button class="nav-toggle">Menu</button>
// JavaScript to toggle the mobile menu
document.querySelector('.nav-toggle').addEventListener('click', function () {
  const nav = document.querySelector('nav ul');
  nav.classList.toggle('active');
});
