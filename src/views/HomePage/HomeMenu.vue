<template>
    <div class="menu-root">
        <ScrollMenu
            :items="mainMenu"/>
    </div>
</template>

<script>
    import ScrollMenu from "../../components/UserInterface/ScrollMenu";

    export default {
        name: 'HomeMenu',
        components: {ScrollMenu},
        data() {
            return {
                mainMenu: [
                    {
                        routerLink: "/learn",
                        name: "Learn",
                        caption: "Series of Talks by H.H. Sri Sri Ravi Shankar",
                        imgSource: "@/assets/views/om/shiva_black.png"
                    },
                    {
                        routerLink: "/practice",
                        name: "Practice",
                        caption: "A set of instruments for your personal practice and a set of pre-recorded guided meditations",
                        imgSource: "@/assets/views/om/shiva_black.png"
                    }
                ]
            }
        }
    }
</script>
<style scoped>
    img {
        width: 90px;
    }

    a {
        text-decoration: none;
    }
</style>