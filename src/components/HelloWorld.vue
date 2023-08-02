<template>
  <h1 class="bg-amber-600 text-5xl">{{ msg }}</h1>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>
