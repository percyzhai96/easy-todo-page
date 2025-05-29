<template>
  <div class="layout_class">
    <div class="title_text">{{ tileText }}</div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LayoutArea',
  props: {
    tileText: {
      type: String,
      default: '',
    },
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
.layout_class {
  width: 100%;
  height: auto;
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 32px 20px;
}
.title_text {
  height: 21px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: normal;
  color: #4c4c4c;
  margin-bottom: 8px;
}
</style>
