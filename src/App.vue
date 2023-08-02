<template>
  <NavbarComp />
  <router-view />
  <!-- <HelloWorld msg="Welcome App" /> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import NavbarComp from './components/NavbarComp.vue';
import './assets/style.css';

export default {
  name: 'App',
  components: {
    NavbarComp,
    // HelloWorld,
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
  margin-top: 60px;
}
</style>
