// Function to log out the user
function logout() {
    // Clear authentication data
    clearAuthData();
  
    // Redirect to login page or homepage
    window.location.href = '/login.html'; // Adjust the URL based on your login page
  }
  
  // Adding an event listener to the logout button
  document.getElementById('logoutButton').addEventListener('click', logout);
  