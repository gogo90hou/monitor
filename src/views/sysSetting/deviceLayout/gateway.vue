<template>
  <div>
    <div class="publicheader">
      <h2>网关配置</h2>
      <div class="right-wrapper">
        <el-button type="primary" @click="dialogVisible = true">增加</el-button>
        <el-button type="primary">批量导入</el-button>
        <el-button type="primary">删除</el-button>
      </div>
    </div>
    <dynamic-table
      :field-arr="fieldArr"
      :getters="getters"
      :show-check-box="showCheckBox"
      @edit="edit"
    />
    <el-dialog title="网关配置" :visible.sync="dialogVisible" width="60%">
      <el-form :model="form">
        <el-form-item label="网关名称:">
          <el-input v-model="form.name" placeholder="网关名称" />
        </el-form-item>
        <el-form-item label="网关地址:">
          <el-input v-model="form.name" placeholder="网关名称" />
        </el-form-item>
        <el-form-item label="所在区域:">
          <el-input v-model="form.name" placeholder="网关名称" />
        </el-form-item>
        <el-form-item label="网关ID:">
          <el-input v-model="form.name" placeholder="网关名称" />
        </el-form-item>
        <el-form-item label="网关描述">
          <el-input v-model="form.name" placeholder="网关名称" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import DynamicTable from '@/components/DynamicTable/index'
export default {
  components: {
    DynamicTable
  },

  data () {
    return {
      getters: 'monitor/soft/list',
      form: {
        name: ''
      },
      showCheckBox: true,
      dialogVisible: false,
      fieldArr: [
        {
          label: '网关名称',
          key: 'name',
          filters: [{ text: '2016-05-01', value: '2016-05-01' }, { text: '2016-05-02', value: '2016-05-02' }, { text: '2016-05-03', value: '2016-05-03' }, { text: '2016-05-04', value: '2016-05-04' }]
        }, {
          label: '网关地址',
          key: 'area',
          formatter: ''
        }, {
          label: '网关ID',
          key: 'runState',
          formatter: ''
        }, {
          label: '所在区域',
          key: 'num',
          formatter: '(num)/(area)'
        }, {
          label: '网关描述',
          key: 'resState'
        }, {
          label: '操作',
          key: 'operation',
          needTemp: true,
          width: '200px',
          buttons: [{
            label: '编辑',
            type: 'url',
            path: '/detail',
            query: ['id', 'name']
          }, {
            label: '删除',
            type: 'button',
            method: 'edit'
          }]
        }
      ]
    }
  },
  created () {
    this.$store.dispatch('monitor/soft/getList')
  },
  methods: {
    edit (data) {
      console.log(data)
    }
  }
}
</script>
<style lang="scss">
.publicheader {
  overflow: hidden;
  padding: 10px 0;
  h2 {
    float: left;
  }
  .right-wrapper {
    float: right;
    width: 50%;
    text-align: right;
    .el-input {
      width: 200px;
    }
  }
}
</style>
