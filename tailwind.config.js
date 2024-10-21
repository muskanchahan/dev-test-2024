// tailwind.config.js
export default {
  content: ["./*.html"],
  theme: {
      extend: {
          colors: {
              primary: "#FC204D", // Custom primary color
              slate: {
                  800: '#1E293B', // Slate gray
                  950: '#000000', // Background color for cards and gutters
              },
          },
      },
  },
};

