/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				mont: "url('../public/Fondo.svg')"
			},
			colors: {
				container: `#626262`,
				display: `#3A3A3A`,
				buttons: `#8E8E8E`,
				button: `#452727`
			}
		}
	}
};
