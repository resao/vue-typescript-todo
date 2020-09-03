<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <div>
      <input
        v-model="todoText"
        type="text"
        @keyup.enter="addItem"
      >
      <button @click="addItem">
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
import { namespace } from 'vuex-class'
import { Todo } from '@/types'
import List from '@/components/todo/list/index.vue'

const todo = namespace('todos')

@Component({
  components: {
    List
  }
})

export default class Home extends Vue {
  @todo.State
  private todos!: Array<Todo>

  @todo.Action
  private add!: (text: string) => void

  @todo.Action
  private remove!: (todo: Todo) => void

  private addItem (): void {
    this.add(this.todoText)

    this.todoText = '' // Reset the text field
  }

  private todoText = ''
}
</script>
