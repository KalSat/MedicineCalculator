<!--
    Created by chengbiao on 17/6/19.
-->

<style scoped>
    .content {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;

        background-color: #66ccff;
    }
</style>

<template>
    <div class="page-root">
        <mu-appbar class="app-bar" title="Medicine Calculator">
            <mu-icon-button icon="menu" slot="left"></mu-icon-button>
            <mu-icon-button icon="more_vert" slot="right"></mu-icon-button>
        </mu-appbar>
        <div class="content">
            <template v-if="medicineList != null && medicineList.length > 0">
                <img id="img-logo" src="../assets/logo.png">
                <hello></hello>
            </template>
            <template v-else>
                <p>按“+”添加药材，按“√”计算总价</p>
            </template>
        </div>
        <div class="bottom-bar">
            <router-link to="/add-medicine">
                <mu-float-button icon="add" class="float-button"></mu-float-button>
            </router-link>
            <mu-float-button icon="done" class="float-button"></mu-float-button>
        </div>
    </div>
</template>

<script>
    import Hello from '../components/Hello'

    export default {
        name: 'home',
        components: {
            Hello
        },
        computed: {
            medicineList() {
                return this.$store.state.medicineList
            }
        },
        methods: {}
    }
</script>
