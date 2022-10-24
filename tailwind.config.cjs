/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
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
