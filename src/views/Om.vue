<template>
    <div class="content" id="om">
        <div class="m-b-md">
            <p>Om Namah Shivaya</p>
        </div>
        <div class="m-b-md">
            <img src="../assets/views/om/shiva_black.png" alt="om" class="orange" id="image">
        </div>
        <div class="m-b-md">
            <div id="counter">0</div>
        </div>
        <Level/>
        <GoHome/>
    </div>
</template>

<script>
    import GoHome from "../components/UI/GoHome";
    import Level from "../components/UI/Level";

    export default {
        name: 'Om',
        components: {
            GoHome,
            Level
        }
    }
</script>
<style scoped>
    img {
        width: 216px;
    }

    p {
        font-size: 1.5rem;
    }

    #counter {
        color: #FF6B01;
        line-height: 80px;
        font-size: 80px;
    }
</style>
