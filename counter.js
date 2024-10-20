
export function displayUsers(users) {
    const userList = document.getElementById('userList'); // Get the user list element
    userList.innerHTML = ''; // Clear previous content

    if (users.length === 0) {
        userList.innerHTML = '<p class="text-white">No users found above 30 years old.</p>';
        return;
    }

    users.forEach(user => {
        const userCard = `
            <div class="user-card bg-black rounded text-white min-w-[200px] max-w-[300px] w-auto flex flex-col p-4 m-5 break-words">
                <h2>${user.firstName} ${user.lastName}</h2>
                <p>Age: ${user.age}</p>
                <p>Email: ${user.email}</p>
                <p>Address: ${user.address.address}, ${user.address.city}, ${user.address.state}, ${user.address.country}</p>
                <p>Birth Date: ${user.birthDate}</p>
            </div>
        `;
        userList.innerHTML += userCard; // Add the new user card to the user list
    });
}
