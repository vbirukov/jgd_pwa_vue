<template>
    <div id="go-home">
        <router-link to="/">
            <img id="back" alt="go home" src="../../assets/components/go_home/om-symbol-orange.png">
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'GoHome',
    }
</script>

<style scoped>
    #back {
        width: 50px;
        position: absolute;
        bottom: 20px;
        left: 20px;
    }
</style>
