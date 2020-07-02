<template>
  <topo-dialog
    ref="setDialog"
    :title="'关联设备状态'"
    :handle-text="'绑定'"
    @handle="handle"
    @rightClick="rightClick"
  >
    <div class="topo-dialog-content-relevance">
      <el-form ref="form" :model="form" label-width="90px" style="width:100%;">
        <el-form-item label="关联设备 :" class="relevance-device">
          <el-select v-model="form.deviceId" placeholder="请选择关联的设备" style="display:block">
            <el-option
              v-for="(item, index) in deviceList"
              :key="index"
              :label="item.label"
              :value="item.key"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
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
  },
  data () {
    return {
      deviceList: [
        {
          key: '0001',
          label: '交换机'
        },
        {
          key: '0002',
          label: '服务器'
        },
        {
          key: '0003',
          label: '存储'
        },
        {
          key: '0004',
          label: '应用软件'
        }
      ],
      form: {
        deviceId: null
      }
    }
  },
  methods: {
    rightClick (item) {
      this.form.deviceId = item._cfg.model.meId;
    },
    handle (item) {
      if (this.form.deviceId) {
        let device = null;
        this.deviceList.forEach((element, index, arr) => {
          if (element.key === this.form.deviceId) {
            device = element;
          }
        })
        this.$emit('handle', { item, device });
        this.$refs['setDialog'].close();
        return;
      } else {
        this.$message('请选择要关联的设备');
      }
    }
  }
}
</script>
<style lang="scss">
.topo-dialog-content-relevance {
  padding: 26px 37px;
  padding-bottom: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .relevance-device {
    .el-form-item__label {
      font-size: 16px;
      font-weight: 400;
      color: rgba(153, 153, 153, 1) !important;
    }
    .el-select-dropdown__item {
      padding: 0px 20px;
    }
  }
}
</style>
