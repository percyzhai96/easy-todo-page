<template>
  <div id="app" class="scroll_controller">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
  max-height: calc(100vh - 60px);
  overflow: auto; /* 确保内容溢出时可以滚动 */
}
</style>
