<template>
    <div class="menuPlate">
        <h2>{{name}}</h2>
        <p v-if="caption">{{caption}}</p>
    </div>
</template>

<script>
    export default {
        props: ['name', 'caption'],
        name: "MenuPlate"
    }
</script>

<style scoped>
    .menuPlate {
        width: 80%;
        box-shadow: 2px 2px 5px #636b6f;
        padding: 10px 20px;
        margin-bottom: 20px;
        max-width: 300px;
    }
    .menuPlate-Background {
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: cover;
        filter: alpha(30);
    }
</style>