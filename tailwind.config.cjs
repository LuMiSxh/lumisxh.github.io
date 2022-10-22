/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				bf: {
					red: "#FF2C10",
					blue: "#26FFDF"
				},
				new: {
					black: "#181818",
					purple: "#8650C4",
					yellow: "#FFD166",
				}
			},
		}
	},
	daisyui: {
		themes: [
			{
				lumisxh: {
					"primary": "#F09E03",
        			"secondary": "#F06F03",
					"accent": "#F01A03",
					"neutral": "#ffffff",
					"base-100": "#000000",
					"info": "#D803F0",
					"success": "#03F099",
					"warning": "#F0C803",
					"error": "#F00372",
				},
			},
			"dark"
		],
	},
	plugins: [require("daisyui")],
}
