<template>
    <div>
        <SliderMenu
                :menuItems="talksMenu"/>
    </div>

</template>

<script>
    import SliderMenu from "../../components/UserInterface/SliderMenu";

    export default {
        name: 'TalksMenu',
        components: {SliderMenu},
        data () {
            return {
                publicPath: process.env.BASE_URL,
                talksMenu: [
                    {
                        routerLink: "/talks/ashtavakra",
                        name: "Ashtavakra Gita",
                        caption: "Series of Talks by H.H. Sri Sri Ravi Shankar",
                        imgSrc: `/img/covers/ashtavakra.jpg`
                    },
                    {
                        routerLink: "/talks/patanjali",
                        name: "Patanjali Yoga Sutras",
                        caption: "A set of instruments for your personal practice and a set of pre-recorded guided meditations",
                        imgSrc: "img/covers/patanjali.jpg"
                    }
                ]
            }
        }
    }
</script>
<style scoped>
    a {
        text-decoration: none;
    }
</style>