<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <div>
      <input
        v-model="todo"
        type="text"
        @keyup.enter="add"
      >
      <button @click="add">
        Add
      </button>
    </div>
    <List
      :todos="todos"
      @remove="remove"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Todo } from '@/types'
import List from '@/components/todo/list/index.vue'

@Component({
  components: {
    List
  }
})

export default class Home extends Vue {
  private add (): void {
    const todo = {
      text: this.todo
    } as Todo

    this.todos.push(todo)

    this.todo = ''
  }

  private remove (todo: Todo): void {
    this.todos = this.todos.filter((todoItem) => todoItem !== todo)
  }

  private todo = ''

  private todos: Array<Todo> = [{
    text: 'Dishes'
  }, {
    text: 'Washing'
  }]
}
</script>
