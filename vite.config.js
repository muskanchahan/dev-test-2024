// https://vitejs.dev/config/

import postCssNesting from "postcss-nesting";

export default {
    server: {
      port: 4200,
      origin: "http://localhost:4200",
    },
    css: {
        postcss: {
          plugins: [
            postCssNesting(),
          ],
        },
      },
};