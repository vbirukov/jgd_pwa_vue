<template>
    <div id="level">
        <p>lvl: <span v-text="value"></span></p>
    </div>
</template>

<script>
    export default {
        name: 'Level',
        computed: {
            value() {
                return this.$store.state.level
            }
        }
    }
</script>

<style scoped>
    #level {
        position: absolute;
        right: 20px;
        bottom: 0;
        line-height: 0;
    }

    #om-game #level p, #surya-game #level p {
        font-size: 1.5rem;
    }
</style>
