<template>
    <div id="page-root">
        <mu-appbar id="app-bar" title="Douban Movie">
            <mu-icon-button icon='menu' slot="left"/>
            <mu-icon-button icon="search" slot="right"/>
        </mu-appbar>
        <div class="content">
            <img id="img-logo" src="../assets/logo.png">
            <hello></hello>
        </div>
    </div>
</template>

<style>
    #app-bar {
        position: fixed;
    }

    .content {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        padding-top: 56px;
    }
</style>

<script>
    import Hello from '../components/Hello'

    export default {
        name: 'app',
        components: {
            Hello
        }
    }
</script>
