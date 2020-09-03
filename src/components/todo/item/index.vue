<template>
  <div class="todo">
    <div>
      {{ todo.text }}
      <button @click="remove">
        X
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
import { Todo } from '@/types'

@Component
export default class Item extends Vue {
  @Prop({ required: true }) todo!: Todo

  @Emit()
  private remove () {
    return this.todo
  }
}
</script>
