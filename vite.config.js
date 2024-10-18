// https://vitejs.dev/config/

import postCssNesting from "postcss-nesting";
import tailwindcss from "tailwindcss";
import tailwindConfig from "./tailwind.config";

export default {
    server: {
      port: 4200,
      origin: "http://localhost:4200",
    },
    css: {
        postcss: {
          plugins: [
            postCssNesting(),
            tailwindcss(tailwindConfig),
          ],
        },
      },
};