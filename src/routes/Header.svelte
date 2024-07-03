<script>
    import {page} from "$app/stores";
    import Buttonback from "./Buttonback.svelte";

    export let title = '';

    $: {
        const route = $page.url.pathname;
        if (route === '/') {
            title = 'Main page'
        } else if (route === '/about') {
            title = 'About me'
        } else if (route === '/photos') {
            title = 'My photos'
        } else if (route === '/portfolio') {
            title = 'My portfolio'
        } else if (route === '/comic') {
            title = 'Comic'
        }
    }
</script>

<div id="header">
    <Buttonback/>
    <h1>{title}</h1>
</div>


<style>
    #header {
        padding: 50px 0;
        background: mediumpurple;
        color: whitesmoke;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    h1 {
        margin: 0;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
</style>