<template>
    <div>
        <TodoListItem
            v-for="item in items"
            :key="item"
            :done="item.done"
            :item="item"
        >
            <template #doneMark>
                <slot name="todoListDoneMark">💹</slot>
            </template>
            <template #ongoingMark>
                <slot name="todoListOngoingMark">❔</slot>
            </template>

            <template #default="{ todolistitem }">
                <slot name="default" v-bind:data="todolistitem">
                    {{ todolistitem.data.title }}
                </slot>
            </template>
        </TodoListItem>
    </div>
</template>

<script setup>
import TodoListItem from "./TodoListItem.vue";

import { defineProps } from "vue";

defineProps({
    items: {
        type: Array,
        required: true
    }
})
</script>

<style>
</style>