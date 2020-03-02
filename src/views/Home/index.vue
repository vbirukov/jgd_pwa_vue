<template>
    <div id="home" class="content">
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

<style>
    .content {
        text-align: center;
    }

    #home .orange {
        background-color: #FF6B01;
    }

    #home a {
        cursor: pointer;
    }

    #home p {
        font-size: 1rem;
    }
</style>