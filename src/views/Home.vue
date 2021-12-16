<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import NavigationLink from '@/components/slots/NavigationLink.vue'
import TodoListItem from '@/components/slots/TodoListItem.vue'

export default {
    name: 'Home',
    components: {
        HelloWorld,
        NavigationLink,
        TodoListItem
    }
}
</script>
