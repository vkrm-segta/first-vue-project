<template>
  <div class="flex items-start w-full border border-t-0 text-lg py-4 px-4">
    <div class="flex flex-col w-[26%] ml-[3%]">
      <div class="flex">
        <div class="w-20 font-medium mr-2">
          <h1 class="flex">Name:</h1>
          <h1 class="flex" :class="edit ? 'mt-1.5' : 'mt-0'">Topic:</h1>
          <h1 class="flex" :class="edit ? 'mt-1.5' : 'mt-0'">Category:</h1>
        </div>
        <div>
          <div class="flex">
            <span v-if="!edit" class="font-normal">{{ data?.name }}</span>
            <input
              v-else
              v-model="newData.name"
              type="text"
              class="font-normal border border-black px-2 outline-none"
            />
          </div>
          <div class="flex">
            <span v-if="!edit" class="font-normal">{{ data?.topic }}</span>
            <input
              v-else
              v-model="newData.topic"
              type="text"
              class="font-normal border border-black px-2 mt-1 outline-none"
            />
          </div>
          <div class="flex">
            <span v-if="!edit" class="font-normal">{{ data?.category }}</span>
            <input
              v-else
              v-model="newData.category"
              type="text"
              class="font-normal border border-black px-2 mt-1 outline-none"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="w-[40%] ml-5">
      <div class="flex">
        <div class="w-10 font-medium mr-4">
          <h1 class="flex">Date:</h1>
          <h1 class="flex" :class="edit ? 'mt-1.5' : 'mt-0'">Status:</h1>
        </div>
        <div>
          <div class="flex">
            <span v-if="!edit" class="font-normal ml-2">{{ data?.date }}</span>
            <input
              v-else
              v-model="newData.date"
              type="text"
              class="font-normal border border-black px-2 ml-2 outline-none"
            />
          </div>
          <div class="flex">
            <span v-if="!edit" class="font-normal ml-2">{{
              data?.status
            }}</span>
            <input
              v-else
              v-model="newData.status"
              type="text"
              class="font-normal border border-black px-2 mt-1 ml-2 outline-none"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="flex ml-auto mt-auto">
      <button
        v-if="edit"
        @click="cancelEditList()"
        class="border-2 border-gray-600 font-medium text-gray-600 px-4"
      >
        Cancel
      </button>
      <button
        @click="editList()"
        class="border-2 border-gray-600 font-medium text-gray-600 px-4 ml-2"
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
        this.$emit('update-data', { ...this.newData });
      }
      this.edit = !this.edit;
    },
    cancelEditList() {
      this.edit = !this.edit;
    },
  },
};
</script>
