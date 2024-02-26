// module.exports = {
//   semi: true,
//   singleQuote: false,
//   tabWidth: 2,
//   useTabs: true,
//   plugins: [require("prettier-plugin-astro")],
//   overrides: [
//     {
//       file: "**/*astro",
//       options: {
//         parser: "astro",
//       },
//     },
//   ],
// };

// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  useTabs: true,
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "**/*astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
