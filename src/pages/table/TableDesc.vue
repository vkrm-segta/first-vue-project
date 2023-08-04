<template>
  <div class="flex items-start w-full border border-t-0 text-lg py-4 px-4">
    <div class="flex flex-col w-[26%] ml-[3%]">
      <h1 class="flex font-medium">
        Name:
        <span v-if="!edit" class="font-normal ml-2">{{ data?.name }}</span>
        <input
          v-else
          v-model="newData.name"
          type="text"
          class="font-normal ml-2 border border-black px-2 outline-none"
        />
      </h1>
      <h1 class="flex items-center font-medium">
        Topic:
        <span v-if="!edit" class="font-normal ml-2">{{ data?.topic }}</span>
        <input
          v-else
          v-model="newData.topic"
          type="text"
          class="font-normal ml-2 border border-black px-2 mt-1 outline-none"
        />
      </h1>
      <h1 class="flex items-center font-medium">
        Category:
        <span v-if="!edit" class="font-normal ml-2">{{ data?.category }}</span>
        <input
          v-else
          v-model="newData.category"
          type="text"
          class="font-normal ml-2 border border-black px-2 mt-1 outline-none"
        />
      </h1>
    </div>
    <div class="flex flex-col w-[40%] ml-5">
      <h1 class="flex items-center font-medium">
        Date:
        <span v-if="!edit" class="font-normal ml-2">{{ data?.date }}</span>
        <input
          v-else
          v-model="newData.date"
          type="text"
          class="font-normal ml-2 border border-black px-2 outline-none"
        />
      </h1>
      <h1 class="flex items-center font-medium">
        Status:
        <span v-if="!edit" class="font-normal ml-2">{{ data?.status }}</span>
        <input
          v-else
          v-model="newData.status"
          type="text"
          class="font-normal ml-2 border border-black px-2 mt-1 outline-none"
        />
      </h1>
    </div>

    <div class="ml-auto mt-auto">
      <button
        @click="editList()"
        class="border-2 border-gray-600 font-medium text-gray-600 px-4"
      >
        {{ edit ? 'Save' : 'Edit' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
  data() {
    return {
      edit: false,
      newData: {
        id: '',
        name: '',
        topic: '',
        category: '',
        date: '',
        status: '',
        description: false,
      },
    };
  },
  watch: {
    data: {
      handler(newVal) {
        this.newData = { ...newVal };
      },
      immediate: true,
    },
  },
  methods: {
    editList() {
      if (this.edit) {
        this.newData = { ...this.data };
      }
      this.edit = !this.edit;
    },
  },
};
</script>
