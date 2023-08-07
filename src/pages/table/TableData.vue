<template>
  <h1 class="text-3xl font-semibold mb-5">Table Data</h1>
  <ul class="mx-20">
    <li>
      <div
        class="flex w-full bg-gray-500 text-white font-bold text-lg border mt-5 py-2 px-4"
      >
        <h1 class="flex w-[30%] mr-2">Name</h1>
        <h1 class="flex w-[19%] mr-2">Topic</h1>
        <h1 class="flex w-[19%] mr-2">Category</h1>
        <h1 class="flex w-[14%] mr-2">Date</h1>
        <h1 class="flex w-[12%] mr-2">Status</h1>
      </div>
    </li>
    <li>
      <div class="w-full" v-for="(data, index) in tableData" :key="index">
        <div
          class="flex items-start w-full text-lg border border-t-0 py-2 px-4"
          :class="data.description ? 'font-semibold underline' : 'font-normal'"
        >
          <div
            @click="toggleDescription(index)"
            v-if="data.description"
            class="flex cursor-pointer bg-gray-300 p-1 mr-[1%]"
          >
            <font-awesome-icon icon="chevron-up" />
          </div>
          <div
            @click="toggleDescription(index)"
            v-else
            class="flex cursor-pointer bg-gray-300 p-1 mr-[1%]"
          >
            <font-awesome-icon icon="chevron-down" />
          </div>
          <h1 class="flex w-[27%] mr-2">{{ data.name }}</h1>
          <h1 class="flex w-[19%] mr-2">{{ data.topic }}</h1>
          <h1 class="flex w-[19%] mr-2">{{ data.category }}</h1>
          <h1 class="flex w-[14%] mr-2">{{ data.date }}</h1>
          <h1 class="flex w-[12%] mr-2">{{ data.status }}</h1>
        </div>
        <TableDesc
          v-if="data.description"
          :data="data"
          @update-data="updateData"
        />
      </div>
    </li>
  </ul>
</template>

<script>
import TableDesc from './TableDesc.vue';

export default {
  components: {
    TableDesc,
  },

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
          description: false,
        },
        {
          id: '2',
          name: 'Steve Smith',
          topic: 'Cricket',
          category: 'Batsman',
          date: '11/16/2023',
          status: 'Complete',
          description: false,
        },
        {
          id: '3',
          name: 'Tyron john',
          topic: 'Business',
          category: 'Corporate Dealer',
          date: '10/22/2023',
          status: 'Failed',
          description: false,
        },
        {
          id: '4',
          name: 'Emilia Scott',
          topic: 'Envirementalist',
          category: 'Ozone layer',
          date: '01/06/2023',
          status: 'Active',
          description: false,
        },
      ],
      showDetails: false,
    };
  },

  methods: {
    toggleDescription(index) {
      this.tableData[index].description = !this.tableData[index].description;
    },

    updateData(updatedData) {
      this.tableData = this.tableData.map((item) => {
        if (item.id === updatedData.id) {
          return { ...updatedData };
        } else {
          return item;
        }
      });
    },
  },
};
</script>
