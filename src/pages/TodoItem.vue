<template>
  <div class="flex justify-center py-2">
    <div class="flex py-2 px-2" :class="complete ? 'bg-blue-200' : 'bg-blue-300'">
      <button
        v-if="!isEditing"
        :class="complete && 'line-through opacity-60'"
        class="mr-2 px-2"
        @click="$emit('on-toggle')"
      >
        {{ todoValue }}
      </button>
      <form v-else @submit.prevent="endEdit()" class="mr-2">
        <input @blur="startEdit()" v-model="newTodoValue" class="outline-none" type="text" />
      </form>
      <div class="flex font-semibold">
        <button v-if="!complete" @click="startEdit()" class="border-2 border-white text-white px-2">Edit</button>
        <button @click="$emit('on-delete')" class="border-2 border-red-500 text-red-500 px-2 ml-3">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todoValue: String,
    complete: Boolean,
  },
  data() {
    return {
      isEditing: false,
      newTodoValue: '',
    };
  },

  methods: {
    startEdit() {
      if (!this.isEditing) {
        this.newTodoValue = this.todoValue;
        this.isEditing = true;
      } else {
        this.endEdit();
      }
    },
    endEdit() {
      this.isEditing = false;
      this.$emit('on-edit', this.newTodoValue);
    },
  },
};
</script>
