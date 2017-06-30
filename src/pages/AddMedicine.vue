<!--
    Created by chengbiao on 17/6/28.
-->

<style>
    .add-medicine-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>

<template>
    <div class="page-root">
        <mu-appbar class="app-bar" title="Add Medicine">
            <mu-icon-button icon='arrow_back' slot="left" v-on:click="back"/>
            <mu-icon-button icon='send' slot="right" v-on:click="commit"/>
        </mu-appbar>
        <div class="content">
            <form class="add-medicine-form">
                <mu-auto-complete label="名称" labelFloat v-on:input="handleInput" v-bind:dataSource="dataSource"
                                  v-on:change="handleChange"/>
                <mu-text-field label="数量" labelFloat type="number" v-model="count"/>
                <mu-text-field label="价格" labelFloat type="number" v-model="price"/>
            </form>
        </div>
    </div>
</template>

<script>
    import {ADD_MEDICINE} from '../main'

    export default {
        name: 'add-medicine',
        components: {},
        data() {
            return {
                dataSource: [],
                name: '',
                count: null,
                price: null,
            }
        },
        methods: {
            back() {
                this.$router.back()
            },
            commit() {
                let medicine;
                medicine.name = this.name;
                medicine.count = this.count;
                medicine.price = this.price;
                this.$store.commit(ADD_MEDICINE, medicine);
            },
            handleInput(val) {
                this.dataSource = [
                    val,
                    val + val,
                    val + val + val
                ]
            },
            handleChange(val) {
                console.log(`you choose ${val}`)
            },
        },
    }
</script>
