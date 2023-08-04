<template>
  <h1>Table bata</h1>
  <ul class="mx-20">
    <li>
      <div class="flex items-start w-full font-bold text-lg border mt-5 px-10">
        <h1 class="w-[30%] mr-2">Name</h1>
        <h1 class="w-[19%] mr-2">Topic</h1>
        <h1 class="w-[19%] mr-2">Category</h1>
        <h1 class="w-[14%] mr-2">Date</h1>
        <h1 class="w-[12%] mr-2">Status</h1>
      </div>
    </li>
    <li>
      <div
        v-for="(data, index) in tableData"
        :key="index"
        class="flex items-start w-full text-lg border border-t-0 py-2 px-10"
      >
        <h1 class="w-[30%] mr-2">{{ data.name }}</h1>
        <h1 class="w-[19%] mr-2">{{ data.topic }}</h1>
        <h1 class="w-[19%] mr-2">{{ data.category }}</h1>
        <h1 class="w-[14%] mr-2">{{ data.date }}</h1>
        <h1 class="w-[12%] mr-2">{{ data.status }}</h1>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: '1',
          name: 'Christopher Nolan',
          topic: 'Movies',
          category: 'Director',
          date: '05/16/2023',
          status: 'Active',
          checked: false,
        },
      ],
      showDetails: false,
    };
  },
};
</script>
