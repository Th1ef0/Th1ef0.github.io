<script>
    import mrBeast from '../../lib/images/mrbeast.png';
    import tim from '../../lib/images/tim.png';
    import bus from '../../lib/images/bus.jpg';
    import maslo from '../../lib/images/maslo.jpg';
    import smile from '../../lib/images/smile.png';
    import ainur from '../../lib/images/ainur.png';
</script>

<svelte:head>
    <title>Photos</title>
    <meta name="funny pics" content="collection of pictures"/>
</svelte:head>

<section>
    <div id="container">
        <img class="photos" src={mrBeast} alt="mrbeast">
        <img class="photos" src={tim} alt="tim">
        <img class="photos" src={bus} alt="bus">
        <img class="photos" src={maslo} alt="maslo">
        <img class="photos" src={smile} alt="smile">
        <img class="photos" src={ainur} alt="ainur">
    </div>
</section>

<style>
    img {
        width: 450px;
        height: 300px;
        margin: 10px;
        border: 3px solid #9802ff;
        border-radius: 10px;
        transition-duration: 1s;
    }

    img:hover {
        border: 1px solid #9802ff;
        transform: scale(1.05);
    }

    #container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    section {
        min-height: 100vh;
        display: -webkit-flex;
        display: flex;
        flex-direction: column;
        padding-bottom: 100px;
    }
</style>
