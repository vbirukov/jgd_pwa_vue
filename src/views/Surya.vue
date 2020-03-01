<template>
    <div class="home">
        <img alt="Surya" src="../assets/views/surya/asanas_yoga_printable.png">
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
