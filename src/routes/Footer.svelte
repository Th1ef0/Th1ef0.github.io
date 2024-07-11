<script>
	import gitHub from '$lib/images/icons8-github-48.png';
	import tg from '$lib/images/icons8-tg-48.png';
	import email from '$lib/images/icons8-email-48.png';
</script>

<footer>
	<h1>Contact with me!!!</h1>
	<nav>
		<a class="contact" id="gh-link" href="https://github.com/Th1ef0"
			><img class="icons" src={gitHub} alt="github" /></a
		>
		<a class="contact" id="email-link" href="mailto:k.karsakov@innopolis.university"
			><img class="icons" src={email} alt="email" /></a
		>
		<a class="contact" id="tg-link" href="https://t.me/Th1ef0"
			><img class="icons" src={tg} alt="telegram" /></a
		>
	</nav>
</footer>

<style>
	footer {
		padding: 5px;
		background: mediumpurple;
		color: whitesmoke;
		text-align: center;
		position: fixed;
		bottom: 0;
		width: 100%;
	}

	.contact {
		margin: 15px;
	}
</style>
