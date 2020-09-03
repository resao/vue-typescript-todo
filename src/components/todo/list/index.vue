<template>
  <div class="todos">
    <Item
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Todo } from '@/types'
import Item from '@/components/todo/item/index.vue'

@Component({
  components: {
    Item
  }
})

export default class Todos extends Vue {
  @Prop({ required: true }) todos!: Array<Todo>
}
</script>
