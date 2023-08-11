<section id="parallax">
	<h1>Turito Yuenan</h1>
</section>

<style lang="scss">
	@use '$lib/macchiato' as *;
	$tint: transparentize($base, 0.5);

	section#parallax {
		min-height: 70vh;
		color: $yellow;

		display: flex;
		justify-content: center;
		align-items: center;

		background: linear-gradient(0deg, $tint, $tint),
			url(/sample-wallpaper.jpg) fixed center no-repeat;
		background-size: cover;

		h1 {
			font-size: 8vw;
			font-variant: small-caps;
		}
	}
</style>
