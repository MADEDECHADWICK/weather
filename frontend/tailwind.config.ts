import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/rippleui/**/*.js" // 👈 Add this
  ],
  theme: {
    extend: {}
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("rippleui")] // 👈 Add this
};
export default config;
