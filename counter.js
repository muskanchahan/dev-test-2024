 
export function displayUsers(users) {
    const userList = document.getElementById('userList');  
    userList.innerHTML = '';  

    if (users.length === 0) {
        userList.innerHTML = '<p class="text-white">No users found above 30 years old.</p>';
        return;
    }

    users.forEach(user => {
        const userCard = `
            <div class="user-card bg-black rounded-lg text-white w-64 h-64 p-4 overflow-hidden">
                <h3 class="text-lg font-bold">${user.firstName} ${user.lastName}</h3>
                <p>Age: ${user.age}</p>
                <p>Email: ${user.email}</p>
                <p>Address: ${user.address.address}, ${user.address.city}, ${user.address.state}, ${user.address.country}</p>
                <p>Birth Date: ${user.birthDate}</p>
            </div>
        `;
        userList.innerHTML += userCard; // Add the new user card to the user list
    });
}
 