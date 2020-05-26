<template>
  <div class="item-container">
    <div class="item-top">
      <div class="title">
        <span>{{ name }}</span>
      </div>
      <div class="line" />
      <div class="fold" @click="toggle = !toggle">
        <span class="icon iconfont" :class="toggle ? 'iconarrow_carrot-down_alt2' : 'iconarrow_carrot-up_alt2'" :title="toggle ? '点击折叠' : '点击展开'" />
      </div>
    </div>
    <ul class="items" :class="toggle ? '' : 'toggleFold'">
      <li
        v-for="(item, index) in itemList"
        :key="index"
        draggable
        @dragstart="handleDragstart"
        @dragend="handleDragEnd($event,item)"
      >
        <div class="icon iconfont" :class="item.fontIcon" />
        <span>{{ item.label }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import eventBus from '&/utils/eventBus';
export default {
  name: 'Item',
  props: {
    name: {
      type: String,
      default: '类型'
    },
    itemList: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      toggle: true, // 开关状态，true表示侧边栏打开，false表示侧边栏关闭
      page: null,
      command: null,
      offsetX: 0,
      offsetY: 0
    };
  },
  created() {
    this.bindEvent();
  },
  methods: {
    handleDragstart(e) {
      this.offsetX = e.offsetX;
      this.offsetY = e.offsetY;
    },
    handleDragEnd(e, item) {
      const data = {};
      Object.assign(data, item);
      data.offsetX = this.offsetX;
      data.offsetY = this.offsetY;
      if (this.page) {
        const graph = this.page.graph;
        // const size = e.target.dataset.size.split('*');
        const xy = graph.getPointByClient(e.x, e.y);
        data.x = xy.x;
        data.y = xy.y;
        data.size = item.size || [36, 36];
        data.type = 'node';
        this.command.executeCommand('add', [data]);
      }
    },
    bindEvent() {
      eventBus.$on('afterAddPage', page => {
        this.page = page;
        this.command = page.command;
      });
    }
  }
};
</script>

<style scoped lang="scss">
.toggleFold {
  height: 0;
  overflow: hidden;
}
.item-top {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  .title {
    flex: 0 1 auto;
    display: inline-block;
    font-size:14px;
    font-weight:bold;
    color:rgba(181,181,182,1);
    line-height:18px;
    border-left: 3px solid;
    span {
      margin-left: 7px;
    }
  }
  .line {
    flex: 1 1 auto;
    display: inline-block;
    height: 1px;
    opacity:0.8;
    border-left: 9px solid transparent;
    background:rgba(175,169,220,1);
    background-clip: content-box;
  }
  .fold {
    flex: 0 0 16px;
    display: inline-block;
    height: 16px;
  }
}
.items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
  margin-top: 22px;
  margin-bottom: 26px;
  list-style: none;
  font-size:16px;
  font-weight:400;
  color:rgba(102,102,102,1);
  li {
    flex: 0 0 100px;
    height: 86px;
    padding-top: 8px;
    margin-bottom: 20px;
    background:rgba(255,255,255,0.55);
    border-radius:3px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    div {
      display: inline-block;
      width: 34px;
      height: 32px;
      font-size: 32px;
      color: #7667DF;
      text-align: center;
    }
    span {
      flex: 0 0 auto;
      line-height:18px;
      text-align: center;
    }
  }
}
</style>
