/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // Next.js 13 app 디렉터리 사용 시 추가
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

