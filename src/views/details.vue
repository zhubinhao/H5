<template>
  <div>
    <Base-bar :title="name"></Base-bar>
    <div class="h-content">
      <h3>{{obj.name}}</h3>
      <div v-html="obj.content" class="content"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {},
      id: ""
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.name = this.$route.params.name;
    this.getData();
  },
  methods: {
    getData() {
      this.axios
        .get(`/chapters/${this.id}`)
        .then(res => {
          this.obj = res;
        })
        .catch(() => {
          this.lock = false;
        });
    }
  }
};
</script>
<style  scoped>
.content {
  padding: 10px;
  text-align: justify;
  color: gray;
  font-size: 18px;
  line-height: 28px;
}
h3 {
  font-weight: 500;
  text-align: center;
  padding-top: 10px;
  font-size: 19px;
}
</style>
