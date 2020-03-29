<template>
    <div>
        <SliderMenu
                onclick="launchPlayer(0)"
                :v-if="!playerOn"
                :play-title="playTitle"
                :menuItems="talksMenu"/>
        <Player
                v-if="playerOn" />
    </div>

</template>

<script>
    import SliderMenu from "../../components/UserInterface/SliderMenu";
    import Player from "../../components/UserInterface/audioPlayer/Player";

    export default {
        name: 'TalksMenu',
        components: {SliderMenu, Player},
        data () {
            return {
                playerOn: false,
                talksMenu: [
                    {
                        routerLink: "/talks/ashtavakra",
                        name: "Ashtavakra Gita",
                        caption: "Series of Talks by H.H. Sri Sri Ravi Shankar",
                        imgSrc: `/img/covers/ashtavakra.jpg`,
                        playlist: [
                            {title: "Streets of Sant'Ivo", artist: "Ask Again", howl: null, display: true},
                            {title: "Remember the Way", artist: "Ask Again", howl: null, display: true},
                            {title: "Guardians", artist: "Ask Again", howl: null, display: true},
                            {title: "Crusade of The Castellan", artist: "Ask Again", howl: null, display: true},
                            {title: "Land of a Folk Divided", artist: "Ask Again", howl: null, display: true},
                            {title: "An Innocent Sword", artist: "Ask Again", howl: null, display: true}
                        ]
                    },
                    {
                        routerLink: "/talks/patanjali",
                        name: "Patanjali Yoga Sutras",
                        caption: "A set of instruments for your personal practice and a set of pre-recorded guided meditations",
                        imgSrc: "img/covers/patanjali.jpg",
                        playlist: [
                            {title: "Streets of Sant'Ivo", artist: "Ask Again", howl: null, display: true},
                            {title: "Remember the Way", artist: "Ask Again", howl: null, display: true},
                            {title: "Guardians", artist: "Ask Again", howl: null, display: true},
                            {title: "Crusade of The Castellan", artist: "Ask Again", howl: null, display: true},
                            {title: "Land of a Folk Divided", artist: "Ask Again", howl: null, display: true},
                            {title: "An Innocent Sword", artist: "Ask Again", howl: null, display: true}
                        ],
                    }
                ]
            }
        },
        methods: {
            launchPlayer: function(index) {
                this.talksMenu[index];
            },
            playTitle() {
                this.$emit('play');
            }
        }
    }
</script>
<style scoped>
    a {
        text-decoration: none;
    }
</style>