<template>
    <SliderMenu
        :menuItems="meditationsMenu"/>
</template>

<script>
    import SliderMenu from "../../components/UserInterface/SliderMenu";

    export default {
        name: 'MeditationsMenu',
        components: {SliderMenu},
        data () {
            return {
                meditationsMenu: [
                    {
                        routerLink: "/surya",
                        name: "Surya Namaskar",
                        caption: "Counter for Sun Slautation practice",
                        imgSource: "@/assets/views/surya/asanas_yoga_printable.png"
                    },
                    {
                        routerLink: "/om",
                        name: "Om Namah Shivaya Chanting",
                        caption: "A counting for slow chanting pranayam",
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