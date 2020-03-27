<template>
    <div class="scroll-menu d-flex justify-start align-center flex-column">
        <MenuPlate
                :key="item.name"
                v-for="item in items"
                :caption="item.caption"
                :name="item.name"
                :routerLink="item.routerLink" />
    </div>
</template>

<script>
    import MenuPlate from "./MenuPlate";

    export default {
        name: "ScrollMenu",
        props: ['items'],
        components: {MenuPlate}
    }
</script>

<style scoped>

</style>