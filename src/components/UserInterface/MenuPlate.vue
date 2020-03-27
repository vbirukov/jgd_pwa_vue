<template>
    <div class="menuPlate">
        <router-link :to="routerLink" class="orange">
            <h2 class="display-2 orange--text">{{name}}</h2>
            <v-subheader v-if="caption" class="font-weight-light color-indigo color-lighten-5">{{caption}}</v-subheader>
        </router-link>
    </div>
</template>

<script>
    export default {
        props: ['name', 'caption', 'routerLink'],
        name: "MenuPlate"
    }
</script>

<style scoped>
    .menuPlate {
        width: 100%;
        box-shadow: 2px 2px 5px #636b6f;
        padding: 10px 20px;
        margin-top: 20px;
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