<script>
    import {page} from "$app/stores";
    import back from '../lib/images/icons8-стрелка-влево-в-круге-2-100.png'

    $: route = $page.url.pathname;
</script>

{#if route !== '/' }
    <a href="/"><img src={back} alt="back-button"></a>
{/if}

<style>
    a {
        text-decoration: none;
        color: inherit;
        font-size: 1.5em;
        position: absolute;
        left: 10px;
    }

    img {
        scale: 75%;
    }
</style>