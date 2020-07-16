<template>
  <div class="trace-container">
    <div class="trace-title">
      <span class="title">全栈跟踪监控</span>
    </div>
    <div class="topo-container">
      <div class="topo-bg">
        <div v-contextmenu:contextmenu class="node service"></div>
        <div v-contextmenu:contextmenu class="node virtual"></div>
        <div v-contextmenu:contextmenu class="node application"></div>
        <cmd></cmd>
      </div>
    </div>
    <v-contextmenu ref="contextmenu">
      <v-contextmenu-item @click="config">配置信息</v-contextmenu-item>
      <v-contextmenu-item :divider="true"></v-contextmenu-item>
      <v-contextmenu-item @click="property">资产信息</v-contextmenu-item>
      <v-contextmenu-item :divider="true"></v-contextmenu-item>
      <v-contextmenu-item @click="cmd">远程命令</v-contextmenu-item>
    </v-contextmenu>
    <cmd :visible="dialogVisible" title="CMD 命令行工具" @close="close" @excute="excute"></cmd>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    config () {
      this.$router.push({ path: '/itManage' });
    },
    property () {
      window.open('http://http://192.168.0.209:36201/app/maintenance/templates/index.html#/qualification');
    },
    cmd () {
      this.dialogVisible = true;
    },
    close () {
      this.dialogVisible = false;
    },
    excute (cmd) {
      this.close();
      this.$message('功能正在开发，敬请期待')
    }
  }
}
</script>
<style lang="scss" scoped>
.trace-container {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-image: url("../../assets/bg.png");
  background-attachment: fixed;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .trace-title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 64px;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(17, 28, 62, 1);
    margin-left: 36px;
    .title {
      position: relative;
      font-size: 20px;
      color: #ffffff;
      padding-left: 30px;
      &::before {
        content: "";
        position: absolute;
        width: 3px;
        height: 80%;
        left: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        background-color: #ffffff;
      }
    }
  }
  .topo-container {
    position: absolute;
    width: 100%;
    height: calc(100% - 64px);
    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      /*滚动条整体样式*/
      width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
      height: 1px;
    }
    &::-webkit-scrollbar-thumb {
      /*滚动条里面小方块*/
      border-radius: 10px;
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      background: #535353;
    }
    &::-webkit-scrollbar-track {
      /*滚动条里面轨道*/
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      background: #ededed;
    }
    .topo-bg {
      position: absolute;
      height: 1164px;
      box-sizing: border-box;
      left: 36px;
      top: 55px;
      right: 96px;
      background-image: url("../../assets/topo.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      .node {
        position: absolute;
        width: 100px;
        height: 100px;
        &.service {
          left: 557px;
          top: 589px;
        }
        &.virtual {
          left: 467px;
          top: 789px;
        }
        &.application {
          left: 526px;
          top: 989px;
        }
      }
    }
  }
}
</style>
