<template>
    <div id="page-root">
        <mu-appbar id="app-bar" title="Medicine Calculator">
            <mu-icon-button icon='menu' slot="left"/>
            <mu-icon-button icon="search" slot="right"/>
        </mu-appbar>
        <div class="content">
            <img id="img-logo" src="../assets/logo.png">
            <hello></hello>
        </div>
        <div id="bottom-bar">
            <mu-float-button icon="add" class="float-button"/>
            <mu-float-button icon="done" class="float-button"/>
        </div>
    </div>
</template>

<style>
    #app-bar {
        position: fixed;
    }

    .content {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;

        background-color: #66ccff;

        max-width: 74em;
        padding-top: 3.5em;
        margin-left: auto;
        margin-right: auto;
    }

    #bottom-bar {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        margin: auto;
        max-width: 64em;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .float-button {
        bottom: 1.5em;
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
