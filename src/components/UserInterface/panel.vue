<template>
    <div id="panel" class="content fill-height">
        <slot></slot>
    </div>
</template>

<script>

    export default {
        name: 'panel',
    }
</script>

<style scoped>
    .content {
        width: 100%;
    }
</style>