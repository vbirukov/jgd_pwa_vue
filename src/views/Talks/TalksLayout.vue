<template>
    <panel>
        <TalksMenu/>
    </panel>
</template>

<script>
    import TalksMenu from "./TalksMenu";
    import panel from "../../components/UserInterface/panel"

    export default {
        name: 'TalksPage',
        components: {
            TalksMenu,
            panel
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