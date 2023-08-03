<template>
  <NavbarComp />
  <router-view />
</template>

<script>
import NavbarComp from './components/NavbarComp.vue';
import './assets/style.css';

export default {
  name: 'App',
  components: {
    NavbarComp,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
