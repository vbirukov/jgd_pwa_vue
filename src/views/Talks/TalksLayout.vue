<template>
    <div>
        <TalksMenu/>
    </div>
</template>

<script>
    import TalksMenu from "./TalksMenu";

    export default {
        name: 'TalksPage',
        components: {
            TalksMenu
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