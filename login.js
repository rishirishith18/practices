<!-- Add this script before the closing </body> tag -->
<script>
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual form submission

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Basic check – you can replace this with actual authentication logic
    if (username === "admin" && password === "password123") {
      alert("Login successful!");
      // Redirect to dashboard or another page
      // window.location.href = "dashboard.html";
    } else {
      alert("Invalid username or password.");
    }
  });
</script>
