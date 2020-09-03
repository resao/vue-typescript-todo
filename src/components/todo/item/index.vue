<template>
  <div class="todo">
    <div>
      {{ todo.text }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Todo } from '@/types'

@Component
export default class Item extends Vue {
  @Prop({ required: true }) todo!: Todo
}
</script>
