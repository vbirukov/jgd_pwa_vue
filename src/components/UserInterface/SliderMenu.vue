<template>
    <v-layout class="content flex-column align-center fill-height">
        <v-carousel
                height="800"
                hide-delimiter-background>
            <v-carousel-item
                    class="d-flex justify-center align-center"
                    v-for="item in menuItems"
                    :key="item.name">
                <Cover
                        class="ma-auto"
                        :routerLink="item.routerLink"
                        :name="item.name"
                        :playTitle="playTitle"
                        :imgSrc="item.imgSrc"
                        :caption="item.caption"/>
            </v-carousel-item>
        </v-carousel>
    </v-layout>
</template>

<script>
    import Cover from "./Cover";

    export default {
        name: "ScrollMenu",
        props: ['menuItems', 'playTitle'],
        components: {Cover}
    }
</script>

<style scoped>

</style>