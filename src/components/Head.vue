<template>
  <div class="Head">
    <div class="Head-top">
      <img v-lazy="path+'/novels/cover/'+novel.cover" alt />
      <div>
        <h3>{{novel.name}}</h3>
        <p>{{novel.author}}</p>
        <p>{{novel.status}}</p>
      </div>
    </div>
    <div class="Head-msg">{{novel.description}}</div>
  </div>
</template>

<script>
export default {
  props: {
    novel: Object
  },
  data() {
    return {
      path: process.env.VUE_APP_URL
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style scoped>
.Head {
  padding: 15px 10px;
  border-bottom: 10px solid #f6f6f6;
}
.Head-top {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
.Head-top img {
  width: 70px;
  height: 90px;
  margin-right: 10px;
}
.Head-top p {
  color: gray;
}
.Head-msg {
  color: gray;
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  line-height: 18px;
  font-size: 13px;
}
</style>
