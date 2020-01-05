<template>
   <mt-header fixed  :title="title||''">
      <div slot="left" @click="back">
        <mt-button icon="back">返回</mt-button>
      </div>
    </mt-header>
</template>

<script>
export default {
  inheritAttrs: false,
  props:["title"],
  data() {
    return {
    };
  },
  watch: {
    $route(to) {
        console.log(to)
    }
  },
  mounted() {
  

  },
  methods: {
    back(){
      history.go(-1)
    }
  }
};
</script>

<style scoped>

</style>