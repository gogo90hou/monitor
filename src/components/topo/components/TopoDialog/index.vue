<template>
  <div ref="topoDialog" class="hover-dialog">
    <div class="title">{{ title }}</div>
    <div class="solt">
      <slot></slot>
    </div>
    <div class="footer">
      <el-button type="info" @click="handle">{{ handleText }}</el-button>
      <el-button type="warning" @click="close">关闭</el-button>
    </div>
  </div>
</template>
<script>
import eventBus from '&/utils/eventBus';

export default {
  name: 'TopoDialog',
  props: {
    title: {
      type: String,
      default: () => {
        return '设备信息';
      }
    },
    handleText: {
      type: String,
      default: () => {
        return '确定'
      }
    }
  },
  created () {
    this.bindEvent();
  },
  methods: {
    bindEvent () {
      eventBus.$on('contextmenuClick', e => {
        const topoDialog = this.$refs['topoDialog'];
        if (!topoDialog) {
          return;
        }
        topoDialog.style.left = e.canvasX + 20 + 'px';
        topoDialog.style.top = e.canvasY - 120 + 'px';
        topoDialog.style.display = 'block';
      });
      eventBus.$on('mousedown', () => {
        if (!this.$refs['topoDialog']) {
          return;
        }
        this.close();
      });
    },
    handle () {
      this.$emit('handle');
    },
    open () {
      this.$refs['topoDialog'].style.display = 'block';
    },
    close () {
      this.$refs['topoDialog'].style.display = 'none';
    }
  }
}
</script>
<style scoped lang="scss">
.hover-dialog {
  $line-height: 43px;
  display: none;
  position: absolute;
  width: 500px;
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.32);
  .title {
    text-align: center;
    height: $line-height;
    line-height: $line-height;
    font-size: 20px;
    font-weight: bold;
    color: rgba(142, 132, 219, 1);
    border-bottom: 2px solid rgba(236, 236, 237, 0.62);
  }
  .solt {
    position: relative;
  }
  .footer {
    height: 97px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-width: 8px 4px;
    border-style: solid;
    border-color: transparent white white transparent;
    bottom: 0;
    top: 0;
    left: -7px;
    margin: auto;
  }
}
</style>
