<template>
    <div id="home" class="content">
        <MeditationsMenu />
        <UserLevel/>
    </div>
</template>

<script>
    import UserLevel from '@/components/UserInterface/UserLevel'
    import MeditationsMenu from "./MeditationsMenu";

    export default {
        name: 'MeditationsPage',
        components: {
            MeditationsMenu,
            UserLevel
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