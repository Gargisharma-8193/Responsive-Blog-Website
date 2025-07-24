document.addEventListener('DOMContentLoaded', () => {
  const darkToggle = document.getElementById('darkModeToggle');

  // Load theme from localStorage
  const isDark = localStorage.getItem('darkMode') === 'enabled';
  if (isDark) {
    document.body.classList.add('dark');
    darkToggle.textContent = '🌞';
  }
 
  // Toggle on click
  darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const enabled = document.body.classList.contains('dark');
    localStorage.setItem('darkMode', enabled ? 'enabled' : 'disabled');
    darkToggle.textContent = enabled ? '🌞' : '🌙';
  });

  // ===== LIVE SEARCH =====
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const keyword = searchInput.value.toLowerCase();
      const posts = document.querySelectorAll(".post-card");

      posts.forEach((post) => {
        const title = post.querySelector("h2").innerText.toLowerCase();
        const excerpt = post.querySelector(".excerpt").innerText.toLowerCase();

        if (title.includes(keyword) || excerpt.includes(keyword)) {
          post.style.display = "block";
        } else {
          post.style.display = "none";
        }
      });
    });
  }

  // ===== SMOOTH SCROLL =====
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});
