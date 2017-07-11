<template>
    <div class="page-root">
        <mu-appbar class="app-bar" title="Medicine Calculator">
            <mu-icon-button icon="menu" slot="left"></mu-icon-button>
            <mu-icon-button icon="more_vert" slot="right"></mu-icon-button>
        </mu-appbar>

        <div class="content">

            <template v-if="medicineList != null && medicineList.length > 0">

                <div v-for="(medicine, i) in medicineList" :key="medicine.name">
                    <mu-card class="medicine-list-item">
                        <p>{{ i + 1 }}. {{ medicine.name }}</p>
                        <p>{{ medicine.price.toFixed(2) }} 元/克</p>
                        <p>{{ medicine.count }} 克</p>
                    </mu-card>
                    <div class="medicine-list-divider" v-show="i < medicineList.length - 1"></div>
                </div>
                <mu-divider class="total-price-divider"></mu-divider>
                <div class="total-price-group">
                    <p>总价：</p>
                    <p>{{ totalPrice.toFixed(2) }} 元</p>
                </div>

            </template>
            <template v-else>

                <p>按“+”添加药材，按“√”计算总价</p>

            </template>

        </div>

        <div class="bottom-bar">
            <router-link to="/add-medicine">
                <mu-float-button icon="add" class="float-button"></mu-float-button>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
    p {
        display: inline;
    }

    .content {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
    }

    .medicine-list-item {
        display: flex;
        flex-direction: row;
        padding-left: 1em;
        padding-right: 1em;
        justify-content: space-between;
        align-items: center;
    }

    .medicine-list-divider {
        width: inherit;
        height: 0.25em;
    }

    .total-price-divider {
        margin-top: 1em;
    }

    .total-price-group {
        display: flex;
        flex-direction: row;
        padding-left: 1em;
        padding-right: 1em;
        justify-content: space-between;
        align-items: center;
    }
</style>

<script lang="ts" src="./Home.ts">
</script>
