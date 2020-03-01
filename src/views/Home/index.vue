<template>
    <div class="home">
        <Menu/>
        <Level/>
    </div>
</template>

<script>

    import Level from '../../components/UI/Level.vue'
    import Menu from "./menu";

    export default {
        name: 'Home',
        components: {
            Menu,
            Level
        }
    }
</script>