<template>
    <div id="app">
        <div class="fixed-bar">
            <mu-appbar title="Douban Movie">
                <mu-icon-button icon='menu' slot="left"/>
                <mu-icon-menu icon="more_vert" slot="right">
                    <mu-menu-item title="About"/>
                </mu-icon-menu>
            </mu-appbar>
        </div>
        <div class="view">
            <img src="../assets/logo.png">
            <hello></hello>
        </div>
    </div>
</template>

<script>
    import Hello from '../components/Hello'

    export default {
        name: 'app',
        components: {
            Hello
        }
    }
</script>

<style>
    .view {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
