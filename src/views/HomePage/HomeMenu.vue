<template>
    <div class="menu-root">
        <ScrollMenu
            :items="mainMenu"/>
        <v-btn
                v-on:click="test"> TEST </v-btn>
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
                    },
                    {
                        routerLink: "/practice",
                        name: "Practice",
                        caption: "A set of instruments for your personal practice and a set of pre-recorded guided meditations",
                    }
                ]
            }
        },
        methods: {
            test: function() {
                console.log('it works');
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