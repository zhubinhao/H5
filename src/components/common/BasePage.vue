<template>
  <div class="footer">
    <mt-button size="small" @click="pro">上一页</mt-button>
    <div class="btn" @click="popupVisible=true">{{text}}</div>
    <mt-button size="small" @click="next">下一页</mt-button>

    <mt-popup v-model="popupVisible" position="bottom">
      <mt-picker
        :slots="list"
        @change="onValuesChange"
        style="width: 750px;"
        showToolbar
        :itemHeight="70"
        value-key="name"
      >
        <div class="picker-toolbar-title">
          <div class="usi-btn-cancel" @click="popupVisible = !popupVisible">取消</div>
          <div class="usi-btn-sure" @click="getValues()">确定</div>
        </div>
      </mt-picker>
    </mt-popup>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: ["pageNo", "total"],
  data() {
    return {
      popupVisible: false,
      index: 0
    };
  },
  computed: {
    list() {
      var arr = [];
      for (let i = 0; i < parseInt(this.total); i++) {
        let obj = { id: i, name: `第${i * 20 + 1}章-第${i * 20 + 20}章` };
        arr.push(obj);
      }
      return [
        {
          values: arr
        }
      ];
    },
    text() {
      console.log(this.pageNo);
      return `第${this.pageNo * 20 + 1 - 20}章-第${this.pageNo * 20}章`;
    }
  },
  watch: {},
  mounted() {},
  methods: {
    pro() {
      let i = this.pageNo
      if(i<=1)return
      this.$emit("next", i - 1);

    },
    next() {
      let i = this.pageNo
      this.$emit("next", i + 1);

    },
    onValuesChange(picker, values) {
      this.index = values[0].id;
    },
    getValues() {
      this.popupVisible = false;
      this.$emit("next", this.index + 1);
    }
  }
};
</script>
<style scoped>
.footer {
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
}
.btn {
  flex: 1;
  margin: 0 10px;
  border: 1px solid #f6f8fa;
  background-color: #f6f8fa;
  box-shadow: 0 0 1px #b8bbbf;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 5px;
}
.picker {
  width: 750px;
  position: relative;
}
.picker .btns {
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  z-index: 99909000;
  position: absolute;
}
.picker-toolbar-title {
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  font-size: 18px;
}
.usi-btn-sure {
  color: #26a2ff;
}
</style>