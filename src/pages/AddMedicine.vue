<!--
    Created by chengbiao on 17/6/28.
-->

<style>

</style>

<template>
    <div class="page-root">
        <mu-appbar class="app-bar" title="Add Medicine">
            <mu-icon-button icon='arrow_back' slot="left" v-on:click="back"/>
            <mu-icon-button icon='send' slot="right" v-on:click="commit"/>
        </mu-appbar>
        <div class="content">
            <img id="img-logo" src="../assets/logo.png">
        </div>
    </div>
</template>

<script>
    import {ADD_MEDICINE} from '../main'

    export default {
        name: 'add-medicine',
        components: {},
        methods: {
            back() {
                this.$router.back()
            },
            commit() {
                let medicine;
                // TODO add params
                this.$store.commit(ADD_MEDICINE, medicine);
            },
        },
    }
</script>
