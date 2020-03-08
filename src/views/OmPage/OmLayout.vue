<template>
    <div id="om-layout" class="content">
        <OmGame/>
        <GoHome/>
    </div>
</template>

<script>
    import OmGame from "./OmGame"
    import GoHome from "@/components/UserInterface/GoHome"

    export default {
        name: 'OmPage',
        components: {
            OmGame,
            GoHome
        }
    }
</script>
