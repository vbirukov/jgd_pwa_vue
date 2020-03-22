<template>
    <div>
        <router-link to="/surya" class="orange">
            <div class="m-b-md">
                <img src="@/assets/views/surya/asanas_yoga_printable.png" alt="surya" class="orange">
                <p>Surya Namaskar</p>
            </div>
        </router-link>
        <router-link to="/om" class="orange">
            <div class="m-b-md">
                <img src="@/assets/views/om/shiva_black.png" alt="om" class="orange">
                <p>Om Namah Shivaya</p>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'HomeMenu',
        data() {
            return {
                mainMenu: [
                    {
                        routerLink: "/talks",
                        name: "Talks",
                        caption: "Series of Talks by H.H. Sri Sri Ravi Shankar",
                        imgSource: "@/assets/views/om/shiva_black.png"
                    },
                    {
                        routerLink: "/meditations",
                        name: "Meditations",
                        caption: "A set of timers and counters for your personal mediations and a set of pre-recorded guided meditations",
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