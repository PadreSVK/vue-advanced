<template>
    <component :is="layout">
        <slot />
    </component>
</template>


<script setup>
import { computed } from '@vue/reactivity'
import { defineAsyncComponent } from 'vue'
import { Layout } from "@/layouts";
import { useRoute } from 'vue-router';

// static import
// import Authenticated from "@/layouts/Authenticated.vue";
// import NotAuthenticated from "@/layouts/NotAuthenticated.vue";

// dynamic way
const Authenticated = defineAsyncComponent(() => import("@/layouts/Authenticated.vue"))
const NotAuthenticated = defineAsyncComponent(() => import("@/layouts/NotAuthenticated.vue"))

const route = useRoute()

const layout = computed(() => {
    const layout = route.meta.layout || Layout.Authenticated
    switch (layout) {
        case Layout.Authenticated:
            return Authenticated
        case Layout.NotAuthenticated:
            return NotAuthenticated
        default:
            return NotAuthenticated
    }
})

</script>
