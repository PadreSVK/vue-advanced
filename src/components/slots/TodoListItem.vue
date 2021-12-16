<template>
    <div>
        <slot name="doneMark" v-if="done"> ✔ </slot>
        <slot name="ongoingMark" v-else> ❓ </slot>
        <slot v-bind:todoListItem="item">
            {{ item }}
        </slot>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
    done: {
        type: Boolean,
        required: true
    },
    item: {
        type: [Object, String],
        required: true
    }
})

</script>
