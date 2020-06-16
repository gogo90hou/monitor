<template>
  <topo-dialog
    ref="warningDialog"
    :title="'异常说明'"
    :handle-text="'立即处理'"
    @handle="handle"
    @rightClick="rightClick"
  >
    <table class="content">
      <tr>
        <td class="label">告警源：</td>
        <td class="value danger">{{ source }}</td>
        <td class="label">告警级别：</td>
        <td class="value danger">{{ level }}</td>
      </tr>
      <tr>
        <td class="label">告警描述：</td>
        <td colspan="3" class="value description">{{ description }}</td>
      </tr>
    </table>
  </topo-dialog>
</template>
<script>
import TopoDialog from './index.vue';

export default {
  name: 'WarningDialog',
  components: {
    TopoDialog
  },
  props: {
    title: {
      type: String,
      default: () => {
        return '设备信息';
      }
    },
    source: {
      type: String,
      default: () => {
        return '未知';
      }
    },
    level: {
      type: String,
      default: () => {
        return '致命'
      }
    },
    description: {
      type: String,
      default: () => {
        return '描述信息'
      }
    }
  },
  methods: {
    rightClick (item) {

    },
    handle (item) {
      this.$emit('handle', item._cfg.model.meId);
      this.$refs['warningDialog'].close();
    }
  }
}
</script>
<style lang="scss" scoped>
.content {
  $line-height: 43px;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 800;
  color: rgba(153, 153, 153, 1);
  line-height: $line-height;
  width: 100%;
  tr {
    min-height: $line-height;
    .label {
      width: 120px;
      text-align: right;
    }
    .value {
      &.description {
        color: rgba(102, 102, 102, 1);
      }
      &.danger {
        color: #ff0000;
      }
    }
  }
}
</style>
