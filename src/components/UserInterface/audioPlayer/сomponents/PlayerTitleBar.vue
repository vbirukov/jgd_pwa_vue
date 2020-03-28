<template>
    <v-system-bar window>
        <v-menu offset-y transition="slide-y-transition" v-slot:activator="{ on }">
            <v-btn text small right v-on="on">
                <v-icon>mdi-headphones</v-icon> MENU
            </v-btn>
            <v-list>
                <v-list-item @click="dialog = true">
                    <v-list-item-title>About</v-list-item-title>
                </v-list-item>
                <v-dialog v-model="dialog" max-width="300">
                    <v-card>
                        <v-card-title><h2>Vue Music Player</h2></v-card-title>
                        <v-card-text>Version 1.0.0</v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn text @click="dialog = false">OK</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-list>
        </v-menu>
        <v-spacer></v-spacer>
        VUE MUSIC PLAYER
        <v-spacer></v-spacer>
        <v-icon>mdi-minus</v-icon>
        <v-icon>mdi-checkbox-blank-outline</v-icon>
        <v-icon>mdi-close</v-icon>
    </v-system-bar>
</template>

<script>
    export default {
        data () {
            return {
                dialog: false
            }
        },
    }
</script>