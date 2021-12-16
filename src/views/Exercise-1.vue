<template>
    <div class="home">
        <TodoListItem item="false hodnota" :done="false" />
        <TodoListItem item="true hodnota" :done="true" />
        <TodoListItem
            :item="{ title: 'toto je title', desciption: 'description asdasd' }"
            :done="false"
            v-slot="{ todoListItem }"
        >
            {{ todoListItem.title }}
        </TodoListItem>

        <TodoListItem
            :item="{ title: 'toto je title', desciption: 'description asdasd' }"
            :done="true"
        >
            <template v-slot="{ todoListItem }">
                {{ todoListItem.title }}
            </template>

            <template #doneMark> 💹 </template>
        </TodoListItem>
        <TodoListItem item="test" :done="false" />
    </div>
</template>

<script>
import TodoListItem from '@/components/slots/TodoListItem.vue'

export default {
    name: 'Exercise-Slots',
    components: {
        TodoListItem
    }
}
</script>
