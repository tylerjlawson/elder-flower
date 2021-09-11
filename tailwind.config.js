module.exports = {
  purge: ['./src/**/*.svelte'],
  mode: 'jit',
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
