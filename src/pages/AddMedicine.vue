<template>
    <div id="page-root">
        <mu-appbar id="app-bar" title="Add Medicine">
            <mu-icon-button icon='arrow_back' slot="left" v-on:click="back"/>
            <mu-icon-button icon='send' slot="right"/>
        </mu-appbar>
        <div class="content">
            <img id="img-logo" src="../assets/logo.png">
        </div>
    </div>
</template>

<style>
    #app-bar {
        position: fixed;
    }

    .content {
        text-align: center;

        background-color: #66ccff;

        max-width: 74em;
        padding-top: 3.5em;
        margin-left: auto;
        margin-right: auto;
    }
</style>

<script>

    export default {
        name: 'app',
        components: {},
        methods: {
            back() {
                this.$router.back()
            }
        }
    }
</script>
