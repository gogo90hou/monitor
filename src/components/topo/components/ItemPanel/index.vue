<template>
  <div ref="itempannel" class="itempannel">
    <div v-show="toggle" class="content">
      <div class="pannel-top">
        <div class="select">
          <span class="icon iconfont iconicon_click" />
          <span>图元选择</span>
        </div>
        <div class="close">
          <span class="icon iconfont iconicon_close" @click="toggle = !toggle" />
        </div>
      </div>
      <item
        v-for="(item, index) in deviceList"
        :key="index"
        :name="item.label"
        :item-list="item.items"
      />
    </div>
    <div class="toggle" @click="toggleFold()">
      <div :class="toggle ? 'pack-up': 'un-fold'" />
    </div>
  </div>
</template>

<script>
import Item from './item';
import eventBus from '&/utils/eventBus';
export default {
  name: 'ItemPanel',
  components: { Item },
  data () {
    return {
      toggle: true, // 开关状态，true表示侧边栏打开，false表示侧边栏关闭
      page: null,
      command: null,
      exampleItem: {
        name: '测试节点',
        label: '测试节点',
        size: '170*34',
        type: 'node',
        x: 0,
        y: 0,
        shape: 'customNode',
        color: '#1890ff',
        image:
          'https://gw.alipayobjects.com/zos/rmsportal/czNEJAmyDpclFaSucYWB.svg',
        stateImage: null, // 图片
        inPoints: [[0, 0.5]],
        outPoints: [[1, 0.5]]
      },
      deviceList: [
        {
          type: 'device',
          label: 'IT设备',
          items: [
            {
              value: 'service',
              label: '服务器',
              fontIcon: 'iconicon_server',
              text: '\ue799',
              shape: 'monitorNode',
              size: [36, 36],
              inPoints: [[0, 0.5]],
              outPoints: [[1, 0.5]],
              warning: { source: '省局服务器', level: 0, description: '提示(告警描述)' }
            },
            {
              value: 'service',
              label: '交换机',
              fontIcon: 'iconicon_IT_equipment',
              text: '\ue78c',
              shape: 'monitorNode',
              size: [36, 36],
              inPoints: [[0, 0.5]],
              outPoints: [[1, 0.5]],
              warning: { source: '省局服务器', level: 0, description: '提示(告警描述)' }
            },
            {
              value: 'service',
              label: '防火墙',
              fontIcon: 'iconicon_firewall',
              text: '\ue798',
              shape: 'monitorNode',
              size: [36, 36],
              inPoints: [[0, 0.5]],
              outPoints: [[1, 0.5]],
              warning: { source: '省局服务器', level: 0, description: '提示(告警描述)' }
            },
            {
              value: 'service',
              label: '存储',
              fontIcon: 'iconicon_data_base',
              text: '\ue797',
              shape: 'monitorNode',
              size: [36, 36],
              inPoints: [[0, 0.5]],
              outPoints: [[1, 0.5]],
              warning: { source: '省局服务器', level: 0, description: '提示(告警描述)' }
            }
          ]
        },
        {
          type: 'application',
          label: '应用服务',
          items: [
            {
              value: 'app',
              label: '应用软件',
              fontIcon: 'iconicon_Application_software',
              text: '\ue77f',
              shape: 'monitorNode',
              size: [36, 36],
              inPoints: [[0, 0.5]],
              outPoints: [[1, 0.5]],
              warning: { source: '省局服务器', level: 0, description: '提示(告警描述)' }
            },
            {
              value: 'app',
              label: '应用软件',
              fontIcon: 'iconicon_Application_software',
              text: '\ue77f',
              shape: 'monitorNode',
              size: [36, 36],
              inPoints: [[0, 0.5]],
              outPoints: [[1, 0.5]],
              warning: { source: '省局服务器', level: 0, description: '提示(告警描述)' }
            },
            {
              value: 'app',
              label: '应用软件',
              fontIcon: 'iconicon_Application_software',
              text: '\ue77f',
              shape: 'monitorNode',
              size: [36, 36],
              inPoints: [[0, 0.5]],
              outPoints: [[1, 0.5]],
              warning: { source: '省局服务器', level: 0, description: '提示(告警描述)' }
            },
            {
              value: 'app',
              label: '应用软件',
              fontIcon: 'iconicon_Application_software',
              text: '\ue77f',
              shape: 'monitorNode',
              size: [36, 36],
              inPoints: [[0, 0.5]],
              outPoints: [[1, 0.5]],
              warning: { source: '省局服务器', level: 0, description: '提示(告警描述)' }
            }
          ]
        }
      ]
    };
  },
  created () {
    this.bindEvent();
  },
  mounted () {
    this.$emit('toggle', this.$refs['itempannel'].offsetWidth);
  },
  methods: {
    toggleFold () {
      this.toggle = !this.toggle;
      this.$nextTick(() => {
        this.$emit('toggle', this.$refs['itempannel'].offsetWidth);
      });
    },
    bindEvent () {
      eventBus.$on('afterAddPage', page => {
        this.page = page;
      });
    },
    setClass (item) {
      const obj = {};
      obj[item] = true;
      return obj;
    }
  }
};
</script>

<style scoped lang="scss">
.noWidth {
  width: 0px !important;
}
.itempannel {
  position: absolute;
  z-index: 2;
  height: 100%;
  background: rgba(246, 245, 254, 1);
  border-right: 12px solid rgba(237, 236, 245, 1);
  box-sizing: border-box;
  .content {
    width: 385px;
    padding: 10px 10px;
    .pannel-top {
      display: flex;
      justify-content: space-between;
      padding-top: 12px;
      padding-bottom: 12px;
      .select {
        flex: 0 0 50%;
        font-size: 0px;
        text-align: left;
        span:nth-child(1) {
          display: inline-block;
          width: 18px;
          height: 18px;
          color: #7667df;
        }
        span:nth-child(2) {
          font-size: 16px;
          font-weight: bold;
          color: rgba(48, 47, 71, 1);
          line-height: 18px;
          margin-left: 12px;
        }
      }
      .close {
        flex: 0 0 50%;
        text-align: right;
        span {
          color: black;
          font-size: 20px;
          font-weight: bold;
          opacity: 0.6;
        }
      }
    }
  }
  .toggle {
    position: absolute;
    width: 12px;
    height: 105px;
    margin-top: auto;
    margin-bottom: auto;
    top: 0;
    bottom: 0;
    right: -12px;
    background-color: #c7c2ec;
    div {
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      border-style: solid;
      border-width: 7px 7px 7px 7px;
      width: 0px;
      height: 0px;
    }
    .pack-up {
      left: -5px;
      border-color: transparent #fff transparent transparent;
    }
    .un-fold {
      right: -5px;
      border-color: transparent transparent transparent #fff;
    }
  }
}
</style>
