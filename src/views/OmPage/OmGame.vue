<template>
    <div class="content" id="om-game" @click="iterate">
        <div>
            <div class="m-b-md">
                <p>Om Namah Shivaya</p>
            </div>
            <div class="m-b-md">
                <img src="@/assets/views/om/shiva_black.png"
                     :alt="game_name"
                     :style="{background: gradient}"
                     class="orange">
            </div>
            <div class="m-b-md">
                <div id="counter" v-text="counter"></div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'OmGame',
        data() {
            const game_name = 'om'
            return {
                game_is_over: false,
                game_length: process.env.VUE_APP_GAME_LENGTH,
                game_name: game_name,
                counter: localStorage.getItem(game_name + '_turn') ? localStorage.getItem(game_name + '_turn') : 0,
            }
        },
        computed: {
            gradient: function () {
                let before = 100 - (this.counter / this.game_length * 100)
                const delta = 2
                return "linear-gradient(#FF6B01 " + (before - delta) + "%, #ffffff " + (before + delta) + "%)";

            }
        },
        methods: {
            iterate: function () {
                if (!this.game_is_over) {
                    localStorage.setItem(this.game_name + '_turn', String(++(this.counter)))
                    if (this.counter >= this.game_length) {
                        this.game_is_over = true
                        this.$store.commit('levelUp')
                        localStorage.setItem(this.game_name + '_turn', String(0))
                        setTimeout(() => {
                            this.counter = 0;
                            this.game_is_over = false
                        }, 2000)
                    }
                }
            }
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
