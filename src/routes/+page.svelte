<script lang="ts">
	const site = 'https://lumisxh.github.io/';
	const title = 'LuMiSxh';
	const description =
		'LuMiSxh, software developer. Projects and open source work on GitHub.';
	const image = `${site}logo-dark.webp`;
	// "<" is escaped so the JSON cannot close the script element early.
	const jsonLd = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: title,
		url: site
	}).replaceAll('<', '\\u003c');
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={site} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={title} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={site} />
	<meta property="og:image" content={image} />
	<meta property="og:image:width" content="1500" />
	<meta property="og:image:height" content="500" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="google-site-verification"
		content="rKSkIR3sV4QdLRzh6LfguydNElkuRCFjlw7EIqDHnyI"
	/>
	{@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>

<main>
	<picture>
		<source
			srcset="/logo-light.webp"
			media="(prefers-color-scheme: light)"
		/>
		<img src="/logo-dark.webp" alt="LuMiSxh" width="1500" height="500" />
	</picture>
</main>

<style>
	:global(html) {
		background: #0d1117;
	}

	:global(body) {
		margin: 0;
	}

	@media (prefers-color-scheme: light) {
		:global(html) {
			background: #fff;
		}
	}

	main {
		display: grid;
		place-items: center;
		min-height: 100dvh;
	}

	img {
		display: block;
		width: min(100vw, 1500px);
		height: auto;
	}
</style>
