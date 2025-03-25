document.addEventListener('DOMContentLoaded', function () {
    const accountDropdown = document.getElementById('accountDropdown');
    const accountDropdownMenu = document.getElementById('accountDropdownMenu');
  
    // Function to update the navbar for a logged-in user
    function setLoggedIn(user) {
      accountDropdown.innerHTML = `${user.username}`;
      accountDropdownMenu.innerHTML = `<li><a class="dropdown-item" href="#" id="signOutLink">Sign Out</a></li>`;
      document.getElementById('signOutLink').addEventListener('click', function (e) {
        e.preventDefault();
        localStorage.removeItem('currentUser');
        resetAccountDropdown();
      });
    }
  
    // Function to reset the account dropdown to the logged-out state
    function resetAccountDropdown() {
      accountDropdown.innerHTML = `<i class="bi bi-person fs-3"></i> Account`;
      accountDropdownMenu.innerHTML = `
        <li>
          <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#loginModal">Login</a>
        </li>
        <li>
          <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#signupModal">Signup</a>
        </li>`;
    }
  
    // On page load, check if a user is already logged in.
    const currentUserJSON = localStorage.getItem('currentUser');
    if (currentUserJSON) {
      const user = JSON.parse(currentUserJSON);
      setLoggedIn(user);
    } else {
      resetAccountDropdown();
    }
  
    // Function to get all users from localStorage
    function getUsers() {
      const usersJSON = localStorage.getItem('users');
      return usersJSON ? JSON.parse(usersJSON) : [];
    }
  
    // Function to save users array to localStorage
    function saveUsers(users) {
      localStorage.setItem('users', JSON.stringify(users));
    }
  
    // Handle Signup Form Submission
    document.getElementById('signupForm').addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('signupName').value;
      const email = document.getElementById('signupEmail').value;
      const username = document.getElementById('signupUsername').value;
      const password = document.getElementById('signupPassword').value;
      const confirmPassword = document.getElementById('signupConfirmPassword').value;
  
      // Basic check for matching passwords.
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      
      // Retrieve existing users
      let users = getUsers();
      // Check if the username already exists
      if (users.find(u => u.username === username)) {
        alert("Username already exists!");
        return;
      }
      
      // Create new user object and add to users array
      const newUser = { name, email, username, password };
      users.push(newUser);
      saveUsers(users);
      alert('Signup successful! Please login.');
  
      // Hide the signup modal.
      const signupModalEl = document.getElementById('signupModal');
      const signupModal = bootstrap.Modal.getInstance(signupModalEl);
      signupModal.hide();
    });
  
    // Handle Login Form Submission
    document.getElementById('loginForm').addEventListener('submit', function (e) {
      e.preventDefault();
      const username = document.getElementById('loginUsername').value;
      const password = document.getElementById('loginPassword').value;
  
      // Retrieve the stored users array.
      const users = getUsers();
      const user = users.find(u => u.username === username && u.password === password);
      if (user) {
        // On successful login, store currentUser and update navbar
        localStorage.setItem('currentUser', JSON.stringify(user));
        setLoggedIn(user);
        const loginModalEl = document.getElementById('loginModal');
        const loginModal = bootstrap.Modal.getInstance(loginModalEl);
        loginModal.hide();
      } else {
        alert("Invalid credentials!");
      }
    });
  });
  