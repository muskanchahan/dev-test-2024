// you can import the module in your main.js file
// eg: import Vue from 'vue' or import { createApp } from 'vue'


import { displayUsers } from './counter.js'; // Adjust the path as necessary

document.addEventListener('DOMContentLoaded', function () {
    const fetchButton = document.querySelector('.fetchButton');
    fetchButton.addEventListener('click', fetchUsers);

    function fetchUsers() {
        fetch('https://dummyjson.com/users')
            .then(response => response.json())
            .then(data => {
                // Filter users whose age is above 30
                const users = data.users.filter(user => user.age > 30);
                displayUsers(users); // Call the imported function
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }
});
