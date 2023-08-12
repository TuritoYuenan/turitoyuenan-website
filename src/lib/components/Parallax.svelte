<section id="parallax">
	<h1>Turito Yuenan</h1>
</section>

<style lang="scss">
	@use '$lib/styles/macchiato' as *;
	$tint: transparentize($base, 0.5);

	section#parallax {
		min-height: 70vh;
		color: $yellow;

		display: flex;
		justify-content: center;
		align-items: center;

		background: {
			image: linear-gradient(0deg, $tint, $tint), url(/sample-wallpaper.jpg);
			attachment: fixed;
			position: center;
			repeat: no-repeat;
			size: cover;
		}

		h1 {
			font-size: 8vw;
			font-variant: small-caps;
			filter: drop-shadow(0 0 10px $yellow);
		}
	}
</style>
