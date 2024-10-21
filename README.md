 # Project Title

## Overview
This project is a simple web application that features a counter implemented with HTML, CSS, JavaScript, and Tailwind CSS. The application uses Vite as a build tool for efficient development and deployment.

## Project Structure

### File Descriptions

- **public/**: Contains publicly accessible assets.
  - **site.svg**: Logo or icon for the site.
  - **javascript.svg**: Icon or image related to JavaScript.

- **mainFolder/**: Contains publicly accessible assets.
  - **counter.js**: JavaScript file that implements the counter functionality. This file includes the logic to increment or decrement the counter and update the displayed value.
  - **index.html**: Main HTML file that serves as the entry point for the application. It includes references to styles and scripts.

- **main.js**: The main JavaScript file responsible for handling user interactions and fetching user data from the API.
  - **Functionality**:
    - The script imports the `displayUsers` function from the `counter.js` file, which is used to render user data on the web page.
    - It sets up an event listener that triggers when the DOM content is fully loaded, ensuring that all elements are available for manipulation.
    - A click event listener is added to the Floating Action Button (FAB) (`fetchButton`), which invokes the `fetchUsers` function when clicked.
    - The `fetchUsers` function is an asynchronous function that:
      - Sends a GET request to `https://dummyjson.com/users` to retrieve user data.
      - Parses the JSON response and filters the users to include only those with an age greater than 30.
      - Calls the `displayUsers` function to render the filtered user data on the web page.
    - The function includes error handling to log any issues encountered during the fetch operation to the console.

- **package.json**: Contains metadata about the project, including dependencies, scripts, and project information.

- **package-lock.json**: Automatically generated file that locks the versions of the installed packages, ensuring consistent installs across environments.

- **style.css**: Custom styles for the application, possibly including additional CSS rules not covered by Tailwind CSS.

- **tailwind.config.js**: Configuration file for Tailwind CSS, allowing you to customize your Tailwind setup, such as colors, fonts, and other design tokens.

- **vite.config.js**: Configuration file for Vite, which manages the build process and development server settings.

## Design
For the design reference, please follow this [Figma link](https://www.figma.com/design/Yohl89JqlH8nKW90EE7Zmm/Dev-Test?node-id=1-2&t=kX6307MBa8ONRtEx-1).

## Rules
- The site does not have to be pixel-perfect but should resemble the design.
- The site does NOT have to be optimized for mobile.
- Everything is static except the FAB (Floating Action Button) button (pink button on the bottom right).
- On click of the FAB button, send a request to `https://dummyjson.com/users` and log users who have an age greater than 30.

## Development

### Forking the Repository
1. Fork this GitHub repository by clicking the "Fork" button at the top right corner.
2. Clone your forked repository to your local machine:
   ```bash
   git clone <your-forked-repo-url>
   cd project-root
