<script>
    import pic from '$lib/images/purple.jpg'
</script>

<svelte:head>
    <title>Home</title>
    <meta name="Main page" content="Nav to other pages"/>
</svelte:head>

<section>

    <nav class="navigation">
        <a class="other-pages" href="/about">About Me</a>
        <a class="other-pages" href="/photos">Photos</a>
        <a class="other-pages" href="/portfolio">Portfolio</a>
        <a class="other-pages" href="/comic">Comic</a>
    </nav>
    <p id="main-page-pic"><img id="pic" src={pic} alt="purple vibe"></p>
</section>

<style>
    .other-pages {
        margin: 20px;
        text-decoration: none;
        color: blueviolet;
    }

    .navigation {
        padding: 20px;
        text-align: center;
    }

    #main-page-pic {
        text-align: center;
        padding: 25px;
    }

    #pic {
        border-radius: 10px;
        scale: 1.25;
    }

    a:hover {
        color: #5f1f98;
    }
</style>
