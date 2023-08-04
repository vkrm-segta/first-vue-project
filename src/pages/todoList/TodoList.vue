<template>
  <h1 class="text-3xl font-semibold mb-5">Todo List</h1>
  <di class="flex">
    <AddNewTodo @on-addTodo="addTodo($event)" />
  </di>
  <ul class="mt-5">
    <TodoItem
      v-for="(todo, index) in todos"
      :key="index"
      :todos="todos"
      :todoValue="todo?.todoValue"
      :complete="todo?.complete"
      @on-delete="deleteTodo(todo)"
      @on-toggle="toggelTodo(todo)"
      @on-edit="editTodo(todo, $event)"
    />
  </ul>
</template>

<script>
import TodoItem from './TodoItem';
import AddNewTodo from './AddNewTodo';

export default {
  components: {
    TodoItem,
    AddNewTodo,
  },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    addTodo(newTodo) {
      const id = Math.floor(Math.random() * 100) + 2;
      this.todos.push({
        id: `${id}`,
        todoValue: newTodo,
        complete: false,
      });
    },
    toggelTodo(todo) {
      todo.complete = !todo.complete;
    },
    editTodo(todo, newTodoValue) {
      todo.todoValue = newTodoValue;
    },
    deleteTodo(deleteTodo) {
      this.todos = this.todos.filter((todo) => todo !== deleteTodo);
    },
  },
};
</script>
