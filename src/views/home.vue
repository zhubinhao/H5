<template>
  <div class="home">
    <Base-bar title="首页"></Base-bar>
    <div class="h-content">
      <base-list :list="list" @next="next"></base-list>
    </div>
  </div>
</template>

<script>
import List from "../components/List";
export default {
  name: "home",
  components: {
    "base-list": List
  },
  data() {
    return {
      list: [],
      pageNo: 0,
      lock: false,
      totalPage: 1
    };
  },
  mounted() {},
  methods: {
    getData() {
      this.lock = true;
      this.axios
        .get("/novels", {
          params: {
            pageNo: this.pageNo
          }
        })
        .then(res => {
          this.lock = false;
          this.totalPage = res.totalPage;
          this.list = [...this.list, ...res.list];
        })
        .catch(() => {
          this.lock = false;
        });
    },
    next() {
      if (this.lock) return;
      if (this.pageNo >= this.totalPage) return;
      this.pageNo++;
      this.getData();
    }
  }
};
</script>
