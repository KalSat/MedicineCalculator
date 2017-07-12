<template>
    <div class="page-root">
        <header>
            <mu-appbar title="Add Medicine">
                <mu-icon-button icon="arrow_back" slot="left" @click="back"></mu-icon-button>
                <mu-icon-button icon="send" slot="right" @click="commit"></mu-icon-button>
            </mu-appbar>
        </header>

        <div class="content">
            <form class="add-medicine-form">
                <mu-auto-complete label="名称" labelFloat @input="handleInput" :dataSource="dataSource"
                                  @change="handleChange" v-model.trim="name"></mu-auto-complete>
                <mu-text-field label="数量" labelFloat type="number" v-model.number="count"></mu-text-field>
                <mu-text-field label="价格" labelFloat type="number" v-model.number="price"></mu-text-field>
            </form>
        </div>
    </div>
</template>

<style scoped>
    .add-medicine-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>

<script lang="ts" src="./AddMedicine.ts">
</script>
