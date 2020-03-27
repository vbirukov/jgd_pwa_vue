<template>
    <v-sheet
            color="orange"
            elevastion="10"
            width="100%"
            :tile=true
            height="100%"
            class="menuPlate pt-5">
        <router-link :to="routerLink" class="orange d-flex justify-center align-center flex-column">
            <h2 class="display-2 white--text">{{name}}</h2>
            <v-subheader v-if="caption" class="font-weight-light color-indigo color-lighten-5">{{caption}}</v-subheader>
            <v-img
                    :src=imgSrc
                    width="250px"
                    height="500px"
                    class="Cover-Background ma-auto"/>
        </router-link>
    </v-sheet>
</template>

<script>

    export default {
        props: ['name', 'caption', 'routerLink', 'imgSrc'],
        name: "Cover"
    }
</script>

<style scoped>
    .Cover {
        width: 100%;
        box-shadow: 2px 2px 5px #636b6f;
        padding: 10px 20px;
        margin-bottom: 20px;
        max-width: 300px;
    }
    .Cover-Background {
        top: 0;
        left: 0;
        position: absolute;
        object-fit: cover;
        filter: alpha(30);
    }
</style>