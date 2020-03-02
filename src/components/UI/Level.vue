<template>
    <div id="level">
        <p>lvl: <span id="lvl_progress">0</span></p>
    </div>
</template>

<script>
    export default {
        name: 'Level',
    }
</script>

<style scoped>
    #level {
        position: absolute;
        right: 20px;
        bottom: 0;
        line-height: 0;
    }

    #om #level p, #surya #level p {
        font-size: 1.5rem;
    }
</style>
