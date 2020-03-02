<template>
    <div class="content" id="surya">
        <div class="m-b-md">
            <p>Surya Namaskar</p>
        </div>
        <div class="m-b-md">
            <img src="../assets/views/surya/asanas_yoga_printable.png" alt="surya" class="orange" id="image">
        </div>
        <div class="m-b-md">
            <div id="counter">0</div>
        </div>
        <Level/>
        <GoHome/>
    </div>
</template>

<script>
    import GoHome from "../components/UI/GoHome";
    import Level from "../components/UI/Level";

    export default {
        name: 'Surya',
        components: {
            GoHome,
            Level
        }
    }
</script>

<style scoped>
    img {
        width: 216px;
    }

    p {
        font-size: 1.5rem;
    }

    #counter {
        color: #FF6B01;
        line-height: 80px;
        font-size: 80px;
    }
</style>
