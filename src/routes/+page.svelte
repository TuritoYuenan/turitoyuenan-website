<section id="parallax">
	<h1>Turito Yuenan</h1>
</section>

<style lang="scss">
	$tint: transparentize($midnight-green, 0.5);

	section#parallax {
		min-height: 70vh;
		color: $sunglow;

		display: flex;
		justify-content: center;
		align-items: center;

		background-size: cover;
		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-image: linear-gradient(0deg, $tint, $tint),
			url(/sample-wallpaper.jpg);

		h1 {
			font-size: 8vw;
			font-variant: small-caps;
		}
	}
</style>
