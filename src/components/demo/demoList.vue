<template>
     <div class="demo-list">{{ msg }}</div>
</template>

<script>
export default {
  name: 'demo-list',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.demo-list{
    color: #666;
    font-size: 12px;
}
</style>
