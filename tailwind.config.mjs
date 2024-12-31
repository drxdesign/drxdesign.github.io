/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  colors: {
			primary: '#D1FF00', // Kiwi Green
			background: '#0F1318', // Dark Navy
			highlight: '#E4FF33', // Lighter Kiwi Green
			text: '#E8E8E8', // Light Gray
		  },
		  fontFamily: {
			sans: ['Poppins', 'sans-serif'], // Replace 'Poppins' with Montserrat or Inter if preferred
		  },
		},
	  },
	plugins: [],
}

  