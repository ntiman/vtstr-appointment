/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./pages/**/*.{html,js}', './components/**/*.{html,js}'],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      blue: '#1fb6ff',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#ffc82c',
      white: '#FFFFFF',
      'vetster-purple': '#11294c',
      'vetster-pink': '#c12269',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#d3dce6',
      /* Blue */
      '-blue-200:': '#2973b6',
      '-blue-100:': '#3274b8',
      '-blue-300:': '#1877f2',
      '-blue-400:': '#0065a2',
      '-blue-500:': '#005daa',
      '-blue-600:': '#4b5563',
      '-blue-700:': '#225082',
      '-blue-800:': '#224a74',
      '-blue-900:': '#374151',
      '-blue-1000': ' #252f3',
      '-blue-1100': ' #1f293',
      '-blueViolet': '#1d4ed8'
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
