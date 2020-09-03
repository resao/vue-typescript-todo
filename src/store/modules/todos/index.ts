import { VuexModule, Module, Action, Mutation } from 'vuex-module-decorators'
import { Todo } from '@/types'

@Module({ namespaced: true })
class Todos extends VuexModule {
  private todos: Array<Todo> = [{
    text: 'Dishes'
  }, {
    text: 'Washing'
  }]

  @Action({ commit: 'addItem' })
  public add (text: string): Todo {
    return { text } as Todo
  }

  @Action({ commit: 'removeItem' })
  public remove (todo: Todo): Todo {
    return todo
  }

  @Mutation
  private addItem (todo: Todo): void {
    this.todos.push(todo)
  }

  @Mutation
  private removeItem (todo: Todo): void {
    this.todos = this.todos.filter((todoItem) => todoItem !== todo)
  }
}

export default Todos
