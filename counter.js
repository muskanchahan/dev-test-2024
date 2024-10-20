export function displayUsers(users) {
  const userList = document.querySelector('.part2');
  userList.innerHTML = ''; // Clear previous content

  if (users.length === 0) {
      userList.innerHTML = '<p>No users found above 30 years old.</p>';
      return;
  }

  users.forEach(user => {
      const userCard = `
          <div class="user-card">
              <h3>${user.firstName} ${user.lastName}</h3>
              <p>Age: ${user.age}</p>
              <p>Email: ${user.email}</p>
              <p>Address: ${user.address.address}, ${user.address.city}, ${user.address.state}, ${user.address.country}</p>
              <p>Birth Date: ${user.birthDate}</p>
          </div>
      `;
      userList.innerHTML += userCard;
  });
}