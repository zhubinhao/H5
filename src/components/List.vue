<template>
  <div>
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    >
      <li class="list" v-for="(item,index) in list" :key="index" @click="nativeTo(item)">
        <img v-lazy="path+'/imgs/'+item.cover" />
        <div class="content">
          <h3>{{item.name}}</h3>
          <p>作者：{{item.author}}</p>
          <span>{{item.description||'无描述'}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: Array
  },
  data() {
    return {
      path: process.env.VUE_APP_URL
    };
  },
  mounted() {},
  methods: {
    loadMore() {
      this.$emit("next");
    },
    nativeTo(e) {
      this.$router.push({ path: `/introduction/${e.name}/${e.novelId}`});
    }
  }
};
</script>
<style scoped>
.list {
  min-height: 110px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;
  padding: 0 15px;
}
.list img {
  width: 70px;
  height: 90px;
  margin-right: 10px;
}
.content {
  min-height: 90px;
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.content h3 {
  font-weight: 500;
  font-size: 15px;
  margin-bottom: 5px;
}
.content span {
  font-size: 12px;
  line-height: 15px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  margin-top: 2px;
  height: 45px;
  color: gray;
}
</style>
