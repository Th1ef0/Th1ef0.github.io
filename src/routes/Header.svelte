<script>
    import {page} from "$app/stores";
    export let title = '';

    $: {
        const route = $page.url.pathname;
        if(route === '/'){
            title = 'Main page'
        } else if(route === '/about') {
            title = 'About me'
        } else if(route === '/photos'){
            title = 'My photos'
        } else if(route === '/portfolio'){
            title = 'My portfolio'
        } else if(route === '/comic'){
            title = 'Comic'
        }
    }
</script>

<header>
    <h1>{title}</h1>
</header>

<style>
    header {
        padding: 5px;
        background: mediumpurple;
        color: whitesmoke;
        text-align: center;
    }
</style>