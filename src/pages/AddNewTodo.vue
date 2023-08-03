<template>
  <form class="w-full" @submit.prevent="addTodo()">
    <input
      v-model="newTodoValue"
      class="w-[30%] bg-[#dedede] pl-4 pr-14 py-2 outline-none"
      type="text"
      placeholder="Type here..."
    />
    <button class="bg-blue-300 py-2 px-2">Add</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newTodoValue: '',
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoValue.length > 1) {
        this.$emit('on-addTodo', this.newTodoValue);
      }
      this.newTodoValue = '';
    },
  },
};
</script>
