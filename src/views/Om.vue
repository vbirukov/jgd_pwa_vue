<template>
    <div class="home">
        <img alt="Om" src="../assets/views/om/shiva_black.png">
        <Level/>
        <GoHome/>
    </div>
</template>

<script>

    import GoHome from "../components/UI/GoHome";
    import Level from "../components/UI/Level";

    export default {
        name: 'Om',
        components: {
            GoHome,
            Level
        }
    }
</script>
