<template>
  <div>
    <Base-bar :title="name"></Base-bar>
    <div class="h-content">
      <ul v-if="list.length!=0">
        <li  @click="toDetails(list[list.length-1])">
          最新
          <span>{{list[list.length-1].name}}</span>
        </li>
        <li>
          目录
          <span>共{{list.length}}章节</span>
        </li>
        <li v-for="(item,index) in list" :key="index" @click="toDetails(item)">{{item.name}}</li>
        
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      novel: {},
      id: "",
      name: ""
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.name = this.$route.params.name;
    this.getData();
  },
  methods: {
    getData() {
      this.axios.get("/chapters", {
          params: {
            novelId: this.id
          }
        }).then(res => {
          this.totalPage = res.totalPage;
          this.list = res.chapterList;
          this.novel = res.novel;
        }).catch(() => {
          this.lock = false;
        });
    },
    toDetails(e) {
      this.$router.push({ path: `/details/${e.name}/${e.chapterId}` });
    },
   
  }
};
</script>
<style  scoped>
ul {
  padding-top: 10px;
}
ul li {
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-bottom: 1px solid #f6f6f6;
  margin: 0 15px;
}
ul li span {
  color: gray;
  display: inline-block;
  margin-left: 10px;
}
</style>
