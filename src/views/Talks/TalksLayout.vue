<template>
    <div id="home" class="content">
        <HomeMenu/>
        <UserLevel/>
    </div>
</template>

<script>
    import HomeMenu from "../HomePage/HomeMenu";
    import UserLevel from '@/components/UserInterface/UserLevel'

    export default {
        name: 'HomePage',
        components: {
            HomeMenu,
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