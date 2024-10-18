Design: https://www.figma.com/design/Yohl89JqlH8nKW90EE7Zmm/Dev-Test?node-id=1-2&t=kX6307MBa8ONRtEx-1

## Rules
Site does not have to pixel perfect but should be . Site does NOT have to optimzed for mobile. Everything is static except the FAB button (pink button on the bottom right)

On click send a request to 
```
https://dummyjson.com/users
```
and log users who have age greater than 30.

## Development

- Fork this github
- Setup your local environment
  ```
  npm install
  ```
- Start development server:
  ```
  npm run dev
  ```

- Tailwind is already installed if you want to use it. If you are familiar with other css kit use that. If you want to not use any of the css kit its okay ( I highly recommend using tailwind )
- If you want to use SCSS you can configure it but [postcss-nesting](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-nesting) is already installed so it should take care of the nesting for this simple project.
- Primary color: #FC204D (Already configured for tailwind with name primary)
- Grey: #1E293B (slate-800 for tailwind)
- Background color for cards and gutters: #1E293B (slate-950 for tailwind)
- When finished commit your changes and send us your github repo link

---
**Happy Coding 👨🏽‍💻**
