<template>
    <div id="om-layout" class="content">
        <SuryaGame/>
        <GoHome/>
    </div>
</template>

<script>
    import SuryaGame from "./SuryaGame"
    import GoHome from "@/components/UserInterface/GoHome"

    export default {
        name: 'SuryaPage',
        components: {
            SuryaGame,
            GoHome
        }
    }
</script>
