<template>
    <v-layout id="meditations" class="content">
        <MeditationsMenu />
    </v-layout>
</template>

<script>
    import MeditationsMenu from "./MeditationsMenu";


    export default {
        name: 'MeditationsPage',
        components: {
            MeditationsMenu,
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