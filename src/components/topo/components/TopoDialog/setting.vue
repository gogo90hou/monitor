<template>
  <topo-dialog :title="'关联设备状态'" :handle-text="'绑定'" @handle="handle">
    <div class="topo-dialog-content-relevance">
      <el-form ref="form" :model="form" label-width="90px" style="width:100%;">
        <el-form-item label="关联设备 :" class="relevance-device">
          <el-select v-model="form.region" placeholder="请选择关联的设备" style="display:block">
            <el-option label="设备一" value="shanghai"></el-option>
            <el-option label="设备二" value="beijing"></el-option>
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
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    handle () {
      this.$emit('handle');
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
