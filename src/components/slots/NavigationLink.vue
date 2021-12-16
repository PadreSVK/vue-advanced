<template>
    <div class="bordered">
        <a v-bind:href="url" class="nav-link">
            <slot v-bind:href="url">
                <img
                    src="https://i.imgflip.com/5y4sly.jpg"
                    alt="cat"
                    width="200"
                />
            </slot>
        </a>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
    url: {
        type: String,
        required: true
    },

})
</script>

<style  scoped>
div.bordered {
    border-style: solid;
}
</style>