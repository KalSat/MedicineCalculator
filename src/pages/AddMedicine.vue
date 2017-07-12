<template>
    <div class="page-root">
        <header>
            <mu-appbar title="Add Medicine">
                <mu-icon-button icon="arrow_back" slot="left" @click="back"></mu-icon-button>
                <mu-icon-button icon="send" slot="right" @click="commit"></mu-icon-button>
            </mu-appbar>
        </header>

        <div class="content">
            <form class="form">
                <mu-auto-complete label="名称" labelFloat @input="handleInput" :dataSource="medicineNameList"
                                  @change="handleChange" v-model.trim="name"></mu-auto-complete>
                <div class="form-item">
                    <mu-text-field label="价格" labelFloat disabled type="number" v-model.number="price"></mu-text-field>
                    <p class="form-item-unit">元/10克</p>
                </div>
                <div class="form-item">
                    <mu-text-field label="数量" labelFloat type="number" v-model.number="count"></mu-text-field>
                    <p class="form-item-unit">克</p>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
    .content {
        text-align: center;
    }

    .form {
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    .form-item {
        display: flex;
        flex-direction: row;
        align-items: baseline;
    }

    .form-item-unit {
        margin-left: 0.75em;
        font-size: 16px;
    }
</style>

<script lang="ts" src="./AddMedicine.ts">
</script>
