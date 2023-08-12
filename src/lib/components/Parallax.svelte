<section id="parallax">
	<h1>Turito Yuenan</h1>
</section>

<style lang="scss">
	@use '$lib/styles/macchiato' as *;
	$tint: transparentize($base, 0.5);
	$wallpaper: url(/wallpaper.jpg);

	section#parallax {
		min-height: 60vh;
		padding: 1rem;
		color: $yellow;
		text-align: center;

		display: flex;
		justify-content: center;
		align-items: center;

		background: {
			image: linear-gradient(0deg, $tint, $tint), $wallpaper;
			attachment: fixed;
			position: center;
			repeat: no-repeat;
			size: cover;
		}

		h1 {
			font-size: 10vh;
			font-variant: small-caps;
			filter: drop-shadow(0 0 10px $yellow);
		}
	}
</style>
